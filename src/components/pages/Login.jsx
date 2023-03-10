import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import UserContext from '../contexts/UserContexts'
import { useContext } from 'react'

const Login = () => {

    const { handleLogin, loginFailed } = useContext(UserContext)



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
                <label htmlFor='email'>
                    Email:
                    <Field
                        type="text"
                        name="email"
                        placeholder=""
                        value={values.email}
                        onChange={(e) => setValues({...values, email: e.target.value})}
                    />
                    {
                        errors.email && touched.email ?
                        <span>{errors.email}</span> : null
                    }
                </label>
                <label action='' htmlFor='password'>
                    Password:
                    <Field
                        type="password"
                        name="password"
                        placeholder=""
                        value={values.password}
                        onChange={(e) => setValues({...values, password: e.target.value})}
                    />
                    {
                        errors.password && touched.password ?
                        <span>{errors.password}</span> : null
                    }
                </label>
                <button type='submit'><i className='fa fa-send'></i></button>
                {
                    loginFailed ?
                    <p id='loginFailed'>Email or password is incorrect</p>
                    : null
                }
            </Form>
        )}

        </Formik>
        </>
    )
}

export default Login