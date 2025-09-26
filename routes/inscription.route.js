import express from 'express'
import inscriptionController from '../controllers/inscription.controller.js'
import usersReactController from '../react.controllers/users.react.controller.js'

const routeur = express.Router()

routeur.get('/', inscriptionController.showPage)
//routeur.post('/', inscriptionController.addUser)
routeur.post('/', usersReactController.addUser)

export default routeur