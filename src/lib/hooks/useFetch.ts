import { useEffect } from 'react';
import useTableOptionsContext from './useTableOptionsContext.ts';
import useTableContentContext from './useTableContentContext.ts';

export default function useFetch() {
	const { page, order, sort, tagsPerPage } = useTableOptionsContext();
	const { setTags } = useTableContentContext();

	useEffect(() => {
		const res = fetch(
			`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${tagsPerPage}&order=${order}&sort=${sort}&site=stackoverflow&key=IGLUsAB63XEtW3MS7RLTQw((`
		);
		res.then((d) => d.json()).then((d) => setTags(d.items));
	}, [page, order, sort, tagsPerPage]);
}
