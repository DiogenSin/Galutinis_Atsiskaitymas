import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import { useState } from "react"
import { nanoid } from 'nanoid'
import UserContext from '../contexts/UserContexts'
import { useContext } from 'react'

const Registration = () => {

    const { handleRegistration, userExists } = useContext(UserContext)

    const [registrationInputs, setregistrationInputs] = useState({
        id:nanoid(),
        name:"",
        email:"",
        password:"",
        passwordRepeat: "",
        picture: ""
    })

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('This must be filled'),
    email: Yup.string()
        .email('Email must be valid')
        .required('This must be filled'),
    password: Yup.string()
        .min(5, 'Enter at least 5 symbols')
        .required('This must be filled'),
    passwordRepeat: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('This must be filled'),
    picture: Yup.string()
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
                <label htmlFor='name'>
                    Name:
                    <Field
                        type="text"
                        name="name"
                        placeholder=""
                        value={values.name}
                        onChange={(e) => setValues({...values, name: e.target.value})}
                    />
                    {
                        errors.name && touched.name ?
                        <span>{errors.name}</span> : null
                    }
                </label>
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
                <label htmlFor='picture'>
                    Link to profile picture:
                    <Field
                        type="url"
                        name="picture"
                        placeholder=""
                        value={values.picture}
                        onChange={(e) => setValues({...values, picture: e.target.value})}
                    />
                    {
                        errors.picture && touched.picture ?
                        <span>{errors.picture}</span> : null
                    }
                </label>
                <button type='submit'><i className='fa fa-send'></i></button>
                {
                    userExists ?
                    <p id='registrationFailed'>The user is taken</p>
                    : null
                }
            </Form>
        )}

        </Formik>
        </>
    )
}

export default Registration