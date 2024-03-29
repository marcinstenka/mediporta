import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useTableOptionsContext from '../hooks/useTableOptionsContext.ts';
import useTableOptions from '../hooks/useTableOptions.ts';
export default function TableArrows() {
	const { setPage, page } = useTableOptionsContext();
    const {maxPage} = useTableOptions()
	const handlePageIncrease = () => {
		setPage(page + 1);
	};
	const handlePageDecrease = () => {
		setPage(page - 1);
	};
	return (
		<div className='tableArrows'>
			<ArrowBackIosIcon onClick={handlePageDecrease} />
			<ArrowForwardIosIcon onClick={handlePageIncrease} />
		</div>
	);
}
