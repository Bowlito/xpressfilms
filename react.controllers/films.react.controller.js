import filmRepository from "../repositories/films.repository.js";

const show = async (req, res, next) => {
    const films = await filmRepository.findAll();
    if (films) {
        return res
            .status(200)
            .json(films)
    } else {
        return res
            .sendStatus(404)
    }
};

// const add = async (req, res, next) => {
//   try {
//     await filmRepository.addFilm(req.body);
//     res.redirect("/films");
//   } catch (error) {
//     console.log(error);
//     res.redirect("/home");
//   }
// };

// const remove = async (req, res, next) => {
//   try {
//     await filmRepository.removeFilm({
//       id: req.params.id,
//     });
//     res.redirect("/films");
//   } catch (error) {
//     console.log(error);
//     res.redirect("/films");
//   }
// };

const showById = async (req, res, next) => {
    try {
        const id = req.params.id
        const film = await filmRepository.findById(id);

        return res
            .status(200)
            .json(film)



    } catch (error) {
        console.log(error);
        res.redirect("/films");
    }
};

const update = async (req, res, next) => {
    console.log("REQ BODY ICI : ", req.body);

    try {
        const film = await filmRepository.updateFilm(req.body)
        console.log(film);
        res
            .status(202)
            .json(film)

    } catch (error) {
        console.log(error);
        res
            .sendStatus(400)
    }
}

export default { show, showById, update };
// export default { show, add, remove, showById, update };