import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import { getCountries } from './actions/actions-countries';
import routes from './routes';
import AppContainer from './containers/app-container.component';

render(	
		<Provider store={store}>
			<AppContainer routes={ routes } />
		</Provider>,
	document.getElementById('root')

);

store.dispatch(getCountries());
console.log(store.getState());