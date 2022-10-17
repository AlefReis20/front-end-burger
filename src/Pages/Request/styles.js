import styled from "styled-components";

export const Container = styled.div`
  background: #0A0A10;
  background-size: cover;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  height: 100%;
  min-height: 100vh;
`
export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  margin: 76px 0;
`
export const Image = styled.img`
  margin-top: 15px;

  width: 342px;
  height: 354px;
`
export const DivDad = styled.li`
  width: 342px;
  height: 101px;
  padding: 15px 25px;
  margin: 18px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  button {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-content: flex-end;
  }
`
export const DivSon = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const PResquest = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  margin-bottom: 8px;

  color: #FFFFFF;
`
export const PName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
 
  color: #FFFFFF;
`
export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin-bottom: 51px;

    background: #D93856;
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
export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  margin: 36px 0 50px;

  text-align: center;

  color: #FFFFFF;
`