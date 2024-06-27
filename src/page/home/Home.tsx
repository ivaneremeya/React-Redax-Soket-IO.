import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header/Header';

export const Home = () => {
  return (
    <div>
      <Header />
      <main className='content'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
