import React from 'react';
import './CrearUsuario.css';

function CrearUsuario() {
    return (
      <div className="CrearUsuario">
       <button type="submit" className="btn btn-secondary">Volver a ususarios</button>
       <div className="caja">
       <form className="Form"> 
       <div className="title">Nuevo Usuario</div>
       <div id="Espacio"></div>
          <div className="forma">
          <label for="user" className="visually-hidden">Nombre</label>
          <input type="text" className="form-control form-control-lgl" id="" placeholder="Nombre"/>
          </div>
          <div id="Espacio"></div>
          <div className="forma">
          <label for="user" className="visually-hidden">Email</label>
          <input type="text" className="form-control form-control-lgl" id="" placeholder="Correo"/>
          </div>
          <div id="Espacio"></div>
          <div className="forma">
          <label for="user" className="visually-hidden">Contraseña</label>
          <input type="text" className="form-control form-control-lgl" id="" placeholder="Contraseña"/>
          </div>
          <div id="Espacio"></div>
          <div className="forma">
          <button type="submit" className="btn btn-success">Guardar</button>
          </div>
          </form>
          </div>
      </div>
    );
}

export default CrearUsuario;