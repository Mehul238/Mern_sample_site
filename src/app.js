const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
const port=3000;

const dir=path.join(__dirname,"../public");
const temppath=path.join(__dirname,"../Templets/views");
const partialspath=path.join(__dirname,"../Templets/partials")

app.set("view engine", "hbs");
app.set("views",temppath);
app.use(express.static(dir));
hbs.registerPartials(partialspath);

app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errormsg:"oops! page not found"
    });
})

app.listen(port,()=>{
    console.log("are you excited")
})