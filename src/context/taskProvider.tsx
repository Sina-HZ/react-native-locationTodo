import React, { createContext, FunctionComponent,useReducer } from 'react';
import {Action ,State,Context,TaskProviderProps} from '../utils/types';

const tasks: State[] = [
    { name: 'Task Name', status: 'Done', description: 'Task description one' },
    { name: 'Task Name', status: 'Doing', description: 'Task description two' },
    { name: 'Task Name', status: 'Todo', description: 'Task description three' },
]

export const TaskStateContext = createContext<Context>({ state: tasks })


const taskReducer = (state: State[], action: Action): State[] => {
    switch (action.type) {
        case 'addTask': {
            const newState = [...state]
            return [...newState, action.payload]
        }
        case 'removeTask': {
            const mystate = [...state]
            mystate.splice(action.payload, 1);
            return mystate
        }
        case 'editTask': {
            const newState = [...state]
            const element = newState.find((el: State, id: number) => id === action.payload.id)
            element!.name = action.payload.name;
            element!.status = action.payload.status;
            element!.description = action.payload.description;
            element!.region = action.payload.region
            element!.coordinate = action.payload.coordinate
            return [...newState]
        }
        default: {
            return [...state];
        }
    }
}

const TaskProvider: FunctionComponent<TaskProviderProps> = ({ children }) => {

    const [state, dispatch] = useReducer(taskReducer, tasks)


    return (
        <TaskStateContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskStateContext.Provider>
    )
}

export default TaskProvider;