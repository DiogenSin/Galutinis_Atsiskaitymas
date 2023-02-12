import { NavLink } from "react-router-dom"
import UserContext from "../contexts/UserContexts"
import QAContext from "../contexts/QAContexts";
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

const Header = () => {

    const { setLoggedIn, loggedIn, loggedInUser } = useContext(UserContext)
    const { handleOpenNewQuestion } = useContext(QAContext)

    const navigate = useNavigate()
    const handleLogout = () => {
        setLoggedIn(false)
        navigate('/')
    }

    return (
        <>
        {
            loggedIn ?

                <header>
                    <a href="/"><img src="https://www.freeiconspng.com/thumbs/logo-design/pink-blue-logo-design-template-png-6.png" alt="" /></a>
                    <div id="userField">
                        <i className="fa fa-plus-square" onClick={handleOpenNewQuestion}></i>
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