import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useTableOptionsContext from '../hooks/useTableOptionsContext.ts';
import useTableOptions from '../hooks/useTableOptions.ts';
export default function TableArrows() {
	const { setPage, page } = useTableOptionsContext();
	const handlePageIncrease = () => {
		// if (page < maxPage) {
		// 	setPage(page + 1);
		// }
	};
	const handlePageDecrease = () => {
		if (page > 1) {
			setPage(page - 1);
		}
	};
	const backArrowStyle = {
		opacity: page === 1 ? 0.5 : 1,
	};
	const forwardArrowStyle = {
		// opacity: page === maxPage ? 0.5 : 1,
	};
	return (
		<div className='tableArrows'>
			<ArrowBackIosIcon onClick={handlePageDecrease} style={backArrowStyle} />
			<ArrowForwardIosIcon
				onClick={handlePageIncrease}
				style={forwardArrowStyle}
			/>
		</div>
	);
}
