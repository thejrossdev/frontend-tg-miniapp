'use client';

import { AppRoot } from '@telegram-apps/telegram-ui';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { type PropsWithChildren, useEffect } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ErrorPage } from '@/components/ErrorPage';
import { handleLogin } from '@/core/actions/authActions';
import { setLocale } from '@/core/i18n/locale';
import { useAuthStore, useGlobalErrorStore } from '@/core/stores';
import { useDidMount } from '@/hooks/useDidMount';
import { initData, miniApp, useLaunchParams, useSignal } from '@tma.js/sdk-react';
import './styles.css';

export const RootInner = ({ children }: PropsWithChildren) => {
	const lp = useLaunchParams();

	const isDark = useSignal(miniApp.isDark);
	const initDataUser = useSignal(initData.user);

	useEffect(() => {
		initDataUser && setLocale(initDataUser.language_code);
	}, [initDataUser]);

	return (
		<TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
			<AppRoot
				className={'flex flex-col min-h-screen'}
				appearance={isDark ? 'dark' : 'light'}
				platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
			>
				{children}
			</AppRoot>
		</TonConnectUIProvider>
	);
};

export function Root(props: PropsWithChildren) {
	// Unfortunately, Telegram Mini Apps does not allow us to use all features of
	// the Server Side Rendering. That's why we are showing loader on the server
	// side.
	const { isAuthenticated, isLoading, isBlocked } = useAuthStore();
	const { rawError } = useGlobalErrorStore();
	const didMount = useDidMount();

	useEffect(() => {
		handleLogin();
	}, [isAuthenticated]);

	console.log(useGlobalErrorStore.getState().rawError);

	const body = () => {
		if (didMount && isAuthenticated && !isLoading) {
			return (
				<ErrorBoundary fallback={ErrorPage}>
					<RootInner {...props} />
				</ErrorBoundary>
			);
		}

		console.log(rawError?.code);

		if (rawError && rawError?.code) {
			switch (rawError.code) {
				case 'TELEGRAM_UNAUTHORIZED':
					return (
						<ErrorPage
							error={{
								message: rawError.message,
								digest: rawError.statusCode.toString(),
								name: rawError.code.toString(),
							}}
						/>
					);
			}
		}

		if (isBlocked) {
			return <ErrorPage error={{ message: 'You are blocked', digest: '403', name: 'AUTH_BLOCKED' }} />;
		}

		return <div className="root__loading">Loading</div>;
	};

	return <>{body()}</>;
}
