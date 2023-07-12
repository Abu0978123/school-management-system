import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { LoginContext } from "../Context/LoginContext"


function Protected() {
    const {loggedIn} = useContext(LoginContext)
    let isAuth = loggedIn
    
  return (
    isAuth !==true ? <Navigate to = 'login'/> : <Outlet/>
  )
}

export default Protected