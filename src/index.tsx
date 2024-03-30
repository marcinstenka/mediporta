import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.js';
import TableOptionsContextProvider from './lib/context/tableOptionsContext.tsx';
import TableContentContextProvider from './lib/context/tableContentContext.tsx';
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<TableOptionsContextProvider>
			<TableContentContextProvider>
				<App />
			</TableContentContextProvider>
		</TableOptionsContextProvider>
	</React.StrictMode>
);

reportWebVitals();
