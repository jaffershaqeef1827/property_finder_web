import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout';
import Dashboard from './pages/Dashboard/index';
import './App.css';
import Loader from './components/common/Loader/index'
import SignIn from './pages/authentication/SignIn';
import routes from './routes';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            {/* Public routes - no authentication required */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/signin" element={<SignIn />} />
            
            {/* All other routes wrapped in Layout */}
            <Route path="/" element={<Layout />}>
              <Route path="home" element={
                <Suspense fallback={<Loader />}>
                  <Dashboard />
                </Suspense>
              } />
              
              {routes.map(({ path, component: Component, name }) => (
                <Route
                  key={name}
                  path={path.startsWith('/') ? path.slice(1) : path} // Remove leading slash
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
              ))}
              
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;