import { useState } from "react"
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import QAContext from "../contexts/QAContexts"
import { useContext } from "react"
import { nanoid } from "nanoid"

const NewQuestionForm = () => {

    const { closedNQForm, handleNewQuestion, handleCloseForm } = useContext(QAContext)

    const [newQuestion, setNewQuestion] = useState({
        id: nanoid(),
        uID: "",
        question: "",
        description: "",
        likes: "",
        dislikes: "",
        edited: "",
        date: ""
    })

const validationSchema = Yup.object().shape({
    question: Yup.string()
        .required('This must be filled'),
    description: Yup.string()
        .required('This must be filled')
})

    return (

        <>
        <Formik
            initialValues={newQuestion}
            validationSchema={validationSchema}
            onSubmit={handleNewQuestion}
        >

        {({ errors, touched, values, setValues }) => (
            <div id="newQForm" className={closedNQForm ? "hide" : "newForm"}>
            <i className="glyphicon glyphicon-remove" id="close" onClick={handleCloseForm}></i>
            <Form action=''>
                <h3>Add new question</h3>
                <label action='' htmlFor='newQuestion'>
                    Question:
                    <Field
                        type="text"
                        name="newQuestion"
                        value={values.question}
                        onChange={(e) => setValues({...values, question: e.target.value})}
                    />
                    {
                        errors.question && touched.question ?
                        <span>{errors.question}</span> : null
                    }
                </label>
                <label action='' htmlFor='newDescription'>
                    Description:
                    <Field
                        id="newDescription"
                        wrap="hard"
                        as="textarea"
                        name="newDescription"
                        value={values.description}
                        onChange={(e) => setValues({...values, description: e.target.value})}
                    />
                    {
                        errors.description && touched.description ?
                        <span>{errors.description}</span> : null
                    }
                </label>
                <button type='submit'><i className='fa fa-send'></i></button>
            </Form>
            </div>
        )}

        </Formik>
        </>
    )
}

export default NewQuestionForm