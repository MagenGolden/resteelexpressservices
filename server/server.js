require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4001;
const cors = require('cors');
const contactSend = require('./contact');
const quoteSend = require('./quote');
const jobSend = require('./job');
const creditSend = require('./credit');
const projectSend = require('./project');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Your Backend is Working' });
});

app.post('/contact', contactSend);
app.post('/job', jobSend);
app.post('/credit', creditSend);
app.post('/project', projectSend);
app.post('/quote', quoteSend);


app.listen(port, (res, err) => {
  if (err) {
    console.log('Server failed');
  } else {
    console.log(`Server started on ${port}`);
  }
});
