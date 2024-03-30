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
import useTableContentContext from '../hooks/useTableContentContext.ts';
import Loader from './Loader.tsx';
import NoResults from './NoResults.tsx';
import Error from './Error.tsx';

export default function TagTable() {
	const { tags, error } = useTableContentContext();
	if (!tags) return <Loader />;
	if (tags.length == 0) return <NoResults />;
	if (error) return <Error />;
	return (
		<>
			<TableContainer
				component={Paper}
				sx={{ maxWidth: 450, margin: '0 auto' }}
			>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Count</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tags.map((row) => (
							<TableRow>
								<TableCell sx={{ width: '50%' }}>{row.name}</TableCell>
								<TableCell sx={{ width: '50%' }}>{row.count}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
