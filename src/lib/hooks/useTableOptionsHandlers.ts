import { ChangeEvent } from 'react';
import useTableOptionsContext from './useTableOptionsContext.ts';
export default function useTableOptionsHandlers() {
	const { setTagsPerPage, setPage, setSort, setOrder } =
		useTableOptionsContext();
	const handleTagsPerPageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		if (value < 1) {
			setTagsPerPage(1);
		} else if (value > 100) {
			setTagsPerPage(100);
		} else {
			setTagsPerPage(value);
		}
	};
	const handlePageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		if (value < 1) {
			setPage(1);
		} else if (value > 70000) {
			setPage(70000);
		} else {
			setPage(value);
		}
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
