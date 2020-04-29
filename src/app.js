import React from 'react'
import Header from "./components/header/header"
import "./app.css"

class App extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div>
                <Header/>
                <h1>App connected</h1>
            </div>
        )
    }
}

export default App;