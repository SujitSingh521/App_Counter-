import React, {useState} from 'react'; 
import './App.css';

function Counter() { 
  const [data, setData] = useState(0);

  function incrementData() {
    setData(data + 1);
  }

  function decrementData() {
    setData(data - 1);
  }

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={incrementData}>Increment</button>
    
      <button onClick={decrementData}>Decrement</button>
    </div>
  );
}

export default Counter; 
