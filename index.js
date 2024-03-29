import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import carRoutes from "./routes/car.js";
import Car from "./models/Car.js";
// import http from "http";

// const mercedes = new Car({
//   brand: "Mercedes",
//   model: "S Class",
//   class: "Premium Class",
//   year: "2015",
//   priceAzn: 200,
//   priceUsd: 130,
//   mainDetails: {
//     fuel: "Gas",
//     seats: "5 Seater",
//     doors: "4 Doors",
//     engine: "3L",
//     transmission: "Auto",
//     type: "Sedan",
//   },
//   number: "99VD090",
//   images: [""],
// });
// const sonata = new Car({
//   brand: "Hyundai",
//   model: "Sonata",
//   class: "Middle Class",
//   year: "2015",
//   priceAzn: 80,
//   priceUsd: 50,
//   mainDetails: {
//     fuel: "Gas",
//     seats: "5 Seater",
//     doors: "4 Doors",
//     engine: "2L",
//     transmission: "Auto",
//     type: "Sedan",
//   },
//   number: "77GB048",
//   images: [""],
// });
// const ix35 = new Car({
//   brand: "Hyundai",
//   model: "ix35",
//   class: "Suv Class",
//   year: "2015",
//   priceAzn: 80,
//   priceUsd: 50,
//   mainDetails: {
//     fuel: "Gas",
//     seats: "5 Seater",
//     doors: "4 Doors",
//     engine: "2.4L",
//     transmission: "Auto",
//     type: "Suv",
//   },
//   number: "99VN100",
//   images: [""],
// });

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app._router.use(cors());

app.use("/car", carRoutes);

// const httpServer = http.createServer(app);

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
