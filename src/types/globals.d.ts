import type { TelegramWebApps } from 'telegram-webapps-types';
import { InternalResponse } from '@/generated';

declare global {
	interface ErrorResponse extends InternalResponse {
		code: string;
	}

	interface Window {
		Telegram: TelegramWebApps.SDK;
	}
}

export {};
