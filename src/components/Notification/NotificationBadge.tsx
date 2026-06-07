import { Notification02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Badge } from '@telegram-apps/telegram-ui';

export const NotificationBadge = () => {
	return (
		<div className={'relative mx-2'}>
			<HugeiconsIcon width={28} height={28} icon={Notification02Icon} />
			<Badge className={'absolute -right-1/3 -top-1/5'} type={'number'}>
				1
			</Badge>
		</div>
	);
};
