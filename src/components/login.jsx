import React from 'react';
import Styled from 'styled-components'
import { Form, Button } from "semantic-ui-react";
import axios from 'axios'


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
    constructor(){
      super()
      this.submitHandler = this.submitHandler.bind(this);
      this.state={
        email:'',
        password:''
      }
    }
    

      submitHandler = async  e =>{
        e.preventDefault();
         await axios.post('http://localhost:3001/api/login', {
          email:this.state.email,
          password:this.state.password
        })
        .then(response => {
         let  message=response.data.users
         const token = message.token
         if (message.message === 'Your token'){
           window.localStorage.setItem('access_token', token);
           alert("authorized", token)
         } else{
           alert(message.message)
         }
        })
  
      }
    
    changeHandler = e => {
      this.setState({[e.target.name]: e.target.value});
  };
    render(){

      const { email, password } = this.state
        return(
            <StyledContent>
            <StyledForm onSubmit={this.submitHandler}>
              <div>
                <h3>Iniciar sesión</h3>
                
              </div>
              <p>inicia sesion con tu Store account</p>
              <Form.Field>
                <input type="text" name="email" value={email} placeholder="Correo" onChange={this.changeHandler}/>
              </Form.Field>
              <Form.Field>
                <input type="password" name="password" value={password} placeholder="Contraseña" onChange={this.changeHandler}/>
                
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
