import React, {useState} from 'react';
import axios from 'axios';
import './Login.css';


function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);// caracteristicas que solo puenden ser alteradas por este componente
  //muestra los mensajes de error, respuesta del back
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  // método de activacion al oprimir iniciar sesión
  const handleSubmit = (event) => {
    // Recarga de pagina
    console.log("Boton");
    let { email, password } = document.forms[0];
    console.log(password.value);
    console.log(email.value);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      }
     axios({
      method: 'post',
      url:"http://localhost:3001/login",
      data:{
        email: email.value,
        password: password.value
      },
      headers:headers
     }
    ).then((response)=> {
      console.log(response.data);
      event.preventDefault();
    })

   // event.preventDefault();
  };


  return (

    <div className="Login">
        <title className='Title'>Bienvenido</title>
        <h1 className='Description'>Lo mejor de la sasón, está en el sabor</h1>
        <div className="Cajas">
        <form className="Form" onSubmit={handleSubmit}>
            <div className="col-auto">
            <label htmlFor="user" className="visually-hidden">User</label>
            <input type="text" className="form-control form-control-lgl" name="email" placeholder="Usuario"/>
            </div>
            <hr />
            <div className="col-auto">
            <label htmlFor="password" className="visually-hidden">Password</label>
            <input type="password" className="form-control" name="password" placeholder="Contraseña"/>
            </div>
            <hr />
            <div className="col-auto">
            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </div>  
        </form>
        </div>
    </div>
    
  );
}

export default Login;
