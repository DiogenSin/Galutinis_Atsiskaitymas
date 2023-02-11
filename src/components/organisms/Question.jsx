import UserContext from "../contexts/UserContexts"
import QAContext from "../contexts/QAContexts"
import { useContext, useState } from "react"

const Question = ({data}) => {

    const { userList } = useContext(UserContext) 
    const { handleLike, handleDislike, handleOpenForm, handleQDelete } = useContext(QAContext)
    
    const questionAuthor = userList.find(user => user.id === data.uID)

    return (
        <>
        <div className="questionCard">
            <div className="userImg">
                <img src={questionAuthor.picture} alt={questionAuthor.name} />
            </div>
            <div className="qField">
                <h2>{data.question}
                    <span className="icons">
                        <i className="glyphicon glyphicon-edit" onClick={e => handleOpenForm(data)}></i>
                        <i className="glyphicon glyphicon-trash" onClick={e => handleQDelete(data.id)}></i>
                    </span>
                </h2>
                <p>{data.description}</p>
                <div className="qInfo">
                    <p className="date">{data.date}</p>
                    <p className="edited">Edited</p>
                </div>

            </div>
            <div className="likeDislike">
                <p className="like">{data.likes}</p>
                <i className="glyphicon glyphicon-chevron-up" onClick={e => handleLike(data)}></i>
                <p className="dislike">{data.dislikes}</p>
                <i className="glyphicon glyphicon-chevron-down" onClick={e => handleDislike(data)}></i>
            </div>
        </div>
        </>
    )
}

export default Question