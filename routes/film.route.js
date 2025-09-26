import express from 'express'
//import filmsController from '../controllers/films.controller.js'
import reactFilmsController from '../react.controllers/films.react.controller.js'

const routeur = express.Router()

//routeur.get('/', filmsController.show)
routeur.get('/', reactFilmsController.show)
routeur.get('/:id', reactFilmsController.showById)
routeur.post('/update/:id', reactFilmsController.update)
// routeur.get('/remove/:id', filmsController.remove)
// routeur.get('/update/:id', filmsController.showById)
// routeur.post('/update/:id', filmsController.update)
// routeur.post('/', filmsController.add)


export default routeur