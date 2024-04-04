import Car from "../models/Car.js";

export const getCars = async (req, res) => {
  try {
    const car = await Car.find();

    const filteredCars = car.sort((c, b) => {
      if (b.priceUsd > c.priceUsd) {
        return -1;
      } else if (b.priceUsd < c.priceUsd) {
        return 1;
      }
      return 0;
    });
    res.status(200).json(filteredCars);
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
    let car;
    if (req.params.class === "all") {
      car = await Car.find();
    } else {
      car = await Car.find({ class: req.params.class });
    }
    const filteredCars = car.sort((c, b) => {
      if (b.priceUsd > c.priceUsd) {
        return -1;
      } else if (b.priceUsd < c.priceUsd) {
        return 1;
      }
      return 0;
    });
    res.status(200).json(filteredCars);
    return car;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
