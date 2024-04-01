import React from 'react';

import './App.css';
import Table from './lib/components/Table.tsx';
import Inputs from './lib/components/Inputs.tsx';
import TableArrows from './lib/components/TableArrows.tsx';
import useFetch from './lib/hooks/useFetch.ts';
import useTableContentContext from './lib/hooks/useTableContentContext.ts';

function App() {
	useFetch();
	const { tags, error } = useTableContentContext();
	return (
		<>
			<Inputs />
			<Table {...{ tags, error }} />
			<TableArrows />
		</>
	);
}

export default App;
