import React from 'react';
import Modal from '../Modal';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import './style.css';
import { useState } from 'react';

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="app-box">
      <Header />
      <Outlet />
      {showModal && <Modal onClick={handleToggleModal} />}
      <Footer />
    </div>
  );
};
