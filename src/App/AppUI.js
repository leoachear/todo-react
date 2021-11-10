import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI(){
    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {/* //Esto es lo que se llama Render Props 
                Acá va a llegar el value definido en el return del TodoContext */}
                {({
                    error,
                    loading,
                    searchedTodos,
                    toggleCompleteTodo,
                    deleteTodo,
                }) => (
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
                )}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };
