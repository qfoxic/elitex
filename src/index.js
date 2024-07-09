import React from 'react';
import {createRoot} from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import IndexPage from './templates/index';
import NoApiKeyPage from './templates/noApiKey';

const renderPage = (page) => {
  if (!process.env.REACT_APP_BUTTER_CMS_API_KEY) {
    /* This is a placeholder for when the API key is not set. */
    return <NoApiKeyPage />
  }
  return page;
}

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer)

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={renderPage(<IndexPage />)} />
        <Route path="/landing-page/:slug" element={renderPage(<IndexPage />)} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
