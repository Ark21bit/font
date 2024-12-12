import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useAuthFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
	const config = useRuntimeConfig();

	const defaults: UseFetchOptions<T> = {
		baseURL: <string>config.public.baseUrl ?? "/",
		key: url,
		/* headers:{
      Authorization: `Bearer ${token}`
    } */
	};

	const params = defu(options, defaults);

	return useFetch(url, params);
}
