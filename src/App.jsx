import './styles/App.css';
import { Routes, Route} from 'react-router-dom'
import Main from './components/pages/Main';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Header from './components/organisms/Header';

function App() {
  
  
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
    </>
  );
}

export default App;
