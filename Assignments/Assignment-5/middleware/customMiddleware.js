const customMiddleware =(req,res,next)=>{
    let verify=true;
    if(!verify){
        return res.send("User Verification  not found");
    }
    next();
};
module.exports=customMiddleware;