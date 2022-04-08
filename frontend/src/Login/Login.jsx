import React from 'react';
import './Login.css';


function Login() {
  return (

    <div className="Login">
         <title className='Title'>Bienvenido</title>
        <h1 className='Description'>Lo mejor de la sasón, está en el sabor</h1>
        <div className="Cajas">
        <form class="Form">
            <div className="col-auto">
            <label for="user" class="visually-hidden">User</label>
            <input type="text" class="form-control form-control-lgl" id="" placeholder="Usuario"/>
            </div>
            <hr />
            <div className="col-auto">
            <label for="password" class="visually-hidden">Password</label>
            <input type="password" class="form-control" id="" placeholder="Contraseña"/>
            </div>
            <hr />
            <div className="col-auto">
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
            </div>  
        </form>
        </div>
    </div>
    
  );
}

export default Login;
