const express =  require('express');
const app = express();
const hostname = "http://127.0.0.1";
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.listen(port, ()=>{
    console.log(`server is running on ${hostname}:${port}`)
})