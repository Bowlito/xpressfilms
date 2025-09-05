import express from 'express'
import inscriptionController from '../controllers/inscription.controller.js'

const routeur = express.Router()

routeur.get('/', inscriptionController.showPage)
routeur.post('/', inscriptionController.addUser)

export default routeur