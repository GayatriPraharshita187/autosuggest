const express =require("express");
const app=express();
const port=process.env.PORT || 6700;
//to tell app,where static files- html/css/js are at
app.use(express.static("frontend"));

app.listen(port,function(){
    console.log("App running in http://localhost:" +port);
});