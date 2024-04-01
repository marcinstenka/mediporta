import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import useTableOptionsHandlers from '../hooks/useTableOptionsHandlers.ts';
import useTableOptionsContext from '../hooks/useTableOptionsContext.ts';
export default function Inputs() {
	const {
		handleTagsPerPageChange,
		handlePageChange,
		handleSortChange,
		handleOrderChange,
	} = useTableOptionsHandlers();
	const { page, tagsPerPage } = useTableOptionsContext();
	return (
		<div className='inputs'>
			<div className='input_container'>
				<TextField
					id='count'
					label='Tags per page'
					type='number'
					InputProps={{ inputProps: { min: 1, max: 100 } }}
					variant='filled'
					sx={{ width: 120 }}
					onChange={handleTagsPerPageChange}
					value={tagsPerPage}
				/>
			</div>
			<div className='input_container'>
				<TextField
					id='page'
					label='Page'
					type='number'
					InputProps={{ inputProps: { min: 1, max: 70000 } }}
					variant='filled'
					sx={{ width: 120 }}
					onChange={handlePageChange}
					value={page}
				/>
			</div>
			<div className='input_container'>
				<TextField
					select
					id='order'
					label='Order'
					defaultValue={'desc'}
					variant='filled'
					sx={{ width: 120 }}
					onChange={handleOrderChange}
				>
					<MenuItem value={'desc'}>Desc</MenuItem>
					<MenuItem value={'asc'}>Asc</MenuItem>
				</TextField>
			</div>
			<div className='input_container'>
				<TextField
					select
					id='sort'
					label='Sort'
					defaultValue={'popular'}
					variant='filled'
					sx={{ width: 120 }}
					onChange={handleSortChange}
				>
					<MenuItem value={'popular'}>Popular</MenuItem>
					<MenuItem value={'activity'}>Activity</MenuItem>
					<MenuItem value={'name'}>Name</MenuItem>
				</TextField>
			</div>
		</div>
	);
}
