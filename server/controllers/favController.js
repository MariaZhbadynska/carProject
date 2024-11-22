const Fav = require("../models/favModel");

const getFavs = async (req, res) => {
  const fav = await Fav.find();
  res.json(fav);
};

const pushFav = async (req, res) => {
  const { photo, name, model, price } = req.body;
  const fav = await Fav.create({ photo, name, model, price });
  res.json(fav);
};

const deleteFav = async (req, res) => {
  const { id } = req.params;
  const fav = await Fav.findByIdAndDelete(id);
  res.json(fav);
};

module.exports = {
 getFavs,
 pushFav,
 deleteFav
};
