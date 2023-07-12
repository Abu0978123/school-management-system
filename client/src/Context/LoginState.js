import { useState } from 'react'
import { LoginContext } from './LoginContext'

function LoginState(props) {
    const [loggedIn, setLoggedIn] = useState(false)
  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
        {props.children}
    </LoginContext.Provider>
  )
}

export default LoginState