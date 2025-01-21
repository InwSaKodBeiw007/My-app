"use client"
import { useEffect, useState } from "react";
export default function Page() {
    const [fruit, setFruit] = useState('banana');
    const changeApple = () => {
        setFruit('apple');
    }
    const changeBanana = () => {
        setFruit('banana');
    }

    const [count, setCount] = useState(0);
    const increment = () => {
        for (let index = 0; index < 100; index++) {
            setCount(count + index);
        }
    }
    useEffect(() => {
        document.title = `${fruit}`
    })
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1 className="text-3xl text-center items-center"> {count} </h1>
            <button onClick={increment} >UP</button>
            <div className="text-end"><button onClick={decrement}>DOWN</button></div>

            <ul className="text-3xl text-center items-center"> {fruit} </ul>
            <div className="text-end">
                <button onClick={changeApple} >Apple</button>

                <button onClick={changeBanana} >Banana</button>
            </div>

        </div>
    )
}