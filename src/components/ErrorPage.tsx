import { RootInner } from '@/components/Root/Root';
import { useEffect } from 'react';

export function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset?: () => void }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<RootInner>
			<div className={'min-h-screen min-w-screen flex flex-col justify-center items-center p-6'}>
				<h2>An unhandled error occurred!</h2>
				<blockquote className={'mt-4 text-center'}>
					<code>{error.message}</code>
				</blockquote>
				<blockquote className={'mt-4 text-center'}>
					<code>{error.name}</code>
				</blockquote>
				{reset && (
					<button className={'mt-4'} onClick={() => reset()}>
						Try again
					</button>
				)}
			</div>
		</RootInner>
	);
}
