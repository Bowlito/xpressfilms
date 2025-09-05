import filmRepository from "../repositories/films.repository.js"


console.log(filmRepository.findAll);

const show = async (req, res, next) => {
    const films = await filmRepository.findAll()
    if (films) {
        res.render('films', {
            "films": films,
            "erreurs": null
        })
    } else {
        res.render('films', {
            personnes: [],
            erreurs: ["Problème de récupération de données"]
        })

    }
}

export default { show }