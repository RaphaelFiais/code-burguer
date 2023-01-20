import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const Img = styled.img`
    width: 342px ;

`

export const BoxList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;


`
export const ListItem = styled.li`

        background: rgba(255, 255, 255, 0.25);
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #fff;
        padding: 30px;
        margin-bottom: 15px;
`
export const Trash = styled(FaTrashAlt)`
    cursor: pointer;
    color: black;
    &:hover{
        transform: scale(1.07);
        transition: 300ms;
    }
`