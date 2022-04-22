import React from 'react';
import './Caja.css';



function Caja() {
  return (

    <div className="Caja">
    <div id="recibo"></div>
    <div id= "botones"> 
    <hr />
    <button type="submit" class="btn btn-info">Platos</button>
    <hr />
    <button type="submit" class="btn btn-info">Bebidas</button>
    <hr />
    <button type="submit" class="btn btn-info">Postres</button>
    
    </div>
    <div id="productos"></div>
   
    



    </div>
  );
}

export default Caja;