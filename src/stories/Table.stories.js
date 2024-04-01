import TagTable from '../lib/components/Table.tsx';

export default {
	title: 'TagTable',
	component: TagTable,
};
const Template = (args) => <TagTable {...args}></TagTable>;
export const Normal = Template.bind({});
export const Error = Template.bind({});
export const Loading = Template.bind({});
export const NoResults = Template.bind({});

Normal.args = {
	tags: [
		{ name: 'Test1', count: 6 },
		{ name: 'Test2', count: 12352 },
		{ name: 'Test3', count: 123 },
		{ name: 'Test4', count: 7678 },
		{ name: 'Test5', count: 234 },
		{ name: 'Test6', count: 2346 },
		{ name: 'Test7', count: 5633 },
		{ name: 'Test8', count: 767567 },
	],
	error: '',
};

Error.args = {
	tags: [{ name: 'Test1', count: 6 }],
	error: 'error',
};
Loading.args = {
	tags: null,
	error: '',
};
NoResults.args = {
	tags: [],
	error: '',
};
