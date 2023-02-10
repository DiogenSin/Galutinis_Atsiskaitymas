import { createContext, useState, useEffect } from "react";

const QAContext = createContext()

const QAProvider = ({children}) => {

    const [qList, setQList] = useState(null)


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


    const getQData = async() => {

        const fetchData = await fetch('http://localhost:3001/questions')
        .then (res => res.json())
        setQList(fetchData)

    }



    useEffect(() => {
        getQData()
      }, [])


    return (

        <QAContext.Provider
            value={{
                qList,
                handleLike,
                handleDislike
            }}
        >
            {children}
        </QAContext.Provider>

    )

}


export { QAProvider }
export default QAContext