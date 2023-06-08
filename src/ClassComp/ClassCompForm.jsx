import React from 'react';
import { Component } from 'react';

export class ClassCompForm extends Component {
    state = {
        userName: '',
        email: '',
        gendar: '',
        checkbox: '',
        message: '',
        date: ''
    }

    onInputChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handalSubmit = (e) => {
        e.preventDefault()
        const obj = {
            userName: this.state.userName,
            email: this.state.email,
            gendar: this.state.gendar,
            checkbox: this.state.checkbox,
            message: this.state.message,
            date: this.state.date
        }
        console.log(obj)
        this.setState({
            userName: '',
            email: '',
            gendar: '',
            checkbox1: '',
            checkbox: '',
            message: '',
            date: '',
        })

    }

    render() {
        return (
            <>
                <form onSubmit={this.handalSubmit}>
                    <div style={{ marginBottom: '2rem' }}>
                        <label>UserName</label>
                        <input type="text" name='userName' placeholder='Enter your Name' onChange={this.onInputChange} value={this.state.userName} />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <label>Email</label>
                        <input type="text" name='email' placeholder='Enter your Email' onChange={this.onInputChange} value={this.state.email} />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <p> Select Gendar</p>
                        <input type='radio' name='gendar' value='male' onChange={this.onInputChange} />
                        <label>male</label>
                        <input type='radio' name='gendar' value='female' onChange={this.onInputChange} />
                        <label>female</label>
                        <input type='radio' name='gendar' value='other' onChange={this.onInputChange} />
                        <label>other</label>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <p>checkbox</p>
                        <input type='checkbox' name='checkbox1' onChange={this.onInputChange} value='Service A' />
                        <label >Service A</label>
                        <input type='checkbox' name='checkbox' onChange={this.onInputChange} value='Service B' />
                        <label >Service B</label>
                    </div>
                    <div>
                        <label >Message</label>
                        <textarea name='message' onChange={this.onInputChange} value={this.state.message} />
                    </div>
                    <div>
                        <p>Date</p>
                        <input type='date' name='date' onChange={this.onInputChange} value={this.state.date} />
                    </div>
                    <button type='submit' >Submit</button>
                </form >

            </>
        )

    }
}