import express from "express";
import homecontroller from "../controllers/homeController";
import userController from "../controllers/userController";
import auth from '../ middleware/auth'



let router = express.Router();

let initWebRoutes = (app) => {
    //Method GET


    //Method POST
    router.post('/api/login',auth, userController.handleLogin);
    router.post('/api/register', userController.handleRegister); 
    

    //Method PUT


   
    //Method DELETE

    return app.use("/", router)
}


module.exports = initWebRoutes
