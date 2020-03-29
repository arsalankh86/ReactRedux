export const ADD_TODO =  'ADD_TODO';

let addTodoNext = 0;

export function addTodo(text)
{
    return {

        type: ADD_TODO,
        id: addTodoNext++,
        text
    };
}

