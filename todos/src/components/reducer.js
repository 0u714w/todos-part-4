import {ADD_TODO, MARK_COMPLETE, DELETE_TODO, CLEAR_COMPLETED, ACTIVE} from '../components/actions';
import todos from '../todos.json';
import { combineReducers } from 'redux';

const initialState = { todos };

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
        return {
            ...state,
            todos: [
                ...state.todos, {
                    userdID: 1,
                    id: (state.todos.length + 1),
                    title: action.text,
                    completed: false
                }
            ]
        }
        case MARK_COMPLETE:
        return {
            ...state,
            todos: [
                ...state.todos.map[(todo => todo.id === action.id) ? {
                    ...todos,
                    completed: !todos.completed
                } : todos ]
            ]
        }
        case DELETE_TODO:
        return {
            ...state,
            todos: [
                ...state.todos.filter(item => item.completed === false)
            ]
        }
        case ACTIVE:
        return {
            ...state,
            todos: [
                ...state.todos.filter(item => item.completed === false)
            ]
        }
        default:
        return state;
    }

}

