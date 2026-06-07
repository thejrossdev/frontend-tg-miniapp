import { UAParser } from 'ua-parser-js';

export type DeviceInfo = {
	device_type: string | undefined;
	device_os: string | undefined;
	device_name: string | undefined;
	browser: string | undefined;
	ip: string;
	location: string;
	userAgent: string | null;
};

/**
 * Parses device and browser information from the User-Agent header,
 * and enriches it with IP and location data.
 *
 * @returns A `DeviceInfo` object containing device type, OS, name,
 * browser, IP address, location, and the full user-agent string.
 */
export const getDeviceInfo = async (): Promise<DeviceInfo | null> => {
	try {
		const res = await fetch('https://ipinfo.io/json', {
			cache: 'no-store',
		});

		if (!res.ok) {
			return null;
		}
		const userAgent = res.headers.get('user-agent') || '';
		const parser = new UAParser(userAgent);

		const data = await res.json();
		const ip = data.ip;
		const location = `${data.city}/${data.region}`;

		return {
			device_type: parser.getDevice().type,
			device_os: parser.getOS().name,
			device_name: parser.getDevice().model,
			browser: parser.getBrowser().name,
			ip,
			location,
			userAgent,
		};
	} catch (e) {}

	return {
		ip: 'unknown',
		location: 'unknown',
		device_type: 'unknown',
		device_os: 'unknown',
		device_name: 'unknown',
		browser: 'unknown',
		userAgent: 'unknown',
	};
};
