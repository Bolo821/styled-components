import {
    MAKE_COMPLETE,
    ADD_TODO,
    DELETE_TODO,
} from '../actions';

const initState = {
    todos: [ 'Todo1', 'Todo2', 'Todo3' ],
    completed: [],
}

export default (state = initState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, ...[ action.payload ]],
            }
        }
        case MAKE_COMPLETE: {
            let temp = state.todos.filter((ele, index) => {
                return index !==  action.payload;
            });
            return {
                ...state,
                completed: [ ...state.completed, [ state.todos[action.payload] ]],
                todos: temp,
            }
        }
        case DELETE_TODO: {
            let temp = state.todos.filter((ele, index) => {
                return index !== action.payload;
            });
            return {
                ...state,
                todos: temp,
            }
        }
        default:
            return state;
    }
}