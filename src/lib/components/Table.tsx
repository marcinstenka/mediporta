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
	Input,
	Select,
	InputLabel,
	MenuItem,
	TextField,
} from '@mui/material';
import useFetch from '../hooks/useFetch.ts';

export default function TagTable() {
	const rows = useFetch();

	if (!rows) return <h2>Loading...</h2>;
	return (
		<>
			<div>
				<div>
					<InputLabel id='count'>Tags per page:</InputLabel>
					<Input
						type='number'
						name='count'
						id='count'
						defaultValue={10}
						inputProps={{ min: 1, max: 100 }}
					/>
				</div>
				<div>
					<TextField
						select
						id='order'
						label='Order'
						defaultValue={'desc'}
						variant='filled'
						sx={{ width: 100 }}
					>
						<MenuItem value={'desc'}>Desc</MenuItem>
						<MenuItem value={'asc'}>Asc</MenuItem>
					</TextField>
				</div>
				<div>
					<TextField
						select
						id='sort'
						label='Sort'
						defaultValue={'popular'}
						variant='filled'
						sx={{ width: 150 }}
					>
						<MenuItem value={'popular'}>Popular</MenuItem>
						<MenuItem value={'activity'}>Activity</MenuItem>
						<MenuItem value={'name'}>Name</MenuItem>
					</TextField>
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
