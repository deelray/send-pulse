import React from 'react';
import Card from './Card';
import cards from '../data.js';

const Catalog = () => {
  return (
    <div className="main-info__catalog catalog">
      {cards.map(item => <Card {...item} key={item.id} />)}
    </div>
  )
}

export default Catalog;