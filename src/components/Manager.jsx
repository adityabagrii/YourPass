import React, {useEffect, useState} from 'react'
import './Manager.css'
import Add from './add.svg'
import Eye from './eye.svg'

const Manager = () => {
    const [show, setShow] = useState(true)
    const [Form, setForm] = useState({site:"", username:"", password:""})
    const [passwordArray, setpasswordArray] = useState([])

    useEffect (() => {
        let passwords = localStorage.getItem('passwords')
        if(passwords) {
            setpasswordArray(JSON.parse(passwords))
        }

    }, [])

    const handleAdd = () => {
        setpasswordArray([...passwordArray, Form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, Form]))
        console.log(passwordArray)
    }

    const handleChange = (e) => {
        setForm({...Form, [e.target.name]: e.target.value})
    }

    const handleShow = () => {
        setShow(!show)
        if(show) {
            document.querySelector('.passwordINP').type = 'text'
        }
        else {
            document.querySelector('.passwordINP').type = 'password'
        }
    }

    const btnHover = () => {
        document.querySelector('.addimg').animate([
            {transform: 'rotate(-180deg)'},
            {scale: 1.1}
        ], {
            duration: 500,
            fill: 'forwards'
        })
    }

    return (
        <div className="main-manager">
            <div className="container">
                <input value={Form.site} name = 'site' onChange={handleChange} type="text" className='inp' placeholder='Enter Website URL'/>
                <div className="user-pass">
                    <input value={Form.username} name='username' onChange={handleChange} type="text" className='inp username' placeholder='Enter Username'/>
                    <div className="pass">
                        <input value={Form.password} name='password' onChange={handleChange} type="password" className='inp passwordINP' placeholder='Enter Password'/>
                        <span className='Show' onClick={handleShow}>
                            <img src={Eye} alt="" className='Eye'/>
                        </span>
                    </div>
                </div>
                <button className='addBtn' onMouseEnter={btnHover} onClick={handleAdd}><img src={Add} className='addimg'/> Add Password</button>
            </div>
        </div>
    )
}

export default Manager
