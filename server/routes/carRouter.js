const express = require("express")
const {
  getCars,
  getCar,
  addCar,
  updateCar,
  deleteCar
} = require("../controllers/carController")

const jsonParser = express.json()

const carRouter = express.Router()

carRouter.get("/", getCars)
carRouter.get("/:id", getCar)
carRouter.post("/", jsonParser, addCar)
carRouter.put("/:id", jsonParser, updateCar)
carRouter.delete("/:id", deleteCar)

module.exports = carRouter
