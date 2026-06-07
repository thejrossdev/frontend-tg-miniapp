import { openLink } from '@tma.js/sdk-react';
import { default as NextLink, type LinkProps as NextLinkProps } from 'next/link';
import { type FC, type JSX, type MouseEventHandler, useCallback } from 'react';

import { classNames } from '@/css/classnames';

import { usePathname } from 'next/navigation';
import './Link.css';

export interface LinkProps extends NextLinkProps, Omit<JSX.IntrinsicElements['a'], 'href'> {
	exact?: boolean;
}

export const Link: FC<LinkProps> = ({ className, onClick: propsOnClick, href, exact = false, ...rest }) => {
	const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
		(e) => {
			propsOnClick?.(e);

			// Compute if target path is external. In this case we would like to open link using
			// TMA method.
			let path: string;
			if (typeof href === 'string') {
				path = href;
			} else {
				const { search = '', pathname = '', hash = '' } = href;
				path = `${pathname}?${search}#${hash}`;
			}

			const targetUrl = new URL(path, window.location.toString());
			const currentUrl = new URL(window.location.toString());
			const isExternal = targetUrl.protocol !== currentUrl.protocol || targetUrl.host !== currentUrl.host;

			if (isExternal) {
				e.preventDefault();
				openLink(targetUrl.toString());
			}
		},
		[href, propsOnClick],
	);

	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href.toString());

	return (
		<NextLink
			{...rest}
			href={href}
			onClick={onClick}
			className={classNames(className, 'link', isActive ? 'link__active' : '')}
		/>
	);
};
