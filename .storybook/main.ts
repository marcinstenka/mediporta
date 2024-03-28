import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
	framework: '@storybook/react-webpack5',
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen',
		reactDocgenTypescriptOptions: {},
		skipCompiler: true,
	},
};

export default config;
