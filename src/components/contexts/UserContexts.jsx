import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext()

const UserProvider = ({children}) => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [userList, setUserList] = useState(null)
    const [loginFailed, setLoginFailed] = useState(false)
    const [userExists, setUserExists] = useState(false)

    const navigate = useNavigate()

    const getUserData = async() => {

        const fetchData = await fetch('http://localhost:3001/users')
        .then (res => res.json())
        setUserList(fetchData)

    }

    const handleLogin = (loginData) => {

        const loginVerification = userList.find(user => user.email === loginData.email && user.password === loginData.password)
        
        loginVerification ? setLoggedIn(true) : setLoginFailed(true)

        if(loginVerification) {
            setLoggedIn(true)
            navigate('/')
        } else {
            setLoginFailed(true)
        }

    }

    const handleRegistration = (regData) => {

        const regVerification = userList.find(user => user.email === regData.email)
        if(regVerification){
            setUserExists(true)
        } else {

            setLoggedIn(true)
            setUserList(...userList, {
                email:regData.email,
                password:regData.password,
                id:regData.id
            })
            
            navigate('/')

            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    id: regData.id,
                    email: regData.email,
                    password: regData.password
                })
            })
        }
    }


    useEffect(() => {
        getUserData()
      }, [])


    return (

        <UserContext.Provider
            value={{
                handleLogin,
                loggedIn,
                loginFailed,
                handleRegistration,
                userExists
            }}
        >
            {children}
        </UserContext.Provider>

    )

}


export { UserProvider }
export default UserContext