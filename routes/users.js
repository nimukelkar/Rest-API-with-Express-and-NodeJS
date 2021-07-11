import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router=express.Router();

let users=[  //We are changing the users array, so it should be let.
    

]


router.get('/',(req,res)=> {
  
    res.send(users);
    
});

router.post('/',(req,res)=> {
   const user=req.body;

   const userId=uuidv4();
   const userWithId={...user,id:userId}
  
    users.push(userWithId);

    res.send(`User with the name ${user.firstName} added to the database!`);
}); //Send data from front end to server.

router.get('/:id',(req,res)=> { //Get the value of id with req.params
    
    const {id}=req.params;

    const foundUser=users.find((user)=>user.id==id);
    res.send(foundUser);
});

router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    // id to delete=123
    //john 123
    //jane 321
    users=users.filter((user)=>user.id!==id) //Filter function works so that it removes the elements for which function returns false.

    res(`User with the id ${id} deleted from the database`);




});
router.patch(':/id',(req,res)=>{  //Change one or more properties from the user.
    const {id} = req.params; // We are receiving a request paramater which is the id
    const{firstName,lastName,age}=req.body; //Take all the things coming from request of body send from front end or client in this case postman
    const user=users.find((user)=>user.id==id); //That id specifies which user is to be updated with find method
    //Send something from postman.
    if(firstName){
        user.firstName=firstName; //Have the values to be changed with our own values.
    }
    if(lastName){
        user.lastName=lastName;
    }
    if(age){
        user.age=age;
    }
    res.send(`User with the id ${id} has been updated`);
})

export default router;