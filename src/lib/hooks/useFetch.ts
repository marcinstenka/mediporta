import React, { useEffect, useState } from 'react';
import useTableOptionsContext from './useTableOptionsContext.ts';
import { Data } from '../types/Types.ts';

export default function useFetch() {
	const { page, order, sort, tagsPerPage } = useTableOptionsContext();
	const [data, setData] = useState<Data | null>(null);

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
