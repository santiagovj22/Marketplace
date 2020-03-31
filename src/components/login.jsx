import React from 'react';
import styled from 'styled-components'

class Login extends React.Component{

    
    render(){
        const Button = styled.button`
        background:transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 0 1em;
        padding: 0.25em 1em;
        `
        return(
            <div>
                <Button>ONE BUTTON</Button>
                <Button>OTHER BUTTON</Button>
                <Button>I know wef</Button>
            </div>
        )
    }
}

export default Login
