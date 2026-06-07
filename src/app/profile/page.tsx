'use client';

import { Page } from '@/components/Page';

import { Link } from '@/components/Link/Link';
import { Cell, Image, List, Section } from '@telegram-apps/telegram-ui';

import { LocaleSwitcher } from '@/components/LocaleSwitcher/LocaleSwitcher';
import tonSvg from '../_assets/ton.svg';

export default function ProfilePage() {
	return (
		<Page back={false}>
			<List>
				<Section
					header="Application Launch Data"
					footer="These pages help developer to learn more about current launch information"
				>
					<Link href="/profile/init-data">
						<Cell subtitle="User data, chat information, technical data">Init Data</Cell>
					</Link>
					<Link href="/profile/launch-params">
						<Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
					</Link>
					<Link href="/profile/theme-params">
						<Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
					</Link>
				</Section>
				<Section>
					<LocaleSwitcher />
				</Section>
				<Section footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects">
					<Link href="/profile/ton-connect">
						<Cell
							before={<Image src={tonSvg.src} style={{ backgroundColor: '#007AFF' }} alt="TON Logo" />}
							subtitle="Connect your TON wallet"
						>
							TON Connect
						</Cell>
					</Link>
				</Section>
			</List>
		</Page>
	);
}
