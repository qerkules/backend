import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  brand: String,
  model: String,
  class: String,
  year: String,
  priceAzn: Number,
  priceUsd: Number,
  mainDetails: Object,
  number: String,
  images: Array,
});

const Car = mongoose.model("Car", CarSchema);
export default Car;
