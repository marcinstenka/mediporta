import React, { useEffect, useState } from 'react';
type Data = {
	items: Tag[];
};
type Tag = {
	name: string;
	count: number;
};
export default function useFetch() {
	const pageSize = 10;
	const order = 'desc';
	const sort = 'popular';
	const [data, setData] = useState<Data | null>(null);
	useEffect(() => {
		const res = fetch(
			`https://api.stackexchange.com/2.3/tags?pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
		);
		res.then((d) => d.json()).then((d) => setData(d));
	}, []);
	if (!data?.items) return null;
	return data.items;
}
