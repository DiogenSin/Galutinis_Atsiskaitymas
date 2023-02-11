import { useState } from "react"
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'
import QAContext from "../contexts/QAContexts"
import { useContext } from "react"

const EditAnswerForm = () => {


    const { handleCloseForm, closedAForm, answerToEdit, handleAEdit } = useContext(QAContext)

    const [editAnswer, setEditAnswer] = useState({
        id: answerToEdit.id,
        qID: answerToEdit.qID,
        uID: answerToEdit.uID,
        answer: answerToEdit.answer,
        likes: answerToEdit.likes,
        dislikes: answerToEdit.dislikes,
        edited: answerToEdit.edited,
        date: answerToEdit.date
    })

const validationSchema = Yup.object().shape({
    answer: Yup.string()
        .required('This must be filled')
})

    return (

        <>
        <Formik
            initialValues={editAnswer}
            validationSchema={validationSchema}
            onSubmit={handleAEdit}
        >

        {({ errors, touched, values, setValues }) => (
            <div id="answerEditForm" className={closedAForm ? "hide" : "answerForm"}>
            <i className="glyphicon glyphicon-remove" id="close" onClick={handleCloseForm}></i>
            <Form action=''>
                <h3>Edit the answer</h3>
                <label action='' htmlFor='answer'>
                    Answer:
                    <Field
                        id="answer"
                        wrap="hard"
                        as="textarea"
                        name="description"
                        value={values.answer}
                        onChange={(e) => setValues({...values, answer: e.target.value})}
                    />
                    {
                        errors.answer && touched.answer ?
                        <span>{errors.answer}</span> : null
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

export default EditAnswerForm