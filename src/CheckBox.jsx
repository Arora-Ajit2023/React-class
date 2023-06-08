// @ts-nocheck
import React, { useState } from 'react'

const CheckBox = () => {
    const [data, setData] = useState({
        userName: '',
        email: '',
        hobbies: []
    })

    const handalChange = (e) => {
        const { name, type, checked, value } = e.target
        if (type === 'checkbox') {
            if (checked) {
                setData((prevData) => ({
                    ...prevData,
                    hobbies: [...prevData.hobbies, value],
                }));
            } else {
                setData((prevData) => ({
                    ...prevData,
                    hobbies: prevData.hobbies.filter((checkbox) => checkbox !== value),
                }));
            }
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }
    return (
        <div>
            <form >
                <label>USerName</label>
                <input type="text" name='userNAme' onChange={handalChange} />
                <label>Email</label>
                <input type="email" name='email' onChange={handalChange} />
                <label>
                    <input type='checkbox' name='hobbies' value='a' onChange={handalChange} />
                </label>
                <label>
                    <input type='checkbox' name='hobbies' value='b' onChange={handalChange} />
                </label>
                <label>
                    <input type='checkbox' name='hobbies' value='c' onChange={handalChange} />
                </label>
            </form>
            <p>hobbie:{data.hobbies.map((item) => {
                return (
                    <li key={item}>{item}</li>
                )
            })}</p>
        </div>
    )
}

export default CheckBox
