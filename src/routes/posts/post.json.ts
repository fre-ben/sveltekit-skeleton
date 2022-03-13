import type { RequestHandlerOutput } from "@sveltejs/kit";

export async function get({ params, url }): Promise<RequestHandlerOutput> {
	return {
		status: 200,
		body: {
			data: { test: "test", url: url }
		}
	};
}
