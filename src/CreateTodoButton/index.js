import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    // Las funciones set del estado, nos permiten enviarles el valor directamente, o una funcion en la cual recibimos el estado previo a la actualizacion.
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <button 
      className="CreateTodoButton" 
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
