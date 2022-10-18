import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin-bottom: 51px;

    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.25);' : '#D93856'};
    border: none;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;

    color: #FFFFFF;

    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    &:active {
        opacity: .5;
    }
`