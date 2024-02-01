
import { useEffect, useState, useRef } from "react";

export function Counter({ initialValue }) {
    const [counter, setCounter] = useState(initialValue);
    const directionRef = useRef(null);

    useEffect(() => {
        console.log(`Now count is: ${counter}`);
        if (directionRef.current !== null) {
            console.log(`Direction changed: ${directionRef.current}`);
        }
    }, [counter]);

    function handleIncrement() {
        setCounter((c) => c + 1);
        directionRef.current = "up";
    }

    function handleDecrement() {
        setCounter((c) => c - 1);
        directionRef.current = "down";
    }

    return (
        <>
            <h2>My count to: {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    );
}

export default Counter;
