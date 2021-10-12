import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  //const { toal, completed } = props //en vez de ahcer esto se puede poner directo en los parámetros

  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };
