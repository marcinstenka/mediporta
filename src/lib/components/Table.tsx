import React from 'react';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';
import useFetch from '../hooks/useFetch.ts';

export default function TagTable() {
	const rows = useFetch();

	if (!rows) return <h2>Loading...</h2>;
	return (
		<>
			<div>
				<div>
					<label htmlFor='count'>Tags per page:</label>
					<input type='text' name='count' id='count' />
				</div>
				<div>
					<label htmlFor='order'>Order:</label>
					<select name='order' id='order'>
						<option value='desc'>Desc</option>
						<option value='asc'>Asc</option>
					</select>
				</div>
				<div>
					<label htmlFor='sort'>Sort:</label>
					<select name='sort' id='sort'>
						<option value='popular'>Popular</option>
						<option value='activity'>Activity</option>
						<option value='name'>Name</option>
					</select>
				</div>
			</div>
			<TableContainer
				component={Paper}
				sx={{ minWidth: 650, maxWidth: 900, margin: '0 auto' }}
			>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>Name</TableCell>
							<TableCell align='right'>Count</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow>
								<TableCell align='right'>{row.name}</TableCell>
								<TableCell align='right'>{row.count}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
