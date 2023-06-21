import { useState} from 'react'

import {useTaskContext} from '../../hooks/useTaskContext'

import { ManageContent, Task_Info, Form} from './styles'

export function FormTask(){

    const {handleSubmit, taskFinished, taskNoFinished} = useTaskContext()
    const [task, setTask] = useState('')

  return (
    <ManageContent>
        <h2>Criar tarefa</h2>
         <Form onSubmit={(e) => handleSubmit(e, task, setTask)}>
                <input type="text" placeholder='Insira uma tarefa...'  onChange={(e) => setTask(e.target.value)} value={task}/>
            <button>Adicionar</button>
        </Form>
        <Task_Info>
          <p>Tarefas pendentes: <span>{taskNoFinished}</span></p>
          <p>Tarefas concluidas: <span className='green'>{taskFinished}</span></p>
        </Task_Info>

    </ManageContent>
  )
}