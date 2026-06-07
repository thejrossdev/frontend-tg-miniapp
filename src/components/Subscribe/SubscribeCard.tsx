import { Caption, List, Progress, Title } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

export const SubscribeCard = () => {
	const t = useTranslations();

	return (
		<div className={'flex flex-col m-4 p-4 gap-2 relative'}>
			<List className={'flex justify-between items-center'}>
				<Title className={'mr-2'}>{t('subscribe.title', { name: 'Premium' })}</Title>
				<div className={'flex p-2 rounded-2xl'}>Активна</div>
			</List>
			<List className={'mt-2'}>
				<Caption>fds</Caption>
				<Progress />
			</List>
		</div>
	);
};
