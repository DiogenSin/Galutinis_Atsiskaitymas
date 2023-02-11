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

function App() {
  
  const { questionToEdit } = useContext(QAContext)
  
  return (
    <>
    
      <Header/>

      <main>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />
        </Routes>
      </main>
      <Footer />
      {
        questionToEdit ?
        <EditQuestionForm />
        :
        null
      }

    </>
  );
}

export default App;
