import React, { useState, useEffect } from 'react';

function Manuscrito({ children }) {
  const [texto, setTexto] = useState('');
  const [intervalIds, setIntervalIds] = useState([]);

  useEffect(() => {
    const textoArray = children.split('');
    setTexto('');

    // Limpa todos os intervalos de tempo antigos
    intervalIds.forEach(clearTimeout);
    setIntervalIds([]);

    // Inicia a animação de digitação
    const newIntervalIds = [];
    for (let i = 0; i < textoArray.length; i++) {
      const id = setTimeout(() => setTexto(prevTexto => prevTexto + textoArray[i]), 150 * i);
      newIntervalIds.push(id);
    }
    setIntervalIds(newIntervalIds);

    // Limpa todos os intervalos de tempo quando o componente for desmontado ou atualizado
    return () => {
      newIntervalIds.forEach(clearTimeout);
    };
  }, [children]);

  return <p className='digitacao'>{texto}</p>;
}

export default Manuscrito;