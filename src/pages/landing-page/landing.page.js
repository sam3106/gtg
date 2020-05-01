import React from "react"
import {Wrapper} from "./landing.page.style"

class LandingPage extends React.Component{
    constructor(){
        super();
    } 
    render(){
        return(
                <Wrapper>
                    <div>
                        <h1>Keep track of your road to greatness</h1>
                    </div>
                </Wrapper>
                        )
    }
}
export default LandingPage;