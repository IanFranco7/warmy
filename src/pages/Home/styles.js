import styled from 'styled-components'

export const HomeContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;

`
export const Container = styled.div`
    padding: 2rem;
    background: #fafafa;
    border-radius: 5px;
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;

    @media (max-width:620px){
        width: 80%
    }
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
`

export const LiTask = styled.li`

h2{
    color: purple;
    &.fack {
    text-decoration: line-through;
  }
}

`