import React, { createContext, useState } from 'react';
import './App.css'
import GrandFather from './componets/GrandFather/GrandFather'


export const RingContext = createContext('ring')

const App = () => {
  const [house, setHouse] = useState(2)
  const ornaments = 'sonar daimon ring'
  return (
    <RingContext.Provider value={[ornaments,house]}>
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>by new button</button>
        <GrandFather house={house} ></GrandFather>
      </div>
    </RingContext.Provider>

  );
};

export default App;