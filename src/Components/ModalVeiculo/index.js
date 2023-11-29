import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

import "./ModalStyleVeiculo.css";
import "./funciona.css";
import "./peloamordedeus.css";
import { api } from '../../api';
import { getToken } from '../../Section';

const ModalVeiculo = ({ isOpen, onClose, data }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isEditing, setEditing] = useState(false);

    useEffect(() => {
      setEditing(false);
  }, [isOpen]);

    
    const carro = data && data.carro; // Acesse 'carro' de 'data'
   
    const chassi = carro && carro.chassi;
    const modelo = carro && carro.modelo;
    let placa = carro && carro.placa;
    let cor = carro && carro.cor;
    let combustivel = carro && carro.combustivel;
    let observacoes = carro && carro.observacoes;

    const [placaNova, setPlacaNova] = useState("")
    const [corNova, setCorNova] = useState("")
    const [combustivelNovo, setCombustivelNovo] = useState("");
    const [observacoesNovo, setObservacoesNovo] = useState("");

    const handleEditClick = () => {
      if (isEditing) {
        salvarEdicoesNoServidor();
      }
      setEditing(!isEditing);
    };

    const salvarEdicoesNoServidor = async () => {
      try {
        // Use a API para atualizar as informações no servidor
        await api.put('/carros', {
          id: carro.id,
          modelo: modelo,
          chassi: chassi,
          placa: placaNova,
          cor: corNova,
          combustivel: combustivelNovo,
          observacoes: observacoesNovo,
        }, {
          headers: {
            "Authorization": `Bearer ${getToken()}`
          },
        });
        placa =  placaNova
        cor = corNova
        combustivel =  combustivelNovo
        observacoes =   observacoesNovo
      } catch (error) {
        console.error("Erro ao salvar edições:", error);
      }
    };


    const trocaPlaca = (e) => {
      setPlacaNova(e.target.value);
    };

    const trocaCor = (e) => {
      setCorNova(e.target.value);
    }

    const trocaCombustivel = (e) => {
      setCombustivelNovo(e.target.value);
    };
    
    const trocaObservacoes = (e) => {
      setObservacoesNovo(e.target.value);
    };
    

    const toggleMinimize = () => {
      setIsMinimized(!isMinimized);
      const conteudoModal = document.querySelector('.ConteudoModalVeiculo');
      if (isMinimized) {
        conteudoModal.classList.remove('minimized');
      } else {
        conteudoModal.classList.add('minimized');
      }
    };

  
    const deleteCarro = async (id) => {
      try {
        await api.delete(`/carros/${id}`,{ 
        headers: {
          "Authorization": `Bearer ${getToken()}`
        }})
        onClose()
      } catch (error) {
        console.log(error)
      }
      
      
    }
      
    if (!isOpen) return null;

    
      


 
  return (
    <Draggable handle=".modal-titleVeiculo">
    <div className={`modalVeiculo ${isMinimized ? 'minimized' : ''}`}>

      <div className='modal-titleVeiculo'>
        <svg className="seta" onClick={toggleMinimize} xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
          <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928934C14.6805 0.538409 14.0474 0.538409 13.6569 0.928934L8 6.58579L2.34315 0.928934C1.95262 0.538409 1.31946 0.538409 0.928933 0.928934C0.538409 1.31946 0.538409 1.95262 0.928933 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="#E1DFDB" />
        </svg>
        <span className='closeVeiculo' onClick={onClose}>X</span>
      </div>

      <div className={`ConteudoModalVeiculo ${isMinimized ? 'minimized' : ''}`}>

        <div className='tituloModal'>  
        <div className='infoVeiculo'> 
      
        <img className='ImgVeiculoModal' src={`http://localhost:8080/carros/${carro.id}/photo`}/>
      
          


          


        

        <input className='inputCustom' type='text' value={'MODELO: ' + modelo} readOnly />
        <input className='inputCustom' type='text' value={'CHASSI: ' + chassi} readOnly />
    <input
        className='inputCustom'
       
        onChange={trocaPlaca}
        type='text'
        value={isEditing ? placaNova : 'PLACA: ' + placa}
        readOnly={!isEditing}
       
/>

    <input
        className='inputCustom'
        
        onChange={trocaCor}
        type='text'
        value={isEditing ? corNova : 'COR: ' + cor}
        readOnly={!isEditing}
       
    />

    <input
        className='inputCustom'
        
        onChange={trocaCombustivel}
        type='text'
        value={isEditing ? combustivelNovo : 'COMBUSTIVEL: ' + combustivel}
        readOnly={!isEditing}
       
    />

    <input
        className='inputCustom'
      
        onChange={trocaObservacoes}
        type='text'
        value={isEditing ? observacoesNovo : 'OBSERVAÇÕES: ' + observacoes}
        readOnly={!isEditing}
        
    />
        
       
      


        </div>
        </div>
        <button className='btnVeiculo'>Vendido</button>
        <button onClick={handleEditClick} className='btnVeiculo'>
        {isEditing ? 'Salvar Edições' : 'Editar Informações'}
        </button>
        <button  onClick={()=>deleteCarro(carro.id)} className='btnVeiculo'>Excluir</button>
        
      

        </div>
      </div>
    
      </Draggable>
  );
};

export default ModalVeiculo;
