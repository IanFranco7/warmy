import styled from 'styled-components'

export const ManageContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    h2{
        text-align: center;
        font-size: 1.7rem;
        margin-bottom: 1rem;
    }
`

export const Form = styled.form`
    display: flex;
    gap: .5rem;
    margin-bottom: 1rem;

    input{
        padding: .4rem .7rem;
        outline: none;
        background-color: #cfcfcf;
        box-shadow: 1px 1px 1px #00000061;
        border: none;
        border-radius: 5px;
    }

    button{
        padding: .4rem .8rem;
        box-shadow: 1px 1px 1px #00000061;
        background: #801E61;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
        transition: .3s ease-in-out;
    }

    button:hover{
        background: #4C1039;
    }
    
    @media (max-width:620px){
        flex-direction: column;
    }
`

export const Task_Info = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: .5rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
    

    p{
        font-size: 1.2rem;
    }

    span{
        font-size: 1rem;
        color: red;

        &.green{
            color: green;
        }
    }

    @media (max-width:620px){
        p{
            text-align: center;
        }
    }
`