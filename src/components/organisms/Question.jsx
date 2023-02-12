import UserContext from "../contexts/UserContexts"
import QAContext from "../contexts/QAContexts"
import { useContext, useState } from "react"

const Question = ({data}) => {

    const { userList, loggedInUser, loggedIn } = useContext(UserContext) 
    const { handleLike, handleDislike, handleOpenForm, handleQDelete } = useContext(QAContext)
    const questionAuthor = userList.find(user => user.id === data.uID)

    const [liked, setLiked] = useState(false)

    const qLiked = (id) => {
        setLiked(!liked)
    }

    return (
        <>
        {
            loggedIn ?
                <div className="questionCard" id={data.id}>
                <div className="userImg">
                    <img src={questionAuthor.picture} alt={questionAuthor.name} />
                </div>
                <div className="qField">
                    <h2>{data.question}
                        {
                            loggedInUser.id === questionAuthor.id ?
                                <span className="icons">
                                    <i className="glyphicon glyphicon-edit" onClick={e => handleOpenForm(data)}></i>
                                    <i className="glyphicon glyphicon-trash" onClick={e => handleQDelete(data.id)}></i>
                                </span>
                            :
                            <span className="icons">
                                <i className={liked ? "fa fa-heart" : "fa fa-heart-o"} onClick={qLiked}></i>
                            </span>
                        }
                    </h2>
                    <p>{data.description}</p>
                    <div className="qInfo">
                        <p className="date">{data.date}</p>
                        <p className="edited">{data.edited ? "Edited" : null}</p>
                    </div>

                </div>
                <div className="likeDislike">
                    <p className="like">{data.likes}</p>
                    <i className="glyphicon glyphicon-chevron-up" onClick={e => handleLike(data)}></i>
                    <p className="dislike">{data.dislikes}</p>
                    <i className="glyphicon glyphicon-chevron-down" onClick={e => handleDislike(data)}></i>
                </div>
                </div>
            :
                <div className="questionCard" id={data.id}>
                <div className="userImg">
                    <img src={questionAuthor.picture} alt={questionAuthor.name} />
                </div>
                <div className="qField">
                    <h2>{data.question}</h2>
                    <p>{data.description}</p>
                    <div className="qInfo">
                        <p className="date">{data.date}</p>
                    </div>
                </div>
                <div className="likeDislike">
                    <p className="like">{data.likes}</p>
                    <i className="glyphicon glyphicon-chevron-up" onClick={e => handleLike(data)}></i>
                    <p className="dislike">{data.dislikes}</p>
                    <i className="glyphicon glyphicon-chevron-down" onClick={e => handleDislike(data)}></i>
                </div>
                </div>
        }
        </>
    )
}

export default Question