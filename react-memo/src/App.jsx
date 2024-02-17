import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";
import Timer from "./Timer";

const FavoriteColor = () => {
    const [color, setColor] = useState("red");
    return (
        <>
            <h1>My Favorite color is {color}</h1>
            <button
                type='button'
                onClick={() => setColor("black")}
            >
                Black
            </button>
        </>
    );
};
const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
    const increment = () => {
        setCount((c) => c + 1);
    };
    return (
        <>
            <Todos todos={todos} />
            <hr />
            <div>
                Count:{count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};
export default App;
