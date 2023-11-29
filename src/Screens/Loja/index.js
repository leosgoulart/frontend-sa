import React, { useState } from 'react';
import "./Loja.css";
import "./funcionaaa.css";
import VeiculosLoja from '../../Components/VeiculoLoja';

const Loja = () => {
  const [isOpen, setIsOpen] = useState(false);


  function refreshPage() {
    window.location.reload(false);
  }



  return (

    <body className='backGLoja'>

    <div className='LojaGeral'>
      <div className='TopLoja'>
        <h1 className='tituloLoja' onClick={refreshPage}>AutoStock</h1>
      </div>

      <div>
        <p className='CarrosDisponiveis'>Carros disponíveis</p>



      </div>

      <div className='AreaVeiculosVenda'>
        <VeiculosLoja></VeiculosLoja> 
        <VeiculosLoja></VeiculosLoja> 
        <VeiculosLoja></VeiculosLoja> 
       
      </div>




    </div>

    <footer className='footersiteloja'>



    </footer>


    </body>
  );
};

export default Loja;
