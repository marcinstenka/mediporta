/** @type { import('@storybook/react').Preview } */
import TableContentContextProvider from '../src/lib/context/tableContentContext.tsx';
import TableOptionsContextProvider from '../src/lib/context/tableOptionsContext.tsx';
import '../src/App.css';

const preview = {
	parameters: {},
	decorators: [
		(Story) => (
			<TableContentContextProvider>
				<TableOptionsContextProvider>
					<Story />
				</TableOptionsContextProvider>
			</TableContentContextProvider>
		),
	],
};

export default preview;
