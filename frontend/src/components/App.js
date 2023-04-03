import React from "react";
import {Route, Redirect, Link, Switch, useHistory} from "react-router-dom";
import Cards from "./Cards";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import userapi from "../utils/UserApi";
import InfoTooltip from "./InfoTooltip";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [type, setType] = React.useState(null);
  const [email, setEmail] = React.useState("");

  const history = useHistory();

function checkToken(token) {
  userapi.checkToken(token)
  .then((res) => {
    setEmail(res.email);
    setIsLoggedIn(true);
  }).catch(console.error);
}
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token)checkToken(token);
 }, []);
 
  function handleLogin(data) {
    userapi.login(data).then((res) => {
      checkToken(res.token);
      localStorage.setItem('token', res.token);
    }).catch(console.error);
  }


  function handleRegister(data) {
    userapi.register(data).then(() => {
      setType('success');
      history.push("/sign-in");
    }).catch(()=> setType('error'));
  }

  function handleClose() {
 setType(null);
  }
  function handleLeave() {
    localStorage.removeItem('token');
    setEmail('');
    setIsLoggedIn(false);
  }

  return (<>
    <Redirect to={
      isLoggedIn ? '/' : '/sign-in'
    }/>
    <ProtectedRoute path="/"
      loggedIn={isLoggedIn}
      email={email}
      onLeave={handleLeave}
      component={Cards}/>
      <Switch>
    <Route path="/sign-in">
      <Header>
        <Link to="/sign-up">Регистрация</Link>
      </Header>
      <Login onSubmit={handleLogin}/>
    </Route>
    <Route path="/sign-up">
      <Header>
        <Link to="/sign-in">Войти</Link>
      </Header>
      <Register onSubmit={handleRegister}/>
      <InfoTooltip type={type} onClose={handleClose}/>
    </Route>
    </Switch>
  </>)
}
export default App;