/* eslint-disable no-empty-pattern */
import { useState, useMemo } from "react";
import { initialItems } from "./utils";

interface DemoProps{}

function Demo({}: DemoProps){
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = useMemo(() =>items.find((item) => item.isSelected),[items]);

    return(
        <div>
            <h1>Count: {count} </h1>
            <h1>Selected Item: {selectedItem?.id} </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Demo;