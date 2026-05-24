import { useState, useEffect, useCallback } from 'react'

const KEY = 'claudeAcademy_v1'

const defaultState = () => ({
  completedLessons: [],
  quizScores: {},       // lessonId -> { score, total, date }
  completedChallenges: [],
  xp: 0,
  lastVisited: null,    // { moduleId, lessonId }
  streak: { count: 0, lastDate: null },
  startedAt: new Date().toISOString(),
})

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY)
      return raw ? { ...defaultState(), ...JSON.parse(raw) } : defaultState()
    } catch {
      return defaultState()
    }
  })

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(progress)) } catch {}
  }, [progress])

  const completeQuiz = useCallback((lessonId, score, total) => {
    setProgress(p => {
      const already = p.quizScores[lessonId]
      const xpGain = already ? 0 : score * 10
      const today = todayStr()
      const streak = p.streak.lastDate === today
        ? p.streak
        : { count: p.streak.count + 1, lastDate: today }
      return {
        ...p,
        quizScores: { ...p.quizScores, [lessonId]: { score, total, date: today } },
        xp: p.xp + xpGain,
        streak,
        lastVisited: { lessonId },
      }
    })
  }, [])

  const completeChallenge = useCallback((lessonId) => {
    setProgress(p => {
      if (p.completedChallenges.includes(lessonId)) return p
      const today = todayStr()
      const streak = p.streak.lastDate === today
        ? p.streak
        : { count: p.streak.count + 1, lastDate: today }
      // mark lesson complete when both quiz done and challenge done
      const quizDone = !!p.quizScores[lessonId]
      const newCompleted = quizDone && !p.completedLessons.includes(lessonId)
        ? [...p.completedLessons, lessonId]
        : p.completedLessons
      return {
        ...p,
        completedChallenges: [...p.completedChallenges, lessonId],
        completedLessons: newCompleted,
        xp: p.xp + 25,
        streak,
        lastVisited: { lessonId },
      }
    })
  }, [])

  const setLastVisited = useCallback((lessonId) => {
    setProgress(p => ({ ...p, lastVisited: { lessonId } }))
  }, [])

  const resetAll = useCallback(() => {
    const fresh = defaultState()
    setProgress(fresh)
  }, [])

  // Derived helpers
  const getLessonStatus = useCallback((lessonId) => ({
    quizDone:       !!progress.quizScores[lessonId],
    challengeDone:  progress.completedChallenges.includes(lessonId),
    lessonComplete: progress.completedLessons.includes(lessonId),
    quizScore:      progress.quizScores[lessonId] ?? null,
  }), [progress])

  return { progress, completeQuiz, completeChallenge, setLastVisited, resetAll, getLessonStatus }
}
