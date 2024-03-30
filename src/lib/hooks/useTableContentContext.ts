import { useContext } from 'react';
import { TableContentContext } from '../context/tableContentContext.tsx';
export default function useTableContentContext() {
	const tableContentContext = useContext(TableContentContext);
	if (!tableContentContext) {
		throw new Error(
			'useTableContentContext must be used within a TableContentContext Provider'
		);
	}
	return tableContentContext;
}
