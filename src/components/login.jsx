import React from 'react';
import Styled from 'styled-components'
import { Form, Button, Divider } from "semantic-ui-react";


const StyledContent = Styled.section`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    height: 100vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    flex-direction:column;
    font-family: 'Montserrat', sans-serif !important;
    height:831px
`;
const StyledForm = Styled(Form)`
    top: 250px;
    padding: 50px;
    border-radius;15px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    background:white;
    text-align:center;
    color:#929292;
    width:20%;
    && > div > h3{font-size:2rem;font-weight:400 !important;}
`;

const StyledButton = Styled(Button)`
    background:#cf092c !important;
    color:white !important;
`;
const StyledWrapFooter = Styled.div`
    width:100%;
    @media (max-width:768px){display:none;}
`;
class Login extends React.Component{

    
    render(){
        return(
            <StyledContent>
            <StyledForm>
              <div>
                <h3>Iniciar sesión</h3>
                <p>Eres nuevo en este sitio</p>
                
              </div>
              <Divider horizontal>o</Divider>
              <p>inicia sesion con tu kiero account</p>
              <Form.Field>
                <input type="text" placeholder="Correo" />
              </Form.Field>
              <Form.Field>
                <input type="password" placeholder="Contraseña" />
                
              </Form.Field>
              <Form.Field>
                <StyledButton type="submit">Ingresar</StyledButton>
              </Form.Field>
            </StyledForm>
            <StyledWrapFooter>
            </StyledWrapFooter>
          </StyledContent>
        )
    }
}



export default Login
