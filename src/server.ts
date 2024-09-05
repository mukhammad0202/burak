// console.log("Exucuted");

// import moment from "moment";

// const currentTime = moment().format("YYYY MM DD");
// console.log(currentTime);

// const person: string = "Paulo";
// const count: number = 100;

// Architectural pattern: MVC, Dependnecy Injection, MVP

// MVC => Model View Controller

// Design pattern: Middleware, Decotar

//import moment  from 'moment':  // const moment = required ('moment');

import dotenv from "dotenv";
dotenv.config();

// console.log("PORT:", process.env.PORT);

// console.log("MONGO_URL:", process.env.MONGO_URL);

// CLUSTER => DATABASE => COLLECTION => DOCUMENT

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
