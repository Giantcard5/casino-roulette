import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyles from '@assets/styles/global';

import App from '@core/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>

        <GlobalStyles/>
    </React.StrictMode>,
);