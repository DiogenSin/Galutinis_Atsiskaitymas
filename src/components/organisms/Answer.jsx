import UserContext from "../contexts/UserContexts"
import QAContext from "../contexts/QAContexts"
import { useContext } from "react"

const Answer = ({data}) => {

    const { userList, loggedIn, loggedInUser } = useContext(UserContext)
    const { handleALike, handleADislike, handleADelete, handleOpenAForm } = useContext(QAContext)
    const answerAuthor = userList.find(user => user.id === data.uID)

    return (

        <>

        {
            loggedIn ?
                <div className="answerCard">
                <div className="imgAndAnswer">
                <div className="userImg">              
                    <img src={answerAuthor.picture} alt={answerAuthor.name} />
                </div>
                <div className="aField">
                    <p>{data.answer}
                        {
                            loggedInUser.id === answerAuthor.id ?

                            <span className="icons">
                                <i className="glyphicon glyphicon-edit" onClick={e => handleOpenAForm(data)}></i>
                                <i className="glyphicon glyphicon-trash" onClick={e => handleADelete(data)}></i>
                            </span>
                            :
                            null
                        }

                    </p>
                    <div className="qInfo">
                        <p className="date">{data.date}</p>
                        <p className="edited">{data.edited ? "Edited" : null}</p>
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
            :
                <div className="answerCard">
                <div className="imgAndAnswer">
                <div className="userImg">              
                    <img src={answerAuthor.picture} alt={answerAuthor.name} />
                </div>
                <div className="aField">
                    <p>{data.answer}</p>
                    <div className="qInfo">
                        <p className="date">{data.date}</p>
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
        }
        </>
    )
}

export default Answer