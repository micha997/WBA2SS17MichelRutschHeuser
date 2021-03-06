const express = require('express');

var app = express();

//Modul mit den Arrays der Ressourcen
global.data = require('./ressourcen/data');

//Settings festlegen
const settings = {
	port: process.env.PORT || 3773
};

//modul fuer Bewertungen
const bewertung = require('./ressourcen/bewertung');
app.use("/bewertung",bewertung);

//modul fuer das favequipment
const favequipment = require('./ressourcen/favequipment');
app.use("/favequipment",favequipment);

//modul fuer die favroute
const favroute = require('./ressourcen/favroute');
app.use("/favroute", favroute);

//modul fuer serviceEntry
const serviceEntry = require('./ressourcen/serviceEntry');
app.use("/", serviceEntry);

//Server starten
app.listen(settings.port, function () {
   console.log("REST-Sever laeuft auf Port " + settings.port);
});