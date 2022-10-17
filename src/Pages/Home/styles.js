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
export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-left: 25px;
  margin-bottom: 8px;

  letter-spacing: -0.408px;

  color: #EEEEEE;
`
export const Input = styled.input`
  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  border: none;
  outline: none;

  padding-left: 25px;
  margin-bottom: 40px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

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

  text-align: center;

  color: #FFFFFF;
`