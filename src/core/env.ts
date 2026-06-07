import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

console.log(process.env);
export const env = createEnv({
	/**
	 * 🌐 Client-side vars (browser safe)
	 */
	client: {
		NEXT_PUBLIC_API_URL: z.url(),
		NEXT_PUBLIC_API_PORT: z.number(),
		NEXT_PUBLIC_NODE_ENV: z.string(),
	},

	/**
	 * 🔄 Runtime values (don't change!)
	 */
	experimental__runtimeEnv: {
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		NEXT_PUBLIC_API_PORT: Number(process.env.NEXT_PUBLIC_API_PORT),
		NEXT_PUBLIC_NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
	},

	/**
	 * ⏰ Skip validation in dev (faster)
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
