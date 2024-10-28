'use client'
import { loadUser } from '@/redux/actions/userAction'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const SystemAuth = ({children}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadUser())
    },[])
  return (
    <div>{children}</div>
  )
}

export default SystemAuth