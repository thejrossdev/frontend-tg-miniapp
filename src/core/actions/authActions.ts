import { api } from '@/core';
import { useAuthStore } from '@/core/stores';
import { useDeviceStore } from '@/core/stores/deviceStore';
import { initData } from '@tma.js/sdk-react';

export const handleLogin = async () => {
	const { setLoading, login, setBlocked } = useAuthStore.getState();
	const { device } = useDeviceStore.getState();
	const rawInitData = initData.raw() ?? '';

	setLoading(true);

	try {
		const initResp = await api.auth.authControllerInitTelegramAuth({ initData: rawInitData });
		const sessionId = initResp.data?.sessionId;

		if (!sessionId) {
			new Error(initResp.data.message);
		}

		const authResp = await api.auth.authControllerSignIn({
			initData: rawInitData,
			sessionId,
			userAgent: device?.userAgent ?? '',
			device_os: device?.device_os,
			device_name: device?.device_name,
			browser: device?.browser,
			device_type: device?.device_type,
			location: device?.location,
			ip: device?.ip,
		});

		if (!authResp.data?.user) {
			new Error(authResp.data.message);
		}

		login(authResp.data.user);
	} catch (error) {
	} finally {
		setLoading(false);
	}
};
