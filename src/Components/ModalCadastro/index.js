import React, { useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { api } from '../../api';
import "./ModalStyleCadastrar.css";
import { getToken } from '../../Section';
import Modal from '../Modal';


const ModalVeiculoCadastrar = ({ isOpen, onClose, handleAddCarro  }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    // const [selectedImage, setSelectedImage] = useState(null); 
    // const fileInputRef = useRef(null);


    
  

    // Estados para armazenar os dados do produto
    const [chassi, setChassi] = useState('');
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');
    const [cor, setCor] = useState('');
    const [combustivel, setcombustivel] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [fileStorage, setFileStorage] = useState({});

    

    

    // // Função chamada quando uma imagem é carregada
    // const handleImageUpload = (imageData) => {
    //     setFileStorage(imageData);
    //     console.log('Imagem recebida:', imageData);
    // };

    // Função chamada ao enviar o formulário
    const onSubmit = async () => {
      const formData = new FormData();
      const imagefile = document.querySelector('#file');
  
      if (imagefile && imagefile.files.length > 0) {
        formData.append("file", imagefile.files[0]);
      } else {
        console.error("Nenhum arquivo selecionado");
        // Aqui você pode adicionar uma lógica para lidar com o fato de nenhum arquivo ter sido selecionado
        return;
      }
  
      // formData.append("chassi", chassi);
      // formData.append("placa", placa);
      // formData.append("modelo", modelo);
      // formData.append("cor", cor);
      // formData.append("combustivel", combustivel);
      // formData.append("observacoes", observacoes);
  
      try {
        const requestData = {
          chassi, placa, modelo, cor, combustivel, observacoes
        }
        const { data, status } = await api.post("/carros", requestData, {
          headers: {
            "Authorization": `Bearer ${getToken()}`
          }
        });
  
        console.log(data);

        const image  = await api.post(`/carros/${data.id}/photo`, formData, {
          headers: {
            "Authorization": `Bearer ${getToken()}`
          }
        });

        console.log(image);
        // Adicione lógica adicional conforme necessário após a submissão bem-sucedida
      } catch (error) {
        console.error(error);
        // Adicione lógica para lidar com erros durante a submissão
      }
    };
  

    const toggleMinimize = () => {
      setIsMinimized(!isMinimized);
      const conteudoModal = document.querySelector('.ConteudoModalCadastrar');
      if (isMinimized) {
        conteudoModal.classList.remove('minimized');
      } else {
        conteudoModal.classList.add('minimized');
      }
      
      
      
      
    };
    // const handleImageChange = (e) => {
    //   const file = e.target.files[0];
    //   setSelectedImage(URL.createObjectURL(file)); // Obtém a URL da imagem selecionada
    // };
    
    
    if (!isOpen) return null;
    
  return (
    <Draggable handle=".modal-titleCadastrar">
    <div className={`modalCadastrar ${isMinimized ? 'minimized' : ''}`}>

      <div className='modal-titleCadastrar'>
        <svg className="seta" onClick={toggleMinimize} xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
          <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928934C14.6805 0.538409 14.0474 0.538409 13.6569 0.928934L8 6.58579L2.34315 0.928934C1.95262 0.538409 1.31946 0.538409 0.928933 0.928934C0.538409 1.31946 0.538409 1.95262 0.928933 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="#E1DFDB" />
        </svg>
        <span className='closeCadastrar' onClick={onClose}>X</span>
      </div>

      <div className={`ConteudoModalCadastrar ${isMinimized ? 'minimized' : ''}`}>
        <div className='tituloModal'>
          <p>Cadastrar Carros</p>
        </div>

      <div className='AreaCadastro'>
        
      <p className='nomeInput'>MODELO:</p>
      <input
                                type='text'
                                className='inputCad'
                                placeholder='MODELO'
                                name='modelo'
                                value={modelo}
                                onChange={(e) => setModelo(e.target.value)}
                            />
 
      
      <p className='nomeInput'>CHASSI:</p>
       <input
                                type='text'
                                className='inputCad'
                                placeholder='CHASSI'
                                name='chassi'
                                value={chassi}
                                onChange={(e) => setChassi(e.target.value)}
                            />
      <p className='nomeInput'>PLACA:</p>
      <input
                                type='text'
                                className='inputCad'
                                placeholder='PLACA'
                                name='placa'
                                value={placa}
                                onChange={(e) => setPlaca(e.target.value)}
                            />

      <p className='nomeInput'>COMBUSTIVEL:</p>
      <input
                                type='text'
                                className='inputCad'
                                placeholder='COMBUSTIVEL'
                                name='combustivel'
                                value={combustivel}
                                onChange={(e) => setcombustivel(e.target.value)}
                            />

      <p className='nomeInput'>COR:</p>
      <input
                                type='text'
                                className='inputCad'
                                placeholder='COR'
                                name='cor'
                                value={cor}
                                onChange={(e) => setCor(e.target.value)}
                            />
      
      <p className='nomeInput'>OBSERVAÇÕES:</p>
      <input
                                type='text'
                                className='inputCad'
                                placeholder='OBSERVAÇÕES'
                                name='observacoes'
                                value={observacoes}
                                onChange={(e) => setObservacoes(e.target.value)}
                            />

                            <p> </p>

      {/* <p className='nomeInput'>Cambio:</p>
      <input className='inputCad' placeholder='Cambio do veículo...'></input>

      <p className='nomeInput' >Valor:</p>
      <input className='inputCad' placeholder='Valor do veículo...'></input>

      <p className='nomeInput'>Valor FIP:</p>
      <input className='inputCad' placeholder='Valor do FIP veículo...'></input> */}

      {/* <p className='nomeInput'>Imagem do Veículo:</p> */}
      <input type="file" id="file" name="file"/>
      
        
        
      </div>


   
      <button onClick={onSubmit} className='CadastrarBtn'>Cadastrar</button>

      

      </div>
    </div>
  </Draggable>
  );
};

export default ModalVeiculoCadastrar;