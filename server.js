const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const Port = 9090;

const books = [
    { id : 1 ,
      name :"To kill a Mockingbird",
      pages:281,
      tittle :"Harper lee",
      price:12.99
    },
     {
        id : 2 ,
      name :"The Catcher in the Rye",
      pages:224,
      tittle :"J D singler",
      price:9.99
    },
    {
        id : 3,  
      name :"The Little Prince",
      pages:85,
      tittle :"Antoine de Saint-Exupery",
      price:7.79
    }
  ];

 const author = [
    {
      id : 1, 
      name :"petter",
      age :25,
      country :"united kingdom",
      books : ["fingersmith","The Night Watch"]
    },
    {
      id : 2, 
      name :"jhon",
      age :53,
      country :"united state of america",
      books : ["Norwegian Wood","Kafka on the Shore"]
    },
    {
      id : 3,
      name :"willson",
      age :34,
      country :"japam",
      books : ["Half of a yellow sun" ,"Americanh"]
    },
  ];


app.get('/',(req,res)=>{
   return res.status(200).json({message : 'ok'});
})

app.get('/getbooks',(req,res)=>{
   return res.status(200).json(books); 
})

app.get('/getusers',(req,res)=>{
    return res.status(200).json(author);
})

app.get('/getuserbyid/:id',(req,res)=>{
     const id = req.params.id;
     const userdata = author.find((user)=>user.id === parseInt(id));
    //  console.log('userdata  : '+userdata);
       return res.status(200).json(userdata);
})

app.get('/booksinfobyid/:id',(req,res)=>{
  const id = req.params.id;
  const bookdata = books.find((book)=>book.id === parseInt(id));
    return res.status(200).json(bookdata);
})


app.listen(Port,()=>{
    console.log("server is started on the port : 9090");
})