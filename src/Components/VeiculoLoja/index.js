import React, { useState } from 'react';

import './VeiculosStyleLoja.css';
import FotoCarro from './FotosTest/subaru-impreza-2.5-wrx-sti-sedan-4x4-16v-turbo-intercooler-gasolina-4p-manual-wmimagem19100589928.jpg';



const VeiculosLoja = (props) => {
  const [modalAberto, setModalAberto] = useState(false);

  const handleClick = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div>
      <div className='VeiculoLojaTotal' onClick={handleClick}>
        <button className='botaoVeiculosLoja'>
          <div className='btnInfosLoja'>
          <p className='nomeVeiuculoHUD'>Subaru WRX</p>
          <p className='nomeVeiuculoHUD2'>Algumas informacoes do veiculo</p>
          </div>
        </button>
      </div>

      {modalAberto && (
        <div className='modalLojaVeiculo'>
          <div className='FundoInfoVeiculosLoja'>
          <p className='NomeVeiculoModal'>Subaru WRX</p>
          <p className='informacoesVeiculoModal' >Algumas informacoes do veiculo</p>

          </div>
          <div className='modalConteudoLoja'>
            <span className='fecharModal' onClick={fecharModal}>
              &times;
            </span>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default VeiculosLoja;
