import React from 'react';
import './Inicio.css';



function Inicio() {
  return (

    <div className="Inicio">
        <link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet"></link>
    <main>
    <div className='Container_Box'>

        <div className="box">
        <i class="lni lni-consulting"></i>
            <h5>USUARIOS</h5>
            <h4>USUARIOS</h4>
        </div>
        <div className="box">
        <i class="lni lni-dinner"></i>
            <h5>PLATOS</h5>
            <h4>PLATOS</h4>
        </div>
        <div className="box">
        <i class="lni lni-revenue"></i>
            <h5>CAJA</h5>
            <h4>CAJA</h4>
        </div>
        <div className="box">
        <i class="lni lni-invest-monitor"></i>
            <h5>VENTAS</h5>
            <h4>VENTAS</h4>
        </div>

    </div>
    </main>
    </div>
    
  );
}

export default Inicio;