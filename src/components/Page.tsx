'use client';

import Footer from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { PropsWithChildren } from 'react';

export interface PageProps extends PropsWithChildren<{
	/**
	 * True if it is allowed to go back from this page.
	 * @default true
	 */
	back?: boolean;
}> {}

export function Page({ children, back = true }: PageProps) {
	return (
		<>
			<Header back={back} />
			<main className="content flex-1 overflow-y-auto">{children}</main>
			<Footer />
		</>
	);
}
