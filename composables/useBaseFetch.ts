import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useBaseFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
	const config = useRuntimeConfig();

	const defaults: UseFetchOptions<T> = {
		baseURL: <string>config.public.baseUrl ?? "/",
		key: url,
	};

	const params = defu(options, defaults);

	return useFetch(url, params);
}
