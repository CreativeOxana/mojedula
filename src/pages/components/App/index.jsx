import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './style.css';

export const App = () => {
  return (
    <div className="app-box">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
