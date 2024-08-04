import React from 'react';
import {decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "./redux/store";

const App = () => {
    const counter1Value = useAppSelector(state => state.counter1SliceState.value);
    const dispatch = useAppDispatch()
    return (
        <div>
            <h1>Counter: {counter1Value}</h1>

            <button onClick={() => {
                dispatch(increment())
            }}>increment by 1
            </button>
            <button onClick={() => {
                dispatch(decrement())
            }}>decrement by 1
            </button>
            <button onClick={() => {
                dispatch(incrementByAmount(10))
            }}>increment by 10
            </button>
        </div>
    );
};

export default App;