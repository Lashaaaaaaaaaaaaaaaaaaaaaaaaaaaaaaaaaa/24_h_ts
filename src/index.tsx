import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

const rootElement = document.getElementById('root');

// TypeScript-სთვის rootElement-ის არსებობის შემოწმება აუცილებელია
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

reportWebVitals();

