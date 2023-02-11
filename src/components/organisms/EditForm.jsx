import { useState } from "react"
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import QAContext from "../contexts/QAContexts"
import { useContext } from "react"

const EditQuestionForm = (data) => {


    const { handleCloseForm, closedForm } = useContext(QAContext)

    const handleEditQuestion = (data) => {
        console.log(data)
    }

    const [editQuestion, setEditQuestion] = useState({
        id: data.id,
        uID: data.uID,
        question: data.question,
        description: data.description,
        likes: data.likes,
        dislikes: data.dislikes,
        edited: data.edited,
        date: data.date
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
            initialValues={editQuestion}
            validationSchema={validationSchema}
            onSubmit={handleEditQuestion}
        >

        {({ errors, touched, values, setValues }) => (
            <div id="editForm" className={closedForm ? "hide" : "editForm"}>
            <i className="glyphicon glyphicon-remove" id="close" onClick={handleCloseForm}></i>
            <Form action=''>
                <h3>Edit the answer</h3>
                <label action='' htmlFor='question'>
                    Question:
                    <Field
                        type="text"
                        name="question"
                        value={values.question}
                        onChange={(e) => setValues({...values, question: e.target.value})}
                    />
                    {
                        errors.question && touched.question ?
                        <span>{errors.question}</span> : null
                    }
                </label>
                <label action='' htmlFor='description'>
                    Description:
                    <Field
                        id="description"
                        wrap="hard"
                        as="textarea"
                        name="description"
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

export default EditQuestionForm