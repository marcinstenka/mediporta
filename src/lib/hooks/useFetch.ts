import { useEffect } from 'react';
import useTableOptionsContext from './useTableOptionsContext.ts';
import useTableContentContext from './useTableContentContext.ts';

export default function useFetch() {
	const { page, order, sort, tagsPerPage } = useTableOptionsContext();
	const { setTags, setError } = useTableContentContext();

	useEffect(() => {
		fetch(
			`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${tagsPerPage}&order=${order}&sort=${sort}&site=stackoverflow&key=IGLUsAB63XEtW3MS7RLTQw((`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setTags(data.items);
			})
			.catch((error) => {
				setError('There was a problem: ' + error);
			});
	}, [page, order, sort, tagsPerPage]);
}
