import connection from '../config/db.config.js'

const connect = async (id) => {
    const SELECT = `SELECT * FROM utilisateurs WHERE id=${id}`
    
}