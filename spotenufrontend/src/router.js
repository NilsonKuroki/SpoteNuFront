import React from "react"
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {LoginPage} from './pages/loginPage'
import {SignupUserListenerPage} from './pages/signupUserListenerPage'
import {SignupAdminPage}from './pages/singupAdminPage'
import {ApprovedBandPage} from './pages/approvedBandPage'
import {HomePage} from './pages/homePage'
import {SignupBandPage} from './pages/singupBandPage'

export const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/signup-listener">
                    <SignupUserListenerPage/>
                </Route>
                <Route exact path="/signup-admin">
                    <SignupAdminPage/>
                </Route>
                <Route exact path="/approved-bands">
                    <ApprovedBandPage/>
                </Route>
                <Route exact path="/home">
                    <HomePage/>
                </Route>
                <Route exact path="/signup-band">
                    <SignupBandPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}