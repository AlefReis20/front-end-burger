import { React, useState, useEffect } from "react"

import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import Bag from '../../assets/bag.svg'
import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title'
import Button from '../../components/Button'

import { Container, Image, DivDad, PName, PResquest, DivSon } from './styles'

function Orders() {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get('https://backend-burguer23.herokuapp.com/orders')
      setOrders(newOrders)
    }
    fetchOrders()
  }, [])

  async function deleteOrder(orderId) {
    await axios.delete(`https://backend-burguer23.herokuapp.com/orders/${orderId}`)
    const newOrders = orders.filter(order => order.id !== orderId)
    setOrders(newOrders)
  }

  function goBackPage() {
    navigate('/')
  }

  return (
    <Container>
      <Image alt='sacola-de-pedidos' src={Bag} />

      <H1>Pedidos!</H1>
      <ul>
        {orders.map((order) => (
          <DivDad key={order.id}>
            <DivSon>
              <PResquest>{order.order}</PResquest>
              <PName>{order.name}</PName>
            </DivSon>
            <button onClick={() => deleteOrder(order.id)}>
              <img alt='lata-de-lixo' src={Trash} />
            </button>
          </DivDad>
        ))}
      </ul>
      <Button isBack={true} onClick={goBackPage}>
        Voltar
      </Button>
    </Container>
  )
}
export default Orders