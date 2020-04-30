import React from 'react'
import Header from "./components/header/header"
import "./app.css"
import {} from "./pages/landing-page/landing.page.style"
import Delete from "./delete"

class App extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div>
                <Header/>
                <Delete/>
            </div>
        )
    }
}

export default App;