'use client';

import { UserSafe } from '@/generated';
import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand/react';

export type AuthState = {
	user: UserSafe | null;
	isLoading: boolean;
	isAuthenticated: boolean;
	isBlocked: boolean;

	login: (userData: UserSafe) => void;
	logout: () => void;
	setLoading: (loading: boolean) => void;
	setBlocked: (blocked: boolean) => void;
	updateUser: (partialUser: Partial<UserSafe>) => void;
};

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			isLoading: false,
			isAuthenticated: false,
			isBlocked: false,

			login: (userData) =>
				set({
					user: userData,
					isAuthenticated: true,
					isLoading: false,
				}),

			logout: () =>
				set({
					user: null,
					isAuthenticated: false,
					isLoading: false,
				}),

			setLoading: (loading) => set({ isLoading: loading }),

			setBlocked: (blocked) => set({ isBlocked: blocked }),

			updateUser: (partialUser) =>
				set((state) => ({
					user: state.user ? { ...state.user, ...partialUser } : null,
				})),
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => localStorage),

			partialize: (state) => ({
				user: state.user,
				isAuthenticated: state.isAuthenticated,
			}),
		},
	),
);
