import React from 'react';

import './App.css';
import Table from './lib/components/Table.tsx';
import Inputs from './lib/components/Inputs.tsx';
import TableArrows from './lib/components/TableArrows.tsx';

function App() {
	return (
		<>
			<Inputs />
			<Table />
			<TableArrows />
		</>
	);
}

export default App;
