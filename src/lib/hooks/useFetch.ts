import { useEffect, useState } from 'react';
import useTableOptionsContext from './useTableOptionsContext.ts';
import useTableContentContext from './useTableContentContext.ts';
const API_KEY = 'IGLUsAB63XEtW3MS7RLTQw((';

export default function useFetch() {
	const { page, order, sort, tagsPerPage } = useTableOptionsContext();
	const { setTags, setError, error } = useTableContentContext();
	const [fetchTimeout, setFetchTimeout] = useState<NodeJS.Timeout>();

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

		if (fetchTimeout) {
			clearTimeout(fetchTimeout);
		}

		const timeout = setTimeout(() => {
			fetch(
				`https://api.stackexchange.com/2.3/tags?page=${pageNumber}&pagesize=${tagsPerPageNumber}&order=${order}&sort=${sort}&site=stackoverflow&key=${API_KEY}`
			)
				.then((response) => {
					if (response.status != 200) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					setTags(data.items);
					setError('');
				})
				.catch((error) => {
					setError('There was a problem: ' + error);
				});
		}, 500);

		setFetchTimeout(timeout);

		return () => {
			clearTimeout(timeout);
		};
	}, [page, order, sort, tagsPerPage]);
}
