import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

export default function Child2() {

    const [counter, dispatch] = useReducer(CounterReducer, 1)

    return (
        <>
            <p>Current value of Reducer counter: {counter}</p>
            <button onClick={()=>dispatch('DECREMENT')}>Decrement Reducer</button>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </>
    );
}