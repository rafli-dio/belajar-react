import React, { useState } from "react"

const Button = ({color, colorReset}) => {
    const [number, setNumber] = useState(0);
    return  (
    <>
        <p>{number}</p>
        <button className={`btn btn-${color}`}onClick ={() => setNumber(number + 1)}>Tambah</button>
        <button className={`btn btn-${colorReset} ml-2`}onClick ={() => setNumber(0)}>
            Reset
        </button>
    </>
    )
}

export default Button;