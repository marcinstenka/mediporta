import React, { useEffect, useState } from 'react';
type Data = {
	items: Tag[];
};
type Tag = {
	name: string;
	count: number;
};
export default function useFetch() {
	const pageSize = 10;
	const order = 'desc';
	const sort = 'popular';
	const page = 1;
	const [data, setData] = useState<Data | null>(null);
	const testData = [
		{ name: 'test1', count: 123 },
		{ name: 'test2', count: 1523 },
		{ name: 'test3', count: 67 },
		{ name: 'test4', count: 33 },
		{ name: 'test5', count: 1223 },
	];
	useEffect(() => {
		// const res = fetch(
		// 	`https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`
		// );
		// res.then((d) => d.json()).then((d) => setData(d));
	}, []);
	// if (testData) return null;
	return testData;
}
