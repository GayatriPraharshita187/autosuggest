const express =require("express");
const app=express();
const port=process.env.PORT || 6700;
//to tell app,where static files- html/css/js(files that don't need server processing) are at
app.use(express.static("frontend")); //says that "All website files are inside frontend folder".

app.listen(port,function(){
    console.log("App running in http://localhost:" +port);
});