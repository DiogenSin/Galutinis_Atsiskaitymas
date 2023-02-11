import UserContext from "../contexts/UserContexts"
import QAContext from "../contexts/QAContexts"
import { useContext } from "react"

const Answer = ({data}) => {

    const { userList } = useContext(UserContext)
    const { handleALike, handleADislike, handleADelete, handleAEdit } = useContext(QAContext)
    const answerAuthor = userList.find(user => user.id === data.uID)

    return (

        <>
                <div className="answerCard">
                    <div className="imgAndAnswer">
                    <div className="userImg">
                        <img src={answerAuthor.picture} alt={answerAuthor.name} />
                    </div>
                    <div className="aField">
                        <p>{data.answer}
                            <span className="icons">
                            <i className="glyphicon glyphicon-edit" onClick={e => handleAEdit(data)}></i>
                            <i className="glyphicon glyphicon-trash" onClick={e => handleADelete(data.id)}></i>
                            </span>
                        </p>
                        <div className="qInfo">
                            <p className="date">{data.date}</p>
                            <p className="edited">Edited</p>
                        </div>
                    </div>
                    </div>
                    <div className="likeDislike">
                        <p className="like">{data.likes}</p>
                        <i className="glyphicon glyphicon-chevron-up" onClick={e => handleALike(data)}></i>
                        <p className="dislike">{data.dislikes}</p>
                        <i className="glyphicon glyphicon-chevron-down" onClick={e => handleADislike(data)}></i>
                    </div>
                </div>  
        </>
    )
}

export default Answer