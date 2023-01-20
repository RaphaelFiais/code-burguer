import { useEffect, useState } from 'react'
import image from '../assets/burger2.svg'
import H1 from '../components/Title'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'
import { BoxImg } from '../components/BoxImg/style'
import { Container } from '../components/Container/style'
import {ListItem, BoxList, Trash } from './style'




function Request() {
    const [request, setRequest] = useState([])
    const history = useHistory()

    useEffect(() => {
        async function fatchRequest() {
            const { data: newRequest } = await axios.get('http://localhost:3000/users')
            setRequest(newRequest)
        }

        fatchRequest()
    }, [])

async function Delete(id){
    
        await axios.delete(`http://localhost:3000/users/${id}`)

        const newList = request.filter( item => item.id !== id)

        setRequest(newList)
}

    function goBack() {
        history.push("/")

    }

    
    return (
        <Container >
            <BoxImg>
                <img src={image} alt="" />
                <H1>Pedidos!</H1>
            </BoxImg>
            
                <BoxList>
                    <ul>
                        {

                            request.map(item => (
                                <ListItem key={item.id}>
                                    {item.name} - {item.burger}
                                <Trash onClick={() => (Delete(item.id))}/>
                                
                                </ListItem>
                            ))

                        }
                    </ul>

                    <Button onClick={goBack}>Voltar</Button>
                </BoxList>

                
            

        </Container>
    )
}

export default Request