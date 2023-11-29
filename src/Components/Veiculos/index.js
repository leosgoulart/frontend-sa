import React from 'react';
import './VeiculosStyle.css';
import { useEffect, useState } from 'react';
import { api } from '../../api';


const Veiculos = (props) => {
  // Estado para armazenar a lista de produtos
  const [carro, setCarro] = useState();

 

    return (
      <button onClick={props.onClick} className='VeiculosBack'>
        {props.children}
      <div className='fotoCarro'>
        <img className='ImgModalCarros' src= {`http://localhost:8080/carros/${props.id}/photo`}/>
        <tr key={1}>
                                <th scope="row">{props.carro}</th>
                                <p className='ModeloVeiculoModal'>{props.modelo}</p>
                            </tr>
                            
      </div>

      </button>

      
    );
  };
export default Veiculos;
