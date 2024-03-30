import React, { createContext, useState } from 'react';

type tableOptionsContextProviderProps = {
	children: React.ReactNode;
};
type TableOptionState = {
	page: number;
	tagsPerPage: number;
	order: 'desc' | 'asc';
	sort: 'popular' | 'activity' | 'name';
};
type TableOptionsActions = {
	setPage(page: TableOptionState['page']): void;
	setTagsPerPage(tagsPerPage: TableOptionState['tagsPerPage']): void;
	setOrder(order: TableOptionState['order']): void;
	setSort(sort: TableOptionState['sort']): void;
};
type TableOptionsType = TableOptionState & TableOptionsActions;

export const TableOptionsContext = createContext<TableOptionsType | null>(null);

export default function TableOptionContextProvider({
	children,
}: tableOptionsContextProviderProps) {
	const [state, setState] = useState<TableOptionState>({
		page: 1,
		tagsPerPage: 10,
		order: 'desc',
		sort: 'popular',
	});
	const value: TableOptionsType = {
		...state,
		setPage: (page) => setState((prev) => ({ ...prev, page })),
		setTagsPerPage: (tagsPerPage) =>
			setState((prev) => ({ ...prev, tagsPerPage })),
		setOrder: (order) => setState((prev) => ({ ...prev, order })),
		setSort: (sort) => setState((prev) => ({ ...prev, sort })),
	};
	return (
		<TableOptionsContext.Provider value={value}>
			{children}
		</TableOptionsContext.Provider>
	);
}
