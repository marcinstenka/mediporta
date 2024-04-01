import React from 'react';
import TableArrows from '../lib/components/TableArrows.tsx';
import Inputs from '../lib/components/Inputs.tsx';

import useTableArrows from '../lib/hooks/useTableArrows.ts';
import MockTableContentProvider from '../lib/context/MockTableContentProvider.tsx';

const defaultTags = [
	{ name: '1', count: 2 },
	{ name: '2', count: 2 },
	{ name: '3', count: 2 },
	{ name: '4', count: 2 },
	{ name: '5', count: 2 },
	{ name: '6', count: 2 },
	{ name: '7', count: 2 },
	{ name: '8', count: 2 },
	{ name: '9', count: 2 },
	{ name: '10', count: 2 },
	{ name: '11', count: 2 },
	{ name: '12', count: 2 },
	{ name: '13', count: 2 },
	{ name: '14', count: 2 },
	{ name: '15', count: 2 },
	{ name: '16', count: 2 },
	{ name: '17', count: 2 },
	{ name: '18', count: 2 },
	{ name: '19', count: 2 },
	{ name: '20', count: 2 },
];

export default {
	title: 'TableArrows & Inputs',
	decorators: [
		(Story) => (
			<MockTableContentProvider
				value={{
					tags: defaultTags,
				}}
			>
				<Story />
			</MockTableContentProvider>
		),
	],
	argTypes: {
		tags: {
			control: {
				type: 'array',
			},
		},
	},
};

const Template = ({ tags }) => {
	const {
		backArrowStyle,
		forwardArrowStyle,
		handlePageDecrease,
		handlePageIncrease,
	} = useTableArrows();

	return (
		<>
			<Inputs />
			<TableArrows
				backArrowStyle={backArrowStyle}
				forwardArrowStyle={forwardArrowStyle}
				handlePageDecrease={handlePageDecrease}
				handlePageIncrease={handlePageIncrease}
			/>
		</>
	);
};

export const Tags20 = Template.bind({});

Tags20.args = {
	tags: defaultTags,
};
