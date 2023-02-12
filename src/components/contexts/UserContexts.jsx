import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext()

const UserProvider = ({children}) => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(null)
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

        if(loginVerification) {
            setLoggedIn(true)
            let loggedIn = {
                id:loginVerification.id,
                name:loginVerification.name,
                picture:loginVerification.picture
            }
            setLoggedInUser(loggedIn)
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

            let newUser = {
                id:regData.id,
                name:regData.name,
                email:regData.email,
                password:regData.password,
                picture:regData.picture
            }

            setLoggedIn(true)
            setLoggedInUser(newUser)
            setUserList([...userList, newUser])
            navigate('/')

            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({
                    id: regData.id,
                    name:regData.name,
                    email: regData.email,
                    password: regData.password,
                    picture:regData.picture
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
                setLoggedIn,
                loggedIn,
                loginFailed,
                handleRegistration,
                userExists,
                userList,
                loggedInUser
            }}
        >
            {children}
        </UserContext.Provider>

    )

}


export { UserProvider }
export default UserContext