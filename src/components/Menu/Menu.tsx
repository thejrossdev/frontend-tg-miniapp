import { Link } from '@/components/Link/Link';
import { MailOpen02Icon, Message01Icon, User03Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Caption, List } from '@telegram-apps/telegram-ui';
import { useTranslations } from 'next-intl';

import { bem } from '@/css/bem';
import './Menu.css';

const [, e] = bem('main-menu');

export default function Menu() {
	const t = useTranslations('menu');

	return (
		<List className={'main-menu'}>
			<Link href="/" className={e('link')} exact>
				<List className={e('item')}>
					<HugeiconsIcon height={24} width={24} icon={MailOpen02Icon} />
					<Caption>{t('subscription')}</Caption>
				</List>
			</Link>
			<Link href="/support" className={e('link')} exact>
				<List className={e('item')}>
					<HugeiconsIcon height={24} width={24} icon={Message01Icon} />
					<Caption>{t('support')}</Caption>
				</List>
			</Link>
			<Link href="/profile" className={e('link')} exact>
				<List className={e('item')}>
					<HugeiconsIcon height={24} width={24} icon={User03Icon} />
					<Caption>{t('profile')}</Caption>
				</List>
			</Link>
		</List>
	);
}
