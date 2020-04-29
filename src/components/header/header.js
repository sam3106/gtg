import React from 'react';
import {HeaderWrapper, SignUpButton, HomeLogo } from "./header.style"
class Header extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <HeaderWrapper>
                 <HomeLogo><a href="">GTG</a></HomeLogo>
                <SignUpButton> 
                    <a href="">Sign-up/Sign-in</a>
                </SignUpButton>
            </HeaderWrapper>
        )
    }
}

export default Header;