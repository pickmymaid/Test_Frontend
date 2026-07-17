'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/types'

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  setAuth: (user: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setAuth: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: 'pmm-auth' }
  )
)

export function useSubscription() {
  const user = useAuthStore((s) => s.user)
  return {
    isSubscribed: user?.isSubscribed ?? false,
    tier: user?.subscriptionTier ?? null,
  }
}
