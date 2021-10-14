// this file will be the skeleton of the counter, it will take information based on a JSON file and import the items through there
import React, {useState} from 'react';
import mana from '../mana.json';

const ElementCounter = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () =>{
    setCounter(counter + 1);
  }

  const reset = () => {
    setCounter(0)
  }

  console.log(mana)
  return (
    <div>
      {mana &&
        mana.map(el => {
          return <img src={el.image} onClick={onClick} alt={`mana color: ${el.mana}`}/>
        })
      }
      <h1>
      {counter}
      </h1>
      <button onClick={reset}>
      benis reset
      </button>
    </div>
  );
}

export default ElementCounter;