import { useTaskContext } from '../../hooks/useTaskContext'

import {AiOutlineCheck} from 'react-icons/ai'
import {RiDeleteBinFill} from 'react-icons/ri'

import {TodoContent, ListTask, LiTask} from './styles'

export function Todo(){

    const {tasks, completeTask, removeTask} = useTaskContext()
    
    return(
        <TodoContent>
            <ListTask>
                {tasks && tasks.map((task, index) => (
                    <LiTask key={index}>
                        <h3 className={task.finished ? 'finished' : ''}>{task.content}</h3>
                            <div>
                                <button className='complete' onClick={() => completeTask(task.id)}>
                                    <AiOutlineCheck/>
                                </button>
                                <button className='delete' onClick={ () => removeTask(task.id)}><RiDeleteBinFill/>
                                </button>
                            </div>
                    </LiTask>
                ))}
            </ListTask>
        </TodoContent>
    )
}

