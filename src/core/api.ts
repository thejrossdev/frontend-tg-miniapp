import { env } from '@/core/env';
import { useGlobalErrorStore } from '@/core/stores';
import { Api } from '@/generated';

export const api = new Api();

api.instance.defaults.baseURL = `${env.NEXT_PUBLIC_API_URL}:${env.NEXT_PUBLIC_API_PORT}`;
api.instance.interceptors.response.use(
	(response) => response,
	(error) => {
		const message = error.response?.data?.message || 'Network exception occurred';

		// Automatically publish error to the UI state layer
		useGlobalErrorStore.getState().setRawError(error?.response?.data as ErrorResponse);
		useGlobalErrorStore.getState().showNotification(message);

		return Promise.reject(error);
	},
);
