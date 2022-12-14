import { Redirect, Route, Switch } from "react-router-dom";
// import "./App.css";
import LogIn from "./components/authentication/LogIn";
import WelcomePage from "./components/authentication/WelcomePage";
import ForgotPassword from "./components/authentication/ForgotPassword";
import EditProfile from "./components/authentication/EditProfile";
import { useSelector } from 'react-redux';


function App() {
  const isAuth = useSelector(state=>state.auth.isAuthenticated);
  return (
    <div className="App">
      <h1>Expense Tracker App</h1>
      {!isAuth && <Redirect to={'/login'}/>}
      {isAuth && <Redirect to={'/welcome'}/>}
      <Switch>
        <Route path="/welcome" excact>
          <WelcomePage />
        </Route>
        <Route path="/login" exact>
          <LogIn />
        </Route>
        <Route path={"/forgotpassword"}>
          <ForgotPassword />
        </Route>
        <Route path={'/editprofile'}>
          <EditProfile/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;