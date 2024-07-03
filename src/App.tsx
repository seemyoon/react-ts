import React, {useState} from 'react';
import './App.css';
import usePrevious from "./hook/usePrevious";

const App = () => {
    const [num, setNum] = useState(0);
    return (
        <div>
            <h1>
                Current:{num} Previous: {usePrevious(num)}
            </h1>
            <button onClick={() => {
                setNum(value => value + 1)
            }}>
                click me
            </button>
        </div>
    )
}

export default App;
