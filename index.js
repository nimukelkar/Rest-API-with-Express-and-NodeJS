//Handles users in a database
import express from 'express';
import bodyParser from 'body-parser';//Take in incoming post bodies

import usersRoutes from './routes/users.js';
const app=express(); //Initialize express application
const PORT=5000;// Specify port for backend.
app.use(bodyParser.json());// Use json data in application.Common form of sending and receiving data from a rest api.
app.use('/users',usersRoutes);
app.get('/',(req,res)=>{ //Get a request from /
    

    res.send('Hello from Homepage')
});//Create a route.

app.listen(PORT, ()=> console.log(`Server running on port :http://localhost:${PORT}`));