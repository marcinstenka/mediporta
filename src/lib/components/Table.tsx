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
import Loader from './Loader.tsx';
import NoResults from './NoResults.tsx';
import Error from './Error.tsx';
import { Tag } from '../types/Types.ts';

type TagTableProps = {
	tags: Tag[] | null;
	error: string;
};

export default function TagTable({ tags, error }: TagTableProps) {
	if (error) return <Error />;
	if (!tags) return <Loader />;
	if (tags.length === 0) return <NoResults />;
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
						{tags.map((row, index) => (
							<TableRow key={index}>
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
