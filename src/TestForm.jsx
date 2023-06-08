// @ts-nocheck
import React, { useState } from 'react'

const TestForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        city: '',
        gendar: '',
        hobbies: [],
        rating: 0

    })
    const handalInputChange = (e) => {
        const { name, value, type, checked } = e.target
        // setFormData({ ...formData, [name]: value })

        if (type === 'checkbox') {
            if (checked) {
                setFormData((prev) => ({ ...prev, hobbies: [...prev.hobbies, value] }))
            } else {
                setFormData((prev) => ({ ...prev, hobbies: prev.hobbies.filter((hobbie) => hobbie !== value) }))
            }
        } else {

            setFormData((prv) => ({ ...prv, [name]: value }))
        }
    }

    const handalSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData({
            username: '',
            email: '',
            password: '',
            city: '',
            gendar: '',
            hobbies: [],
            rating: 0
        })
    }
    return (
        <>
            <form onSubmit={handalSubmit}>
                <p>Form</p>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder='Enter your name' name='username' onChange={handalInputChange} />
                </div>
                <div>
                    <label>email</label>
                    <input type="text" placeholder='Enter your Email' name='email' onChange={handalInputChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder='Enter your Password' name='password' onChange={handalInputChange} />
                </div>
                <div>
                    <select name="city" onChange={handalInputChange}>
                        <option value="mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Pune">Pune</option>
                        <option value="Goa">Goa</option>
                    </select>
                </div>
                <label> Gander</label>
                <div>
                    <input type='radio' value='male' name='gendar' onChange={handalInputChange} />
                    <label>Male</label>
                    <input type='radio' value='Female' name='gendar' onChange={handalInputChange} />
                    <label>Female</label>
                    <input type='radio' value='other' name='gendar' onChange={handalInputChange} />
                    <label>other</label>
                </div>
                <label>Hobbies</label>
                <div>
                    <input type='checkbox' value='1' name='hobbies1' onChange={handalInputChange} checked={formData.hobbies.includes('1')} />
                    <label >1</label>
                    <input type='checkbox' value='2' onChange={handalInputChange} name='hobbies2' checked={formData.hobbies.includes('2')} />
                    <label >2</label>
                    <input type='checkbox' value='3' onChange={handalInputChange} name='hobbies3' checked={formData.hobbies.includes('3')} />
                    <label >3</label>
                </div>
                <div>
                    <label >Rating</label>
                    <input type="range" min="0" max="10" name='rating' onChange={handalInputChange} value={formData.rating} />
                </div>
                <button type='submit'>Submit</button>
            </form>
            <p>FormData</p>
            <p>userNAme:{formData.username}</p>
            <p>Email:{formData.email}</p>
            <p>City:{formData.city}</p>
            <p>PAssword:{formData.password}</p>
            <p>Gendar:{formData.gendar}</p>
            <p>Hobbies:{formData.hobbies.map((hobbie) => {
                return (
                    <p key={hobbie}>{hobbie}</p>
                )
            })}</p>
            <p>rating:{formData.rating}</p>

        </>

    )
}




export default TestForm
