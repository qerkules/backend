import Car from "../models/Car.js";

export const getCars = async (req, res) => {
  try {
    const car = await Car.find();
    res.status(200).json(car);
    return car;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCarById = async (req, res) => {
  try {
    const car = await Car.findOne({ number: req.params.number });
    res.status(200).json(car);
    return car;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCarByClass = async (req, res) => {
  try {
    const car = await Car.find({ class: req.params.class });
    console.log(car);
    res.status(200).json(car);
    return car;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
