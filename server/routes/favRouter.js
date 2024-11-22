const express = require("express")
const {
  getFavs,
  pushFav,
  deleteFav
} = require("../controllers/favController")

const jsonParser = express.json()

const favRouter = express.Router()

favRouter.get("/", getFavs)
favRouter.post("/", jsonParser, pushFav)
favRouter.delete("/:id", deleteFav)

module.exports = favRouter
