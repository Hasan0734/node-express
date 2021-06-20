const express = require('express')
const app = express();
const rootCall = (req, res) => res.send("Thank you very much");
    

app.get('/', (req, res) => {
    const fruit = {
        name: "Apple",
        price: 36
    }
    res.send(fruit)
})
app.get('/frits/banana', (req, res) =>{
    res.send({fruitt: 'banana', quantity: 1000, price: 10000})
})
const users = ["Asad", "Monir", "Rubby", "Jahid"]
app.get('/users/:id', (req, res) => {
   const userId=  req.params;
   const name = users[userId];
   res.send(name)
})
app.listen(3000, () => console.log("listening to port 3000"));