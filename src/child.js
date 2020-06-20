import React, {useContext} from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext);
    console.log(counterValue);
return (

   
    <div>
        <h1>This is first child usind context</h1>
<h2>counter value is: {counterValue}</h2>
<button onClick = {() => {counterValue[1](++counterValue[0])}}>Context</button>
    </div>
)


}
export default Child;