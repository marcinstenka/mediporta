import React, { createContext, useState } from 'react';
import { Tag } from '../types/Types';

type tableContentContextProviderProps = {
	children: React.ReactNode;
};
type TableContentState = {
	tags: Tag[] | null;
	error: string;
};
type TableContentActions = {
	setTags(tags: TableContentState['tags']): void;
	setError(error: TableContentState['error']): void;
};
type TableContentType = TableContentState & TableContentActions;

export const TableContentContext = createContext<TableContentType | null>(null);

export default function TableContentContextProvider({
	children,
}: tableContentContextProviderProps) {
	const [state, setState] = useState<TableContentState>({
		tags: null,
		error: '',
	});
	const value: TableContentType = {
		...state,
		setTags: (tags) => setState((prev) => ({ ...prev, tags })),
		setError: (error) => setState((prev) => ({ ...prev, error })),
	};
	return (
		<TableContentContext.Provider value={value}>
			{children}
		</TableContentContext.Provider>
	);
}
