import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;

    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.25);' : '#D93856'}; 

    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .5;
    }
`