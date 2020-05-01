import React from "react"
import {Wrapper,OuterSquare} from "./signInSignUp.style"

class SignInSignUp extends React.Component{
    constructor(){
        super();
        this.state = {};
    }
    render(){
        return(
            <Wrapper>
            <OuterSquare>
                <form>
                <span>E-mail</span><br/>
                    <input type="text" name="email"/><br/>
                <span>password:</span> <br/>
                    <input type="password" name="password"/><br/>
                <input type="submit" value="Sign In"></input>
                </form>
            </OuterSquare>
            <OuterSquare>
            <form>
                <span>UserName</span><br/>
                    <input type="text" name="uName"/><br/>
                <span>E-mail</span><br/>
                    <input type="text" name="email"/><br/>
                <span>password:</span> <br/>
                    <input type="password" name="password"/><br/>
                <span> Confirm password:</span> <br/>
                    <input type="password" name="cPassword"/><br/>
                <input type="submit" value="Sign In"/>
                </form>
            </OuterSquare>
                
            </Wrapper>
        )
    }
}

export default SignInSignUp;