import express from 'express';
import 'dotenv/config';
import films from "./routes/film.route.js"
// import connexions from "./routes/connexion.route.js"
// import favoris from "./routes/favoris.route.js"
// import inscriptions from "./routes/inscription.route.js"
import path from 'path'

import lastFilm from './repositories/films.repository.js'

const app = express();

app.use(express.static("public"))

app.use('/bootstrap', express.static(path.join(import.meta.dirname, 'node_modules/bootstrap/dist')));

app.set('view engine', 'ejs')
app.set('views', import.meta.dirname + '/templates')
app.set('view options', { delimiter: '?' })


app.use('/films', films)
app.use('/films', films)
app.use('/films', films)
app.use('/films', films)



app.get(['/', '/home', '/accueil'], async (req, res) => {

    const movies = await lastFilm.findLast()

    console.log("message : " + movies[0].image);


    res.render('index', { movies })
})

app.all('/*splat', (req, res) => {
    res
        .status(404)
        .end("Page introuvable")
})


const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
    console.log(`Adresse serveur : http://localhost:${PORT}`);

})