import { DeviceInfo, getDeviceInfo } from '@/core';
import { create } from 'zustand/react';

export class DeviceStore {
	device: DeviceInfo | null | undefined;
	getDevice: (() => PromiseLike<void>) | undefined;
}

export const useDeviceStore = create<DeviceStore>((set) => ({
	device: null,
	getDevice: async () => {
		set({ device: await getDeviceInfo() });
	},
}));
