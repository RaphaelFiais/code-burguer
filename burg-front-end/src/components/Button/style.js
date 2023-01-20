import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;
    border-radius:  10px;
    margin-bottom: 20px;
    &:hover{
        transform: scale(1.05);
        transition: 300ms;
    }
    &:active{
        opacity: 0.8;
    }


`