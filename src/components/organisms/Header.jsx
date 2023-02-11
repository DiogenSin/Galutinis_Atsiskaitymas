import { NavLink } from "react-router-dom"

const Header = () => {


    return (

        <header>
            <a href="/"><img src="https://www.freeiconspng.com/thumbs/logo-design/pink-blue-logo-design-template-png-6.png" alt="" /></a>

            <nav>
                <NavLink to='/login'>Login</NavLink>
                <button id='registrationBtn'><NavLink to='/registration'>Registration</NavLink></button>
            </nav>

        </header>

    )
}

export default Header