export const MAKE_COMPLETE = 'TODO ACTION MAKE COMPLETE';
export const ADD_TODO = 'TODO ACTION ADD TODO';
export const DELETE_TODO = 'TODO ACTION DELETE TODO';

export const addTodo = data => {
    return {
        type: ADD_TODO,
        payload: data,
    }
}

export const makeComplete = index => {
    return {
        type: MAKE_COMPLETE,
        payload: index,
    }
}

export const deleteTodo = index => {
    return {
        type: DELETE_TODO,
        payload: index,
    }
}