import { useEffect, useState , useRef } from "react";

export function Counter() {
    
    const [counter, setCounter] = useState(0)
    const btnRef = useRef(0)

    useEffect(()=> {
        console.log(`Now count is: ${counter}`)
        
    } , [counter])
    
    function handleIncrement() {
        setCounter((c) => c + 1);
        console.log(`The previous value was ${btnRef.current + counter}`);    
    }
    
    return (
        <>
            <h2>My count to: {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
        </>
    );
}

export default Counter;
