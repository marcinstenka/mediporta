import React, { useContext } from 'react';
import { TableOptionsContext } from '../context/tableOptionsContext.tsx';
export default function useTableOptionsContext() {
	const tableOptionsContext = useContext(TableOptionsContext);
	if (!tableOptionsContext) {
		throw new Error(
			'useTableOptionsContext must be used within a TableOptionsContext Provider'
		);
	}
	return tableOptionsContext;
}
