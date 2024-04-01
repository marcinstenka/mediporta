import React from 'react';
import { TableContentContext } from './tableContentContext.tsx';

const MockTableContentProvider = ({ children, value }) => (
	<TableContentContext.Provider value={value}>
		{children}
	</TableContentContext.Provider>
);
export default MockTableContentProvider;
