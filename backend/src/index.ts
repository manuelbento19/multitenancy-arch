import express from 'express';
const PORT = 3000;

const app = express();

app.use(express.json())

app.get("/",(request,response)=>{
    response.send({
        message: "Welcome"
    })
})

app.listen(PORT,"127.0.0.1",()=>{
    console.log(`Server running on port ${PORT}`)
})