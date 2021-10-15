import React, { useState } from 'react';
import '../App.css';

const IndivCounter = (props) => {
  const [counter, setCounter] = useState(0)
  const {mana} = props

  const onClick = () => {
    setCounter(counter + 1)
  }

  // const timesTwo = () => {
  //   setCounter(counter * 2)
  // }

  return (
    <section className='mana-container'>
      <div>
        <p style={{color: mana.color}}>{counter}</p>
        <img src={mana.image} onClick={onClick} alt={`mana color ${mana.mana}`}/>
      </div>
    </section>
  )
}

export default IndivCounter;