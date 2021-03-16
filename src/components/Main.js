import React from 'react';
import Aside from './Aside';
import Section from './Section';

const Main = ({showModal}) => {
  return (
    <main className="main container">
      <Aside />
      <Section showModal={showModal} />
    </main>
  )
}

export default Main;