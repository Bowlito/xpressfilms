import express from 'express';
import 'dotenv/config';
import films from "./routes/film.route.js"

const app = express();

app.use(express.static("public"))

app.set('view engine', 'ejs')
app.set('views', import.meta.dirname + '/templates')
app.set('view options', { delimiter: '?' })

app.use('/films', films)

app.all('/*splat', (req, res) => {
    res
        .status(404)
        .end("Page introuvable")
})

app.get(['/', '/home', '/accueil'], (req, res) => {
    res.render('index'),
    {

    }
})

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
    console.log(`Adresse serveur : http://localhost:${PORT}`);

})