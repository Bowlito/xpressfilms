import favorisRepository from "../repositories/favoris.repository.js";

const show = async (req, res, next) => {
    try {
        const user = req.session.user
        if (!user) {
            console.log("Pas d'utilisateur");
            
            return res.redirect("/connexion")
        }
        const userFav = await favorisRepository.findFavs(user)
        res.render("favoris", {
            favoris: userFav,
            erreurs: null
        })
    } catch (error) {
        console.log(error);
        res.redirect("/connexion")
        
    }
}

export default { show }