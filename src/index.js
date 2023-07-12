// Internal Imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// External Imports
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Redux
import Store from './redux';

// Web Vitals
// import ReportWebVitals from './reportWebVitals';

// Styles
import './styles/index.css';

// Components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// ReportWebVitals(console.log);
