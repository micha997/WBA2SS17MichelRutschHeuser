const faye = require('faye');

var client = new faye.Client('http://localhost:8000/faye');

var newFavEquip = {
	  "Operation": 'PUT',
      "equipments":[
         {
            "equipID":10035445
         },
         {
            "equipID":10293001
         },
         {
            "equipID":10409032
         }
      ]
   }

client.publish('/favequipment/0', newFavEquip );