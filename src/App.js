import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Modal from './components/Modal';
import './App.scss';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <Main showModal={showModal}/>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}/>
    </>
  );
}

export default App;



