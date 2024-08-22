import React from 'react';
import {Horoscope} from "ui/components/Horoscope";



function App() {

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
  <Horoscope/>
      <button>Add horoscope</button>
    </div>
  );
}

export default App;
