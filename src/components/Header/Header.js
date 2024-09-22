import React from 'react';
import Hello from '../Hello/Hello';
import './Header.css';

const Header = ({ nome, sobrenome }) => {
  return (
    <header className="header">
      <h1>Meus Pets</h1>
      <Hello nome={nome} sobrenome={sobrenome} />
    </header>
  );
};

export default Header;
