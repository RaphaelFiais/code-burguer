const express = require("express");
const cors = require("cors")
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())


const commands = []

app.get('/users', (request,response) => {

    return response.status(200).json(commands)
})

app.post( '/users', (request, response) => {
    const { burger ,name } = request.body

    const command = {id: uuidv4() , burger , name}

    commands.push(command)

    return response.status(201).json()

})

app.delete( '/users/:id', (request, response) => {

    const { id } = request.params

    
    const index = commands.findIndex( command => id === command.id )

    if( index < 0){
        return response.status(404).json('User not found')
    }

    commands.splice(index , 1)
    

    return response.status(201).json()

}) 



app.listen(port, () => {
    console.log(`Server started on por ${port}`)
})