import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router';
import { Layout } from "./layout/index";
import configureStore from "./redux/store";
import reportWebVitals from './reportWebVitals';
import { sessionCheck } from "./redux/action/auth/loginActions";
import './asset/scss/index.scss';

const renderApp = preloadedState => {
	const store = configureStore(preloadedState);
	ReactDOM.render(
		<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={<></>}>
				<ThemeProvider theme={createMuiTheme()}>
					<CssBaseline />
					<Layout>
						<Router />
					</Layout>
				</ThemeProvider>
			</Suspense>
		</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

(async () => renderApp(await sessionCheck()))();
reportWebVitals();