import { useEffect } from 'react';
import useTableOptionsContext from './useTableOptionsContext.ts';
import useTableContentContext from './useTableContentContext.ts';

export default function useFetch() {
	const { page, order, sort, tagsPerPage } = useTableOptionsContext();
	const { setTags, setError } = useTableContentContext();

	useEffect(() => {
		let pageNumber = 1;
		let tagsPerPageNumber = 1;
		if (page) {
			pageNumber = page;
		}
		if (tagsPerPage) {
			tagsPerPageNumber = tagsPerPage;
		}
		fetch(
			`https://api.stackexchange.com/2.3/tags?page=${pageNumber}&pagesize=${tagsPerPageNumber}&order=${order}&sort=${sort}&site=stackoverflow&key=IGLUsAB63XEtW3MS7RLTQw((`
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
