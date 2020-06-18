import React, {useContext} from 'react';
import CounterContext from './CounterContext';

export default function Child1() {

    const [counter, setCounter] = useContext(CounterContext);

    return (
        <>
            <p>Current value of Context counter: {counter}</p>
            <button onClick={()=>setCounter(counter-1)}>Decrement Context</button>
            <button onClick={()=>setCounter(counter+1)}>Increment Context</button>
        </>
    );
}