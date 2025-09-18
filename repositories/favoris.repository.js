import connection from "../config/db.config.js";

const findFavs = async (user) => {
    const SELECT = "SELECT * FROM favoris WHERE id_utilisateur=?"
    try {
        const resultat = await connection.query(SELECT, [user.id])
        console.log(resultat);
        return resultat[0]
        
    } catch (error) {
        console.log(error);
        return null
        
    }
}

export default { findFavs }