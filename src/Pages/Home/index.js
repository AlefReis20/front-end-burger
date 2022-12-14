import { React, useState, useRef } from "react"

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import Logo from '../../assets/logo.svg'

import H1 from '../../components/Title'
import Button from '../../components/Button'
import ContainerItens from '../../components/ContainerItens'

import { Container, Image, InputLabel, Input } from './styles'

function App() {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  const inputOrder = useRef()
  const inputName = useRef()

  async function addNewOrder() {
    if (inputOrder.current.value === '' && inputName.current.value === '') {
      alert('Coloque o pedido e seu nome')
    } else {
      const { data: newOrder } = await axios.post('https://backend-burguer23.herokuapp.com/orders', {
        order: inputOrder.current.value,
        name: inputName.current.value,
      })
      setOrders([...orders, newOrder])

      navigate('/pedidos')
    }
  }
  return (
    <Container>
      <Image alt="logo" src={Logo} />

      <H1>Faça seu pedido!</H1>

      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder='Ex: 1 Coca-Cola, 1 X-salada'></Input>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome'></Input>
      </ContainerItens>

      <Button onClick={addNewOrder}>Novo Pedido</Button>

    </Container>
  )
}

export default App