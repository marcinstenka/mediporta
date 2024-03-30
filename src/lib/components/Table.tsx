import React from 'react';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import useFetch from '../hooks/useFetch.ts';

export default function TagTable() {
	const rows = useFetch();

	if (!rows) return <h2>Loading...</h2>;
	return (
		<TableContainer component={Paper} sx={{ maxWidth: 400, margin: '0 auto' }}>
			<Table aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}>Count</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.count}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
