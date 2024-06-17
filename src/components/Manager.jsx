import React, {useState} from 'react'
import './Manager.css'
import Add from './add.svg'
import Eye from './eye.svg'

const Manager = () => {
    const [show, setShow] = useState(true)

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
                <input type="text" className='inp' placeholder='Enter Website URL'/>
                <div className="user-pass">
                    <input type="text" className='inp username' placeholder='Enter Username'/>
                    <div className="pass">
                        <input type="password" className='inp passwordINP' placeholder='Enter Password'/>
                        <span className='Show' onClick={handleShow}>
                            <img src={Eye} alt="" className='Eye'/>
                        </span>
                    </div>
                </div>
                <button className='addBtn' onMouseEnter={btnHover}><img src={Add} className='addimg'/> Add Password</button>
            </div>
        </div>
    )
}

export default Manager
