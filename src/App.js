import HomePage from './components/pages/Homepage';
import AuthContext from './components/store/auth-context'
import { useContext } from 'react'
import React ,{ useState  } from 'react'
import './style.css';
import Welcome from './components/pages/Welcome';
import {Routes ,Route , Navigate} from 'react-router-dom'
import ForgotPassword from './components/pages/ForgotPassword';

function App() {
  const [loginsucess ,setloginsucess ] = useState(false)


  const authctx = useContext(AuthContext)
 
  return (
    <>
    <h1>Expense Tracker </h1>
     { authctx.isLoggedIn && <Navigate to={'*'}/>}
     { !authctx.isLoggedIn && <Navigate to={'/homepage'}/>}
      <Routes>
        <Route exact path='*' element={<Welcome/>}/>
        <Route exact path='/homepage' element={<HomePage/>}/>
        <Route path='/forgot' element={<ForgotPassword/>}/>
      </Routes>
    </>
  );
}

export default App;
