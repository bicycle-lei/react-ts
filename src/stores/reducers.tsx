/*
 * @Description:
 * @Author: wangdelei
 * @Date: 2021-07-20 10:40:13
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-07-20 10:56:28
 */
import { combineReducers } from 'redux';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters,
} from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action: any) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action: any) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                },
            ];
        case TOGGLE_TODO:
            return state.map((todo: any, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed,
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos,
});

export default todoApp;
