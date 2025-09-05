import connection from '../config/db.config.js'

//import { id } from 'yup-locales'


const save = async (user) => {
    const INSERT = "INSERT INTO utilisateurs values (null, ?, ?, ?, ?, ?)"
    try {
        const resultat = await connection.query(INSERT, [user.nom, user.prenom, user.email, user.password, "user"])
        user.id = resultat[0].insertId
        console.log("UTILISATEUR : " , user);
        
        return user
    } catch (error) {
        console.log(error);
        return null
    }
}


export default { save }