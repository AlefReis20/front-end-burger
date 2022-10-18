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