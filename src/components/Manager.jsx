import React, {useEffect, useState} from 'react'
import './Manager.css'
import Add from './add.svg'
import Eye from './eye.svg'
import Copy from './copy.svg'
import Edit from './edit.svg'
import Delete from './delete.svg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [show, setShow] = useState(true)
    const [Form, setForm] = useState({site:"", username:"", password:""})
    const [passwordArray, setpasswordArray] = useState([])

    // const getPasswords = async () => {
    //     let req = await fetch("http://localhost:3000/")
    //     let passwords = await req.json()
    //     console.log(passwords)
    //     setpasswordArray(passwords)
    //     console.log(passwords)
    // }
    

    useEffect (() => {
        // getPasswords()
        let passwords = JSON.parse(localStorage.getItem('passwords'))
        if(passwords) {
            setpasswordArray(passwords)
        }
        
    }, [])

    const handleDelete = async (id) => {
        if(window.confirm('Are you sure you want to delete this password?')) {
            // let password = passwordArray.find(item => item.id === id)
            let newpasswordArray = passwordArray.filter(item => item.id !== id)
            setpasswordArray(newpasswordArray)
            localStorage.setItem('passwords', JSON.stringify(newpasswordArray))
            // let res = await fetch('http://localhost:3000/', {
            //     method: 'DELETE',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(password)
            // })
            toast.error('Password Deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const handleEdit = async (id) => {
        setForm({...passwordArray.find(item => item.id === id), id: id})
        let newpasswordArray = passwordArray.filter(item => item.id !== id)
        // let password = passwordArray.find(item => item.id === id)
        setpasswordArray(newpasswordArray)
        // let res = await fetch('http://localhost:3000/', {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(password)
        // })
    }

    const handleCopy = (text) => {
        toast('Copied to Clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        navigator.clipboard.writeText(text)
    }

    const handleAdd = async () => {
        if(Form.site === "" || Form.username === "" || Form.password === "") {
            toast.error('Please fill all the fields', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return
        }
        setpasswordArray([...passwordArray, {...Form, id:uuidv4()}])
        localStorage.setItem('passwords', JSON.stringify([...passwordArray, {...Form, id:uuidv4()}]))
        // let res = await fetch('http://localhost:3000/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({...Form, id:uuidv4()})
        // })
        setForm({site:"", username:"", password:""})
        toast('Passworded Added Sucessfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
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
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
            <div className="container">
                <input value={Form.site} name = 'site' onChange={handleChange} type="text" className='inp' placeholder='Enter Website URL'/>
                <div className="user-pass">
                    <input value={Form.username} name='username' onChange={handleChange} type="text" className='inp username' placeholder='Enter Username'/>
                    <div className="pass">
                        <input value={Form.password} name='password' onChange={handleChange} type="password" className='passwordINP' placeholder='Enter Password'/>
                        <span className='Show' onClick={handleShow}>
                            <img src={Eye} alt="" className='Eye'/>
                        </span>
                    </div>
                </div>
                <button className='addBtn' onMouseEnter={btnHover} onClick={handleAdd}><img src={Add} className='addimg'/>Save Password</button>
            </div>
            <div className="stored">
                <div className="name">
                    <p className='heading'>Stored Passwords</p>
                </div>
                {passwordArray.length === 0 && <div className='noPasswords'>No Passwords to Show</div>}
                {passwordArray.length!==0 &&
                <table className='spasswordsHead'>
                    <thead className='tableHeading'>
                        <tr>
                            <th className='thead'>Website URL</th>
                            <th className='thead'>Username</th>
                            <th className='thead'>Password</th>
                            <th className='thead'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='spasswordsBody'>
                        {passwordArray.map((item, index)=>{
                            return (
                                <tr key={index}>
                                    <td className='tableData'>
                                        <div className='datadiv'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <img className='copyIcon' src={Copy} alt="" onClick={()=>handleCopy(item.site)}/>
                                        </div>
                                    </td>
                                    <td className='tableData'>
                                        <div className='datadiv'>
                                            {item.username}
                                            <img className='copyIcon' src={Copy} alt="" onClick={()=>handleCopy(item.username)}/>
                                        </div>
                                    </td>
                                    <td className='tableData'>
                                        <div className='datadiv'>
                                            {item.password}
                                            <img className='copyIcon' src={Copy} alt="" onClick={()=>handleCopy(item.password)}/>
                                        </div>
                                    </td>
                                    <td className='tableData'>
                                        <span>
                                            <img className='icons' src={Edit} alt="" onClick={()=>handleEdit(item.id)}/>
                                        </span>
                                        <span>
                                            <img className='icons' src={Delete} alt="" onClick={()=>handleDelete(item.id)}/>
                                        </span>
                                    </td>                
                                </tr>
                            )
                        })}
                    </tbody>
                </table>}
            </div>
        </div>
    )
}

export default Manager
