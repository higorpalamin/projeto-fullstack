import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()   //instanciando prisma
const app = express()   //instanciando express
app.use(express.json()) //definindo que será utilizado json
app.use(cors())


//buscar todos os usuarios
app.get('/usuarios', async (req, res) => {

    const todosUsuarios = await prisma.usuario.findMany()

    res.json(todosUsuarios)
})

//criar usuario
app.post('/usuarios', async (req, res) => {

    const novoUsuario = await prisma.usuario.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    res.status(201).json(novoUsuario)
})

//alterar usuario pelo id
app.put('/usuarios/:id', async (req, res) => {

    const usuarioAtualizado = await prisma.usuario.update({
        where: {    //qual usuario será alterado
            id: req.params.id   //recebe id pelo query params  
        },
        data: {     //dados que serão alterados
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    res.status(200).json(usuarioAtualizado)
})

//deletar usuario
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.usuario.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: "Usuário deletado"})
})



app.listen(3000)
