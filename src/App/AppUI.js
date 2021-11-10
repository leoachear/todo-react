import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI(){
    /* Acá va a llegar el value definido en el return del TodoContext.
    *  const value = React.useContext(TodoContext); 
    *  lo reemplazo abajo por el objeto que recibe cada propiedad.
    */
    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Hubo un error...</p>}
                {loading && <p>Estamos cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO.</p>}

                {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => {toggleCompleteTodo(todo.text)}}
                    onDelete={() => {deleteTodo(todo.text)}}
                />
                ))}
            </TodoList>
            
            {/* //La doble negación es para afirmar que no sólo exista, sino que sea true */}
            
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    );
}

export { AppUI };
