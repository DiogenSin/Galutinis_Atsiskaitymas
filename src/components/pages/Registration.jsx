import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useState } from "react"
import { nanoid } from 'nanoid'

const Registration = () => {

    // const { handleRegistration, userExists } = useContext(UserContext)

    const handleRegistration = (e) => {
        console.log(e)
    }

    const [registrationInputs, setregistrationInputs] = useState({
        email:"",
        password:"",
        passwordRepeat: "",
        id:nanoid()
    })

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email must be valid')
        .required('This must be filled'),
    password: Yup.string()
        .min(5, 'Enter at least 5 symbols')
        .required('This must be filled'),
    passwordRepeat: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('This must be filled'),
})

    return (

        <>
        <Formik
            initialValues={registrationInputs}
            validationSchema={validationSchema}
            onSubmit={handleRegistration}
        >

        {({ errors, touched, values, setValues }) => (
        
            <Form action='' id="registrationForm">
                <h1>Registration</h1>
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
                <label action='' htmlFor='passwordRepeat'>
                    Repeat password:
                    <Field
                        type="password"
                        name="passwordRepeat"
                        placeholder=""
                        value={values.passwordRepeat}
                        onChange={(e) => setValues({...values, passwordRepeat: e.target.value})}
                    />
                    {
                        errors.passwordRepeat && touched.passwordRepeat ?
                        <span>{errors.passwordRepeat}</span> : null
                    }
                </label>
                <button type='submit'><i className='fa fa-send'></i></button>
                {/* {
                    userExists ?
                    <p id='registrationFailed'>The user is taken</p>
                    : null
                } */}
            </Form>
        )}

        </Formik>
        </>
    )
}

export default Registration