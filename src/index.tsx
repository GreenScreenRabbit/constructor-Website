import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { store } from './createStore';
import MainSlider from './mainSlider/mainSlider';
import MainPage from './mainPage';
import ApartmentShowcaseMain from './apartmentShowcase/apartmentShowcaseMain';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>

        <MainPage />


        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);

reportWebVitals();
