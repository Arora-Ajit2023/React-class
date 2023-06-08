import React, { useState } from 'react'

const TwoCC = () => {
    const [counter, setCounter] = useState(10)
    const [text, setText] = useState('Enter Your Name')
    const [password, setPassword] = useState('Enter Your Password')


    const onIncrement = (e) => {
        setCounter(counter + 1)
    }

    const onDecrement = (e) => {
        setCounter(counter - 1)
    }

    const handalTextChange = (e) => {
        setText(e.target.value)
    }

    const handalPasswordChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div>
            <p>Counter:{counter}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>

            <input type='text' placeholder='text' onChange={handalTextChange} />
            <input type='password' placeholder='change' onChange={handalPasswordChange} />

            <p>Text:{text}</p>

            <p>Paasword:{password}</p>
        </div>
    )
}

export default TwoCC
