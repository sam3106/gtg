import React from 'react'
import "./app.css"
import {Switch, Route} from "react-router-dom"
import Header from "./components/header/header"
import LandingPage from "./pages/landing-page/landing.page"
import SignInSignUp from "./pages/signInSignUp/signInSignUp"




class App extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div>            
               <Switch >
                    <Route exact path="/">
                        <Header/>
                        <LandingPage />
                    </Route>
                    <Route path ='/sign-in-sign-up'>
                        <Header/>
                        <SignInSignUp />
                    </Route>
                </Switch>
                
            </div>
        )
    }
}

export default App;