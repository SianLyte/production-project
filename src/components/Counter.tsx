import { useState } from "react"
import styles from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className={styles.div}>{count}</div>
            <button type="button" onClick={() => setCount(c => c + 1)}>increment</button >
        </>
    )
}