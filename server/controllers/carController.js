const Car = require("../models/carModel");

const getCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

const getCar = async (req, res) => {
  const { id } = req.params;
  const car = await Car.findById(id);
  res.json(car);
};

const addCar = async (req, res) => {
  const { photo, name, model, price } = req.body;
  const car = await Car.create({ photo, name, model, price });
  res.json(car);
};

const updateCar = async (req, res) => {
  const { id } = req.params;
  const { photo, name, model, price }= req.body;

  const car = await Car.findByIdAndUpdate(
    id,
    {
      photo,
      name,
      model,
      price,
    },
    {
      new: true,
    }
  );

  res.json(car);
};

const deleteCar = async (req, res) => {
  const { id } = req.params;
  const car = await Car.findByIdAndDelete(id);
  res.json(car);
};

module.exports = {
  getCars,
  getCar,
  addCar,
  updateCar,
  deleteCar,
};
