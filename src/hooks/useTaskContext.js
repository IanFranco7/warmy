import {useContext} from 'react'

import { TaskContext } from '../context/TaskContext'

export function useTaskContext(){

    const context = useContext(TaskContext)

    if(!context){
        console.log('contexto não encontrado')
    }

    return context
}