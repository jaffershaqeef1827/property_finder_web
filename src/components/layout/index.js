import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../common/Header';
import Alert from '../common/Alert';

const Layout = () => {
  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className='flex-1 overflow-auto'>
        <Outlet />
      </main>
      <Alert />
      
    </div>
  );
};

export default Layout;