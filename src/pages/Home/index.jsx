import {HomeContent, Container} from './styles'

import {FormTask } from '../../components/FormTask'
import { Todo } from '../../components/Todo'

export function Home () {

  return (
    <HomeContent>
        <Container>
            <FormTask/>
            <Todo/>
        </Container>
    </HomeContent>
  )
}

