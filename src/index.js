const app=require("./app");
const port=5000 || process.env.PORT

app.listen(port,()=>{
       console.log(`server listening on port ${port}...`);
    })