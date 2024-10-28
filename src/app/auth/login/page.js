'use client'
import { loginUser } from '@/redux/actions/userAction'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
    const dispatch = useDispatch()
    const {loading, user, isAuthenicated} = useSelector(state=>state.user)
    console.log(user)
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()

    const handleSubmit = ()=>{
        const userData = {
            email:email,
            password:pass,
            role:"USER"
        }
        dispatch(loginUser(userData))
    }

    useEffect(()=>{
        
    },[])
  return (
    <div>
        <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='email' placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
        <button onClick={handleSubmit}>{loading?"Loading....":"Submit"}</button>
    </div>
  )
}

export default page