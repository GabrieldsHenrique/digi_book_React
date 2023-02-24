import React, { useState, useEffect } from "react";


// Funcao para criar um delay na apresentação do botao
function DelayedElement({ element, delay = 20, transitionTime = 100 }) {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowElement(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [delay]);

  const transitionStyle = {
    transition: `opacity ${transitionTime}ms ease-in-out`,
    opacity: showElement ? 1 : 0
  };

  return <div style={transitionStyle}>{element}</div>;
}

export default DelayedElement;