import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import "./ModalStyle.css";
import Veiculos from '../Veiculos';
import ModalVeiculo from '../ModalVeiculo';
import axios from 'axios';
import { api } from '../../api';

const Modal = ({ isOpen, onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [modalOpenVeiculo, setModalOpenVeiculo] = useState(false);
  const [carros, setCarros] = useState([])
  const [data, setData] = useState({})
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const openModalVeiculo = (carro) => {
    setData(carro)
    setModalOpenVeiculo(true);
  };

  const closeModalVeiculo = () => {
    setModalOpenVeiculo(false);
  };
      // Efeito para carregar os produtos ao montar o componente
      useEffect(() => {
        loadcarros();
    }, [carros]);


// Função para carregar os produtos do servidor
const loadcarros = async () => {
  try {
     const result = await api.get("/carros").then((res)=>{
      
       setCarros(res.data);
       
     });
  } catch (error) {
     if (error.response) {
        // A solicitação foi feita e o servidor respondeu com um status de erro
        console.error("Erro de resposta do servidor:", error.response.data);
     } else if (error.request) {
        // A solicitação foi feita, mas não houve resposta do servidor
        console.error("Sem resposta do servidor:", error.request);
     } else {
        // Algo aconteceu ao configurar a solicitação que acionou um erro
        console.error("Erro durante a configuração da solicitação:", error.message);
     }
     console.error("Erro de requisição:", error.config);
  }
};
    if (!isOpen) return null;

  




  return (
    <><Draggable handle=".modal-title">
      <div className={`modal ${isMinimized ? 'minimized' : ''}`}>
        <div className='modal-title'>
          <div className='modal-content'></div>
          <svg className="seta" onClick={toggleMinimize} xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
            <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928934C14.6805 0.538409 14.0474 0.538409 13.6569 0.928934L8 6.58579L2.34315 0.928934C1.95262 0.538409 1.31946 0.538409 0.928933 0.928934C0.538409 1.31946 0.538409 1.95262 0.928933 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="#E1DFDB" />
          </svg>
          <span className='close' onClick={onClose}>X</span>
        </div>

        <div className={`ConteudoModal ${isMinimized ? 'minimized' : ''}`}>
          <div className='tituloModal'>
            <p>Estoque de Carros</p>
          </div>

          <div className='buscarPosicao'>
            <input className='buscarInput' placeholder='Buscar...'></input>
            <input type="checkbox"></input>
            <label className='labelCheckBox'>Mostrar apenas não reservados</label>
          </div>

          <div className='areaVeiculos'>
            {carros?
            carros.map((carro)=>
            {
              return <Veiculos placa={carro.placa} chassi={carro.chassi} modelo={carro.modelo} cor={carro.cor} combustivel={carro.combustivel} observacoes={carro.observacoes} id={carro.id}  onClick={()=> openModalVeiculo({carro})} />
            }):
            null}
          
          </div>
        </div>
      </div>
    </Draggable><Draggable>
        <div>
          <ModalVeiculo isOpen={modalOpenVeiculo} onClose={closeModalVeiculo} data={data} ></ModalVeiculo>
        </div>
      </Draggable></>
  );
};





export default Modal;
