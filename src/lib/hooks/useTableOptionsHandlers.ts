import { ChangeEvent } from 'react';
import useTableOptionsContext from './useTableOptionsContext.ts';
export default function useTableOptionsHandlers() {
	const { setTagsPerPage, setPage, setSort, setOrder } =
		useTableOptionsContext();

	const handleTagsPerPageChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTagsPerPage(parseInt(e.target.value));
	};
	const handlePageChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPage(parseInt(e.target.value));
	};
	const handleSortChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (value === 'popular' || value === 'activity' || value === 'name') {
			setSort(value);
		}
	};
	const handleOrderChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (value === 'desc' || value === 'asc') {
			setOrder(value);
		}
	};
	return {
		handleTagsPerPageChange,
		handlePageChange,
		handleSortChange,
		handleOrderChange,
	};
}
