import React from 'react';
import { CircularProgress } from '@mui/material';

export default function Loader() {
	return (
		<div className='loader'>
			<CircularProgress size={60} />
		</div>
	);
}
