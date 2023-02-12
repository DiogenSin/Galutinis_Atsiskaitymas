import './styles/App.css';
import { Routes, Route} from 'react-router-dom'
import Main from './components/pages/Main';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import EditQuestionForm from './components/organisms/EditForm';
import QAContext from './components/contexts/QAContexts';
import { useContext } from 'react';
import EditAnswerForm from './components/organisms/EditAnswerForm';
import NewQuestionForm from './components/organisms/NewQuestionForm';
import AllQuestions from './components/organisms/AllQuestions';
import Unanswered from './components/pages/Unanswered';
import Answered from './components/pages/Answered';

function App() {
  
  const { questionToEdit, answerToEdit } = useContext(QAContext)
  
  return (
    <>
    
      <Header/>

      <main>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/questions' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/questions/all' element={<Main/>} />
          <Route path='/questions/answered' element={<Answered/>} />
          <Route path='/questions/unanswered' element={<Unanswered/>} />
        </Routes>
      </main>
      <Footer />
      {
        questionToEdit ?
        <EditQuestionForm />
        :
        null
      }
      {
        answerToEdit ?
        <EditAnswerForm />
        :
        null
      }
      <NewQuestionForm />
    </>
  );
}

export default App;
