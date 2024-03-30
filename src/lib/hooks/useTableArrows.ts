import useTableContentContext from './useTableContentContext.ts';
import useTableOptionsContext from './useTableOptionsContext.ts';

export default function useTableArrows() {
	const { setPage, page, tagsPerPage } = useTableOptionsContext();
	const { tags } = useTableContentContext();
	let canIncrease = true;
	let canDecrease = false;
	if (tags?.length) {
		if (tags.length < tagsPerPage || tags.length == 0) {
			canIncrease = false;
		}
		if (page > 1) {
			canDecrease = true;
		}
	} else {
		canIncrease = false;
		canDecrease = false;
	}
	const handlePageIncrease = () => {
		if (canIncrease) {
			setPage(page + 1);
		}
	};
	const handlePageDecrease = () => {
		if (canDecrease) {
			setPage(page - 1);
		}
	};
	const backArrowStyle = {
		opacity: canDecrease ? 1 : 0.5,
	};
	const forwardArrowStyle = {
		opacity: canIncrease ? 1 : 0.5,
	};
	return {
		backArrowStyle,
		forwardArrowStyle,
		handlePageDecrease,
		handlePageIncrease,
	};
}
