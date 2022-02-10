var express = require("express")
const route = express.Router()
const router = express.Router();
const Moviescontroller = require('../controllers/movies')

route.get('/', (req, res) => {
    res.send('serever running');
})

route.get("/api/movies", Moviescontroller.getAll)
route.post("/api/insertmovies", Moviescontroller.insertmovie)
route.put("/api/updatemovies/:id", Moviescontroller.updatemovie)
route.get("/api/deletemovies/:id", Moviescontroller.deletemovie)

module.exports = route