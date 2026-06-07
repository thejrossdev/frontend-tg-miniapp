// 1. Centralized UI notification store
import { create } from 'zustand';

// 1. Centralized UI notification store
interface GlobalErrorState {
	rawError: ErrorResponse | null;
	errorMessage: string | null;

	setRawError: (err: ErrorResponse) => void;
	showNotification: (msg: string) => void;
	clearNotification: () => void;
}

export const useGlobalErrorStore = create<GlobalErrorState>((set) => ({
	errorMessage: null,
	rawError: null,
	showNotification: (msg) => set({ errorMessage: msg }),
	clearNotification: () => set({ errorMessage: null }),
	setRawError: (err) => set({ rawError: err }),
}));
