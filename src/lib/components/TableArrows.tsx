import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useTableArrows from '../hooks/useTableArrows.ts';
export default function TableArrows() {
	const {
		backArrowStyle,
		forwardArrowStyle,
		handlePageDecrease,
		handlePageIncrease,
	} = useTableArrows();
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
