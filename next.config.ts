import type {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/core/i18n/i18n.ts');

const nextConfig: NextConfig = {
	reactStrictMode: false,
	experimental: {
		viewTransition: true,
		authInterrupts: true,
		serverActions: {
			bodySizeLimit: '30mb',
		},
	},
	// compiler: {
	// Set to false to keep logs, or specifically exclude types
	// removeConsole: false,
	// OR keep errors/warnings but remove debug logs:
	// removeConsole: { exclude: ['error', 'warn'] },
	// },
	logging: {
		incomingRequests: {
			ignore: [/\api\/v1\/health/],
		},
		fetches: {
			fullUrl: true,
			hmrRefreshes: true,
		},
	},
	output: 'standalone',
	// outputFileTracingRoot: path.join(__dirname, '../../')
};

export default withNextIntl(nextConfig);
