import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

// Restaurant
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin.get("/signup", restaurantController.getSignup).post(
  "/signup",

  restaurantController.processSignup
);
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

// Products
// routerAdmin.get("/product/all", restaurantController.verifyRestaurant);
// routerAdmin.post("/product/create", restaurantController.verifyRestaurant);
// routerAdmin.get("/product/ update/:id", restaurantController.verifyRestaurant);

// Users

export default routerAdmin;
