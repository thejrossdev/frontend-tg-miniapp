import { PageProps } from '@/components/Page';
import { ArrowLeft02Icon, HandsClappingIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button, Headline, List } from '@telegram-apps/telegram-ui';
import { backButton, initData, useSignal } from '@tma.js/sdk-react';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

import { bem } from '@/css/bem';
import { useTranslations } from 'next-intl';
import './Header.css';

const [, e] = bem('header');

export interface HeaderProps extends Omit<PageProps, 'children'> {
	title?: string;
}

export const Header: FC<HeaderProps> = ({ back = false, title }: HeaderProps) => {
	const router = useRouter();
	const initDataState = useSignal(initData.state);
	const t = useTranslations();

	const getUser = () => {
		return initDataState && initDataState.user ? (
			<div className={'mx-4 inline-flex'}>
				<Headline>
					{title ??
						(initDataState.user.first_name
							? t('greeting', {
									name: `${initDataState.user.first_name} ${initDataState.user.last_name ?? ''}`,
								})
							: t('greeting', { name: initDataState.user.username ?? '' }))}
				</Headline>
				<HugeiconsIcon className={'ml-2'} icon={HandsClappingIcon} />
			</div>
		) : (
			<></>
		);
	};

	useEffect(() => {
		if (back) {
			backButton.show();
		} else {
			backButton.hide();
		}
	}, [back]);

	useEffect(() => {
		return backButton.onClick(() => {
			router.back();
		});
	}, [router]);

	return (
		<List className={`relative flex items-center justify-between p-5 header`}>
			{back ? (
				<Button>
					<HugeiconsIcon width={24} height={24} icon={ArrowLeft02Icon} />
				</Button>
			) : null}
			{getUser()}
			<List>
				{/*<Link href={'/notifications'} exact>*/}
				{/*	<NotificationBadge />*/}
				{/*</Link>*/}
			</List>
		</List>
	);
};
