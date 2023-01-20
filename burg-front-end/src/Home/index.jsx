import { useRef, useState } from 'react'
import image from '../assets/burger1.svg'
import { Select, Label, BoxLabel, Input, Order } from './style'
import H1 from '../components/Title'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import { BoxImg } from '../components/BoxImg/style'
import { Container } from '../components/Container/style'

function App() {
  const burger = useRef()
  const name = useRef()
  const history = useHistory()
  const [contentOrder, setContentOrder] = useState()

  function InfoOrder() {    
    if (burger.current.value === 'Combo Easy') {
      setContentOrder('Soda 350ml, Burger1 , Potato ships')
    }
    if (burger.current.value === 'Combo Medium') {
      setContentOrder( 'Soda 350ml, Burger2 ,2x Potato ships')
    }
    if (burger.current.value === 'Combo Hard') {
      setContentOrder('Soda 500ml, Burger3 , 2x Potato ships , Milkchake')
    }
    if (burger.current.value === 'Selecione') {
      setContentOrder('')
    }
  }


  async function Send() {
    if(burger.current.value !== 'Selecione' &&  name.current.value !== ''){
    await axios.post('http://localhost:3000/users', {
      burger: burger.current.value,
      name: name.current.value
    })
  
    history.push('/pedidos')
  }
  else(alert('Escolha o pedido, Coloque seu nome'))
  }



  return (
    <Container >
      <BoxImg>
        <img src={image} alt="" />
        <H1>Faça seu pedido!</H1>
      </BoxImg>
      <BoxLabel>
        <Label>
          <p>Pedido</p>
          <Select onChange={InfoOrder} ref={burger}>
            <option>Selecione</option>
            <option>Combo Easy</option>
            <option>Combo Medium</option>
            <option>Combo Hard</option>
          </Select>
        </Label>
        <Order>
          <h3>{contentOrder}</h3>
        </Order>
        <Label>
          <p>Nome do cliente</p>
          <Input type="text" ref={name} placeholder='Digite o nome do cliente' />
        </Label>
        <Button onClick={Send} >Enviar</Button>
      </BoxLabel>
    </Container>
  )
}

export default App
