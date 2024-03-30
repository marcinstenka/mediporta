import React from 'react';
import { Typography } from '@mui/material';

export default function Error() {
	return (
		<Typography align='center' variant='h6' color='error'>
			There was an error! <br />
			Refresh the page or change table properties.
		</Typography>
	);
}
