import filmRepository from "../repositories/films.repository.js";

console.log(filmRepository.findAll);

const show = async (req, res, next) => {
  const films = await filmRepository.findAll();
  if (films) {
    res.render("films", {
      films: films,
      erreurs: null,
    });
  } else {
    res.render("films", {
      films: [],
      erreurs: ["Problème de récupération de données"],
    });
  }
};

const add = async (req, res, next) => {
  try {
    await filmRepository.addFilm(req.body);
    res.redirect("/films");
  } catch (error) {
    console.log(error);
    res.redirect("/home");
  }
};

const remove = async (req, res, next) => {
  try {
    await filmRepository.removeFilm({
      id: req.params.id,
    });
    res.redirect("/films");
  } catch (error) {
    console.log(error);
    res.redirect("/films");
  }
};

const showById = async (req, res, next) => {
  try {
    const film = await filmRepository.findById({
      id: req.params.id,
    });
    res.render("updateFilm", {
      titre: film.titre,
      image: film.image,
      description: film.description,
      dateSortie: film.dateSortie,
      genre: film.genre,
    });
    console.log(film.image);
  } catch (error) {
    console.log(error);
    res.redirect("/films");
  }
};

export default { show, add, remove, showById };
