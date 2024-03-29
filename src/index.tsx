import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.js';
import TableOptionsContextProvider from './lib/context/tableOptionsContext.tsx';
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<TableOptionsContextProvider>
			<App />
		</TableOptionsContextProvider>
	</React.StrictMode>
);

reportWebVitals();
