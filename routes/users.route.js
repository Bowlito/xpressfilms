import express from 'express'
import usersController from '../controllers/users.controller.js'

const routeur = express.Router()


routeur.get('/', usersController.showAll)

export default routeur