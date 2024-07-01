import React, {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
  fetch('http://localhost:4000')
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
