import React, { useState } from 'react';
import './Header.css'

const InputNomeSobrenome = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  // Função chamada quando o botão de envio é clicado
  const handleSubmit = () => {
    if (nome && sobrenome) {
      // Chama a função passada por props para enviar os dados
      onSubmit(nome, sobrenome);
    } else {
      window.alert('Por favor, preencha ambos os campos!');
    }
  };

  return (
    <div className='enter'>
      <input className='enter-input'
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input className='enter-input'
        type="text"
        placeholder="Digite seu sobrenome"
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
      />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default InputNomeSobrenome;
