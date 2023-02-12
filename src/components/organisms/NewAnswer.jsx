import { useState } from "react"
import { nanoid } from "nanoid"
import QAContext from "../contexts/QAContexts"
import UserContext from "../contexts/UserContexts"
import { useContext } from "react"
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

const NewAnswer = ({data}) => {

    const { todayIs, handleNewAnswer } = useContext(QAContext)
    const { loggedInUser } = useContext(UserContext)

    const [newAnswer, setNewAnswer] = useState({
        id: nanoid(),
        qID: data.id,
        uID: "",
        answer: "",
        likes: 0,
        dislikes: 0,
        edited: false,
        date: todayIs()
    })

const validationSchema = Yup.object().shape({
    answer: Yup.string()
        .required('This must be filled')
})

    return (

        <>

        {

            loggedInUser ?

            <Formik
            initialValues={newAnswer}
            validationSchema={validationSchema}
            onSubmit={handleNewAnswer}
            >

            {({ errors, touched, values, setValues }) => (
            
                <Form action='' id={data.id} className="newAnswer">
                    <img src={loggedInUser.picture} alt={loggedInUser.name} />
                    <label action='' htmlFor='answer'>
                        <Field
                            type="text"
                            name="answer"
                            placeholder="Give your answer..."
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
            )}

            </Formik>
            :
            null
        }

        
        </>
    )
}

export default NewAnswer