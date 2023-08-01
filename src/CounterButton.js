import React , { useEffect } from 'react';
import { Button, DangerButton } from './Button';


export const CounterButton = ({ onIncrement, numberOfClicks = 0 }) => {
    //permit to re render the dom when numberOfClicks is changed
    // only props and state permit to change dom at the moment of prop or state change value
    //const [numberOfClicks, setNumberOfClicks] = useState(0);
    //const increment= () => setNumberOfClicks(numberOfClicks + 1);

    //other variables don t change value on the dom if hat values are not prop or state. 
    // this is used for not re rendere part of file that not need to change
    let example=45;

    // hook is a state that change value or a prop that change value
    //is called  when dom render or when hook change is called
    //params: first parameter is the callback, second parameter is an array of hooks that calls the callback function
    //if the second parameter is [] then the callback is called only when element is rendered
    //if the second parameter is not passed, the callback is called every time the component is rendered and a hook fire
    /* useEffect(() => {
        console.log("useEffect event called");
    },[numberOfClicks]); */
    useEffect(() => {
        console.log("useEffect event called");
    },[])
    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <DangerButton onClick={onIncrement}>Click me!</DangerButton>
        </>
    );
}