import connection from "../config/db.config.js";

const findAll = async () => {
  const SELECT = "SELECT * FROM films";
  try {
    const resultat = await connection.query(SELECT);
    return resultat[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

const findLast = async () => {
  const SELECT = "SELECT * FROM films ORDER BY dateAjout DESC LIMIT 1";
  try {
    const resultat = await connection.query(SELECT);
    return resultat[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

console.log(findAll());

const findById = async (film) => {
  const SELECT = "SELECT * FROM films WHERE id_film=?";
  try {
    const resultat = await connection.query(SELECT, [film.id]);
    console.log(resultat[0]);

    return resultat[0][0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

const addFilm = async (film) => {
  const INSERT =
    "INSERT INTO films (titre, image, description, dateSortie, genre) VALUES (?,?,?,?,?)";
  try {
    const resultat = await connection.query(INSERT, [
      film.titre,
      film.image,
      film.description,
      film.dateSortie,
      film.genre,
    ]);
    film.id = resultat[0].insertId;
    console.log("FILM AJOUTE : ", resultat[0]);
    return resultat[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

const removeFilm = async (film) => {
  const DELETE = "DELETE FROM films WHERE id_film=?";
  try {
    const resultat = await connection.query(DELETE, [film.id]);
    console.log("Film supprimé : ", resultat[0]);
    return resultat;
  } catch (error) {
    console.log("Erreur lors de la suppression : ", error);

    return null;
  }
};

const updateFilm = async (film) => {
  console.log(film);
  
  const UPDATE = "UPDATE films SET titre=?, image=?, description=?, dateSortie=?, genre=? WHERE id_film=?";
  try {
      const resultat = await connection.query(UPDATE, [film.titre, film.image, film.description, film.dateSortie, film.genre, film.id_film])
      console.log("Film modifié : ", resultat[0]);
      return resultat[0];
  } catch (error) {
    console.log("Erreur lors de la modification : ", error);
    return null;
  }
}

export default { findAll, findLast, findById, addFilm, removeFilm, updateFilm };
