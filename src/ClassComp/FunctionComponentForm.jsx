/* eslint-disable no-const-assign */
// @ts-nocheck
import React, { useState } from 'react'

const FunctionComponentForm = () => {
    const [data, setData] = useState({
        userName: '',
        email: '',
        password: '',
    })

    const onInputChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data, [name]: value
        })
    }
    const handalSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        setData({
            userName: '',
            email: "",
            password: ''
        })
    }
    return (
        <div>
            <p>Form using Function Component</p>
            <form onSubmit={handalSubmit} >
                <div>
                    <label>UserName</label>
                    <input type='text' name='userName' value={data.userName} onChange={onInputChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email' value={data.email} onChange={onInputChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={data.password} onChange={onInputChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default FunctionComponentForm
