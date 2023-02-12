import { NavLink } from "react-router-dom"
import UserContext from "../contexts/UserContexts"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

const Header = () => {

    const { setLoggedIn, loggedIn, loggedInUser } = useContext(UserContext)

    const navigate = useNavigate()

    const handleLogout = () => {
        setLoggedIn(false)
        navigate('/')
    }

    const handleNewQuestion = () => {
        console.log('Noris sukurti naują klausimą')
    }

    return (
        <>
        {
            loggedIn ?

                <header>
                    <a href="/"><img src="https://www.freeiconspng.com/thumbs/logo-design/pink-blue-logo-design-template-png-6.png" alt="" /></a>
                    <div id="userField">
                        <i className="fa fa-plus-square" onClick={handleNewQuestion}></i>
                        <div id="userInfo">
                            <p id="userName">{loggedInUser.name}</p>
                            <p id="logOut" onClick={handleLogout}>Logout</p>
                        </div>
                        <img src={loggedInUser.picture} alt="" />
                    </div>
                </header>
            :
                <header>
                    <a href="/"><img src="https://www.freeiconspng.com/thumbs/logo-design/pink-blue-logo-design-template-png-6.png" alt="" /></a>
                    <nav>
                        <NavLink to='/login'>Login</NavLink>
                        <button id='registrationBtn'><NavLink to='/registration'>Registration</NavLink></button>
                    </nav>
                </header>
        }

        
        </>


    )
}

export default Header