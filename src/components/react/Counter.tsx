import * as React from "react";
import { useState } from "react";

interface ICounterProps {
    initialValue?: number;
}
export function Counter(props: ICounterProps) {
    const { initialValue = 0 } = props;
    const [value, setValue] = useState<number>(initialValue);
    const add = () => setValue((value) => value + 1);
    const subtract = () => setValue((value) => value - 1);
    return (
        <div>
            React counter [ {value} ]<br />
            <button onClick={subtract}>-</button>
            <button onClick={add}>+</button>
        </div>
    );
}
