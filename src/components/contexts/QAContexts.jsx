import { createContext, useState, useEffect } from "react";

const QAContext = createContext()

const QAProvider = ({children}) => {

    const [qList, setQList] = useState(null)
    const [aList, setAList] = useState(null)
    const [closedForm, setClosedForm] = useState(true)
    const [closedAForm, setClosedAForm] = useState(true)
    const [questionToEdit, setQuestionToEdit] = useState(null)
    const [answerToEdit, setAnswerToEdit] = useState(null)

    const getQData = async() => {

        const fetchData = await fetch('http://localhost:3001/questions')
        .then (res => res.json())
        setQList(fetchData)
    }

    const getAData = async() => {

        const fetchData = await fetch('http://localhost:3001/answers')
        .then (res => res.json())
        setAList(fetchData)
    }

    const handleLike = (data) => {

        const likedQuestion = {
            id: data.id,
            uID: data.uID,
            question: data.question,
            description: data.description,
            likes: data.likes+1,
            dislikes: data.dislikes,
            edited: data.edited,
            date: data.date
        }

        setQList(qList.map(question => question.id === data.id ? {...question, ...likedQuestion} : question))

        fetch(`http://localhost:3001/questions/${data.id}`, {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                uID: data.uID,
                question: data.question,
                description: data.description,
                likes: data.likes+1,
                dislikes: data.dislikes,
                edited: data.edited,
                date: data.date
            })
      })
    }

    const handleDislike = (data) => {

        const dislikedQuestion = {
            id: data.id,
            uID: data.uID,
            question: data.question,
            description: data.description,
            likes: data.likes,
            dislikes: data.dislikes+1,
            edited: data.edited,
            date: data.date
        }

        setQList(qList.map(question => question.id === data.id ? {...question, ...dislikedQuestion} : question))

        fetch(`http://localhost:3001/questions/${data.id}`, {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                uID: data.uID,
                question: data.question,
                description: data.description,
                likes: data.likes,
                dislikes: data.dislikes+1,
                edited: data.edited,
                date: data.date
            })
      })
    }

    const handleALike = (data) => {
        const likedAnswer = {
            id: data.id,
            qID: data.qID,
            uID: data.uID,
            answer: data.answer,
            likes: data.likes+1,
            dislikes: data.dislikes,
            edited: data.edited,
            date: data.date
        }

        setAList(aList.map(answer => answer.id === data.id ? {...answer, ...likedAnswer} : answer))

        fetch(`http://localhost:3001/answers/${data.id}`, {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                qID: data.qID,
                uID: data.uID,
                answer: data.answer,
                likes: data.likes+1,
                dislikes: data.dislikes,
                edited: data.edited,
                date: data.date
            })
      })
    }

    const handleADislike = (data) => {
        const dislikedAnswer = {
            id: data.id,
            qID: data.qID,
            uID: data.uID,
            answer: data.answer,
            likes: data.likes,
            dislikes: data.dislikes+1,
            edited: data.edited,
            date: data.date
        }

        setAList(aList.map(answer => answer.id === data.id ? {...answer, ...dislikedAnswer} : answer))

        fetch(`http://localhost:3001/answers/${data.id}`, {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                qID: data.qID,
                uID: data.uID,
                answer: data.answer,
                likes: data.likes,
                dislikes: data.dislikes+1,
                edited: data.edited,
                date: data.date
            })
      })
    }

    const handleADelete = (id) => {
        
        let deleteAnswer = [...aList]
        let indexNr = deleteAnswer.findIndex(answer => answer.id == id)
        deleteAnswer.splice(indexNr, 1)
        setAList(deleteAnswer)
        
        fetch(`http://localhost:3001/answers/${id}`, {
        method: 'DELETE'
      })
      .then (res => res.json())
    }

    const handleQEdit = (data) => {

        const editedQuestion = {
            id: data.id,
            uID: data.uID,
            question: data.question,
            description: data.description,
            likes: data.likes,
            dislikes: data.dislikes,
            edited: true,
            date: todayIs()
        }
        setQList(qList.map(question => question.id === data.id ? {...question, ...editedQuestion} : question))
        setClosedForm(!closedForm)
        setQuestionToEdit(null)

        fetch(`http://localhost:3001/questions/${data.id}`, {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                uID: data.uID,
                question: data.question,
                description: data.description,
                likes: data.likes,
                dislikes: data.dislikes,
                edited: true,
                date: todayIs()
            })
      })
    }

    const todayIs = () => {

        const today = new Date()

        return (
            today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()
            )
    }

    const handleQDelete = (id) => {
        
        const deleteAnswer = [...aList]
        const answersToDelete = deleteAnswer.filter(answer => answer.qID === id)
        answersToDelete.forEach(selectedAnswer => {
            const location = deleteAnswer.findIndex(answer => answer.id == selectedAnswer.id)
            deleteAnswer.splice(location,1)
            setAList(deleteAnswer)

            fetch(`http://localhost:3001/answers/${selectedAnswer.id}`, {
                method: 'DELETE'
              })
              .then (res => res.json())
        })

        const deleteQuestion = [...qList]
        console.log(deleteQuestion)
        const indexNr = deleteQuestion.findIndex(question => question.id === id)
        console.log(indexNr)
        deleteQuestion.splice(indexNr, 1)
        console.log(deleteQuestion)
        setQList(deleteQuestion)
        
        fetch(`http://localhost:3001/questions/${id}`, {
        method: 'DELETE'
      })
      .then (res => res.json())


    }

    const handleAEdit = (data) => {
        
        const editedAnswer = {
            id: data.id,
            qID: data.qID,
            uID: data.uID,
            answer: data.answer,
            likes: data.likes,
            dislikes: data.dislikes,
            edited: true,
            date: todayIs()
        }
        setAList(aList.map(answer => answer.id === data.id ? {...answer, ...editedAnswer} : answer))
        setClosedAForm(true)
        setAnswerToEdit(null)

        fetch(`http://localhost:3001/answers/${data.id}`, {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                qID: data.qID,
                uID: data.uID,
                answer: data.answer,
                likes: data.likes,
                dislikes: data.dislikes,
                edited: true,
                date: todayIs()
            })
      })

    }

    const handleNewAnswer = (data) => {

        const newAnser = {
            id: data.id,
            qID: data.qID,
            uID: data.uID,
            answer: data.answer,
            likes: data.likes,
            dislikes: data.dislikes,
            edited: data.edited,
            date: data.date
        }

        setAList([...aList, newAnser])

        fetch('http://localhost:3001/answers', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: data.id,
                qID: data.qID,
                uID: data.uID,
                answer: data.answer,
                likes: data.likes,
                dislikes: data.dislikes,
                edited: data.edited,
                date: data.date
            })
        })

    }

    const handleOpenForm = (data) => {

        let editedQuestion = {
            id: data.id,
            uID: data.uID,
            question: data.question,
            description: data.description,
            likes: data.likes,
            dislikes: data.dislikes,
            edited: data.edited,
            date: data.date
        }
        setQuestionToEdit(editedQuestion)
        setClosedForm(false)
    }

    const handleOpenAForm = (data) => {

        let editedAnswer = {
            id: data.id,
            qID: data.qID,
            uID: data.uID,
            answer: data.answer,
            likes: data.likes,
            dislikes: data.dislikes,
            edited: data.edited,
            date: data.date
        }
        setAnswerToEdit(editedAnswer)
        setClosedAForm(false)
    }

    const handleCloseForm = () => {
        setQuestionToEdit(null)
        setAnswerToEdit(null)
        setClosedForm(true)
        setClosedAForm(true)
    }

    useEffect(() => {
        getQData()
        getAData()
      }, [])

    return (

        <QAContext.Provider
            value={{
                qList,
                aList,
                handleLike,
                handleDislike,
                handleALike,
                handleADislike,
                handleADelete,
                handleAEdit,
                handleQEdit,
                handleQDelete,
                todayIs,
                handleNewAnswer,
                handleOpenForm,
                closedForm,
                questionToEdit,
                handleCloseForm,
                handleOpenAForm,
                answerToEdit,
                closedAForm
            }}
        >
            {children}
        </QAContext.Provider>

    )

}


export { QAProvider }
export default QAContext