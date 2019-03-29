const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const cc = require("./controllers/card_controller");

const app = express();
app.use(bodyParser.json());
app.use(cors())

// API endpoints 
const cardsBaseUrl = "/api/cards"
app.post(cardsBaseUrl, cc.create);
app.get(cardsBaseUrl, cc.read);
app.put (cardsBaseUrl, cc.update);
app.delete(`${cardsBaseUrl}/:id`, cc.delete);

const PORT = 4001; 
app.listen(PORT, () => console.log(`Ready to roll out on port ${PORT}`))
