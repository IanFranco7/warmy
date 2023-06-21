import styled from 'styled-components'

export const TodoContent = styled.div`
  width: 100%;
`

export const ListTask = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`

export const LiTask = styled.li`
  display:  flex;
  justify-content: space-between;
  border-bottom: 1px solid #a0a0a0;
  border-radius: 5px;
  padding: .5rem;
  max-width: 100%;
  flex-wrap: wrap;

  h3{
      color: purple;
      font-size: 1.3rem;
      margin-bottom: .7rem;
      &.finished {
      text-decoration: line-through;
      
    }
  }

  button{
    margin-right: 1rem;
    padding: .2rem .5rem;
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 3px #00000061;
    cursor: pointer;

    svg{
      color: #fff;
      font-size: 1rem;
    }

    &.complete{
      background: #249D24;
      transition: .3s ease-in-out;
    }

    &.complete:hover{
      background: #276227;
    }

    &.delete{
      background: #DA0505;
      transition: .3s ease-in-out;
    }

    &.delete:hover{
      background: #6A1717;
    }
  }

  

`