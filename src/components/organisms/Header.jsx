import { NavLink } from "react-router-dom"

const Header = () => {


    return (

        <header>
            <img src="https://www.freeiconspng.com/thumbs/logo-design/pink-blue-logo-design-template-png-6.png" alt="" />

            <nav>
                <NavLink to='/login'>Login</NavLink>
                <button id='registrationBtn'><NavLink to='/registration'>Registration</NavLink></button>
            </nav>

        </header>

    )
}

export default Header