import React, { useState } from 'react';
import Botao from '../Botao';
import './HeaderStyle.css';
import Modal from '../Modal';
import ModalVeiculoCadastrar from '../ModalCadastro';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../Section';
 

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  let navigate = useNavigate()

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [modalOpenCadastrar, setModalOpenCadastrar] = useState(false);

  const openModalCadastrar = () => {
    setModalOpenCadastrar(true);
  };

  const closeModalCadastrar = () => {
    setModalOpenCadastrar(false);
  };

  const encerrarSessao =  () => {
      removeToken()
      navigate('/')
  }


  return (
    <div className='HeaderDiv'>
      <Botao onClick={openModal}>Estoque de Carros</Botao>
      <Botao onClick={openModalCadastrar}>Cadastrar Carros</Botao>
      <Botao onClick={openModal}>Histórico de Transação</Botao>
      <Botao onClick={openModal}>Sair</Botao>
      <Modal isOpen={modalOpen} onClose={closeModal} />
      <ModalVeiculoCadastrar isOpen={modalOpenCadastrar} onClose={closeModalCadastrar} />
    </div>
  );
};

export default Header;