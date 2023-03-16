import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import SignUp from './pages/sign-up/SignUp';
import Tasks from './pages/tasks/Tasks';
import './styles/general.scss';

function App() {

  let loggedIn = false;

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
          <Route exact path='/signup' element={<SignUp/>} />

          <Route path='/tasks' element={loggedIn ? <Tasks/> : <Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
