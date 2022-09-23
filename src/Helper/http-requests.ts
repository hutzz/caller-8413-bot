import fetch from "node-fetch";
export const httpGet = async (url: string) => {
	const resp = await fetch(url);
	const data = await resp.json();
	return data;
};
export const httpPost = async (url: string, content: any) => {
	const resp = await fetch(url, {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(content),
	});
	const data = await resp.json();
	return data;
};
