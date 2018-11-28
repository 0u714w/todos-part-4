export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const ACTIVE = "ACTIVE";

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

export const markComplete = (id) => {
    return {
        type: MARK_COMPLETE,
        id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED,
    }
}