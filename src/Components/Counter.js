// this file will be the skeleton of the counter, it will take information based on a JSON file and import the items through there
import React from 'react';
import IndivCounter from './Indivcounter';
import mana from '../mana.json';

const ElementCounter = () => {
  const manaCounter = (mana) => {
    return (
      <IndivCounter mana={mana} />
    )
  }
  
  return (
    <div className='mana-map'>
      {mana.map(manaCounter)}
    </div>
  );
}

export default ElementCounter;