//module hinzuf�gen
const express=require("express");
const router=express.Router();
const bodyParser=('body-parser');

const ressourceName = "routetoequipment";

// beispiel get funktion
router.get('/',function(req,res){
res.send("Route zum gew�hlten equipment")
});

//modul zu app hinzuf�gen
module.exports=router; 