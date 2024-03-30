import React, { createContext, useState } from 'react';
import { Tag } from '../types/Types';

type tableContentContextProviderProps = {
	children: React.ReactNode;
};
type TableContentState = {
	tags: Tag[] | null;
};
type TableContentActions = {
	setTags(tags: TableContentState['tags']): void;
};
type TableContentType = TableContentState & TableContentActions;

export const TableContentContext = createContext<TableContentType | null>(null);

export default function TableContentContextProvider({
	children,
}: tableContentContextProviderProps) {
	const [state, setState] = useState<TableContentState>({
		tags: null,
	});
	const value: TableContentType = {
		...state,
		setTags: (tags) => setState((prev) => ({ ...prev, tags })),
	};
	return (
		<TableContentContext.Provider value={value}>
			{children}
		</TableContentContext.Provider>
	);
}
