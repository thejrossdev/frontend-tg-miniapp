'use client';

import { AppRoot } from '@telegram-apps/telegram-ui';
import { initData, miniApp, useLaunchParams, useSignal } from '@tma.js/sdk-react';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type PropsWithChildren, useEffect } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorPage } from '@/components/ErrorPage';
import { setLocale } from '@/core/i18n/locale';
import { useDidMount } from '@/hooks/useDidMount';

import './styles.css';

function RootInner({ children }: PropsWithChildren) {
	const lp = useLaunchParams();

	const isDark = useSignal(miniApp.isDark);
	const initDataUser = useSignal(initData.user);

	// Set the user locale.
	useEffect(() => {
		initDataUser && setLocale(initDataUser.language_code);
	}, [initDataUser]);

	return (
		<TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
			<AppRoot
				appearance={isDark ? 'dark' : 'light'}
				platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
			>
				{children}
			</AppRoot>
		</TonConnectUIProvider>
	);
}

export function Root(props: PropsWithChildren) {
	// Unfortunately, Telegram Mini Apps does not allow us to use all features of
	// the Server Side Rendering. That's why we are showing loader on the server
	// side.
	const didMount = useDidMount();

	return didMount ? (
		<ErrorBoundary fallback={ErrorPage}>
			<RootInner {...props} />
		</ErrorBoundary>
	) : (
		<div className="root__loading">Loading</div>
	);
}
