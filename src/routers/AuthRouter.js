import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Journal from '../components/journal/Journal';


const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Redirect to="/" component={Journal} />
        </Switch>
      </div>
    </div>
  )
}

export default AuthRouter;
