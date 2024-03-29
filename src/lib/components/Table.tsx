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
import Inputs from './Inputs.tsx';

export default function TagTable() {
	const rows = useFetch();

	if (!rows) return <h2>Loading...</h2>;
	return (
		<>
			<Inputs />
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
