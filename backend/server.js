const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Healthcare Chatbot Backend'));
app.listen(3000, () => console.log('Server running on port 3000'));
