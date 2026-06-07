import Menu from '@/components/Menu/Menu';
import { Navigation } from '@telegram-apps/telegram-ui';

import './Footer.css';

export default function Footer() {
	return (
		<Navigation className={'footer'}>
			<Menu />
		</Navigation>
	);
}
