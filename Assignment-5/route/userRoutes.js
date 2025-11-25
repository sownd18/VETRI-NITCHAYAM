const controller=require("../controller/userController")
const express=require("express");
const userRouter=express.Router();
const{getUser,createUser,updateUser,deleteUser}=controller;
const customMiddleware=require("../middleware/customMiddleware")

userRouter.get("/get-User",customMiddleware,getUser);
userRouter.post("/create-User",customMiddleware,createUser);
userRouter.put("/update-User/:id",customMiddleware,updateUser);
userRouter.delete("/delete-User/:id",customMiddleware,deleteUser);

module.exports=userRouter;