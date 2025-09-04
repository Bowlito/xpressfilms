import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', import.meta.dirname + '/templates')
app.set('view options', { delimiter: '?' })

app.all('/*splat', (req, res) => {
    res
        .status(404)
        .end("Page introuvable")
})

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
    console.log(`Adresse serveur : http://localhost:${PORT}`);

})