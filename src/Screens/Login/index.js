import React, { useState } from 'react';
import "./Login.css" ;
import "./funciona2.css" ;
import { api } from '../../api';
import { setSession } from '../../Section';
import { useNavigate } from 'react-router-dom';


function Login() {
  
    let navigate = useNavigate();

    const [cpf, setCpf] = useState ('')
    const [senha, setSenha] = useState ('')


    const login = async () => {
        const body = {
            login: cpf,
            password: senha

        }
        try {
            const {data,status} = await api.post("/login", body)
            setSession(data.token)
            console.log(data)
            navigate('/Home')
        } catch (error) {

            console.log(error)
        }
    }

    //==================================================================
    const [value, setValue] = useState('Seu Valor Inicial');
  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

    //=================================================================



    return (
        <body class="specific-screen">

        <div className='AbaLogin'>
            <div className='conteudoLg'>
            <label>CPF:</label>
            <input 
                    value={cpf}
                    onChange={(e) => 
                    setCpf(e.target.value)}
                    minlength="11" 
                    type="number" 
                    placeholder='CPF...'></input>

            <label>Senha:</label>
            <input type="password" 
                    value={senha}                            
                    onChange={(e) => 
                    setSenha(e.target.value)}
                    placeholder='Senha...'></input>

            </div>
            <button onClick={login} className='btnlogin'>Entrar</button>



//===========================================================================
            <div>
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      ) : (
        <div>
          <span>{value}</span>
          <button onClick={handleEditClick}>
            <img src="caminho-para-o-icone-do-lapis" alt="Editar" />
          </button>
        </div>
      )}
    </div>
//===========================================================================




        </div>      
        </body>
  
    );
  }
  
  export default Login;