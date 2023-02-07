import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'

const Login = () => {

    // const { handleLogin, loginFailed } = useContext(UserContext)


    const handleLogin = (e) => {

        console.log(e)
    }



    const [loginInputs, setLoginInputs] = useState({
        email:"",
        password:""
    })

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('This must be a valid email')
        .required('This must be filled'),
    password: Yup.string()
        .min(5, 'Enter minimum 5 symbols')
        .required('This must be filled')
})


    return (

        <>
        <Formik
            initialValues={loginInputs}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >

        {({ errors, touched, values, setValues }) => (
        
            <Form action='' id="loginForm">
                <h1>Login</h1>
                <label htmlFor=''>
                    <Field
                        type="text"
                        name="email"
                        placeholder="expample@email.com"
                        value={values.email}
                        onChange={(e) => setValues({...values, email: e.target.value})}
                    />
                    {
                        errors.email && touched.email ?
                        <span>{errors.email}</span> : null
                    }
                </label>
                <label action='' htmlFor=''>
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={(e) => setValues({...values, password: e.target.value})}
                    />
                    {
                        errors.password && touched.password ?
                        <span>{errors.password}</span> : null
                    }
                </label>
                <button type='submit'>Login</button>
                {/* {
                    loginFailed ?
                    <p id='loginFailed'>Email or password is incorrect</p>
                    : null
                } */}
            </Form>
        )}

        </Formik>
        </>
    )
}

export default Login