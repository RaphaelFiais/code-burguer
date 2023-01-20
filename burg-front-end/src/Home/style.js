import styled from "styled-components";



export const BoxLabel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

`
export const Order = styled.div`
   
    
    h3{
        font-style: normal;
        font-weight: 500;   
        font-size: 18px;
        line-height: 22px;
        color: #EEEEEE;
        
    }
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    

    p{
        margin: 0 0 5px 15px ;
        font-style: normal;
        font-weight: 700;   
        font-size: 18px;
        line-height: 22px;
        color: #EEEEEE;
        
    }

`
export const Select = styled.select`

    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    padding-left: 15px;
    outline: none;
    option{
        background-color: #999999;
        font-style: normal;
        font-weight: 700;   
        font-size: 18px;
        line-height: 22px;
        
        &:hover{
            
        }

    }

`
export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    padding-left: 15px;
    border: none;
    outline: none;

`

