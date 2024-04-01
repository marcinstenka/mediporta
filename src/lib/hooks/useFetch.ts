import { useEffect } from 'react';
import useTableOptionsContext from './useTableOptionsContext.ts';
import useTableContentContext from './useTableContentContext.ts';
const API_KEY = 'IGLUsAB63XEtW3MS7RLTQw((';

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
		if (tagsPerPage > 100) {
			tagsPerPageNumber = 100;
		}
		fetch(
			`https://api.stackexchange.com/2.3/tags?page=${pageNumber}&pagesize=${tagsPerPageNumber}&order=${order}&sort=${sort}&site=stackoverflow&key=${API_KEY}`
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
