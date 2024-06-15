import express from "express";
import bodyParser from "body-parser";
const app = express();
const post = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async(req, res)=>{
    res.render("index.ejs",{
        name:"kartik"
    })
})
app.post("/hello", (req, res)=>{
   const fname = req.body["fName"];
   const lname= req.body["lName"];
   res.render("test.ejs",{
    fname:fname,
    mname:lname

   })
})
app.listen(post,()=>{
    console.log("hello you are ready");
});