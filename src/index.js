import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store';
import MainRoutes from './routes';

// css
import './assets/css/tailwind.css';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <MainRoutes />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
