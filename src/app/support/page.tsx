'use client';

import { List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { Page } from '@/components/Page';

export default function SupportPage() {
	const t = useTranslations('i18n');

	return (
		<Page back={false}>
			<List></List>
		</Page>
	);
}
