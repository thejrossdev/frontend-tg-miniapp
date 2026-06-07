// This file is normally used for setting up analytics and other
// services that require one-time initialization on the client.

import { env, init } from '@/core';
import { retrieveLaunchParams } from '@tma.js/sdk-react';
import { mockEnv } from './mockEnv';

mockEnv().then(() => {
	try {
		const launchParams = retrieveLaunchParams();
		const { tgWebAppPlatform: platform } = launchParams;
		const debug =
			(launchParams.tgWebAppStartParam || '').includes('debug') || env.NEXT_PUBLIC_NODE_ENV === 'development';

		// Configure all application dependencies.
		init({
			debug,
			eruda: debug && ['ios', 'android'].includes(platform),
			mockForMacOS: platform === 'macos',
		});
	} catch (e) {
		console.log(e);
	}
});
