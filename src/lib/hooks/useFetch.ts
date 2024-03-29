import React, { useEffect, useState } from 'react';
import useTableOptionsContext from './useTableOptionsContext.ts';
type Data = {
	items: Tag[];
};
type Tag = {
	name: string;
	count: number;
};
export default function useFetch() {
	const { page, order, sort, tagsPerPage } = useTableOptionsContext();
	const [data, setData] = useState<Data | null>(null);
	const items = [
		{ name: 'test1', count: 123 },
		{ name: 'test2', count: 1523 },
		{ name: 'test3', count: 67 },
		{ name: 'test4', count: 33 },
		{ name: 'test5', count: 1223 },
	];
	useEffect(() => {
		const res = fetch(
			`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${tagsPerPage}&order=${order}&sort=${sort}&site=stackoverflow&key=IGLUsAB63XEtW3MS7RLTQw((
`
		);
		res.then((d) => d.json()).then((d) => setData(d));
	}, [page, order, sort, tagsPerPage]);
	if (!data?.items) return null;
	return data.items;
}
