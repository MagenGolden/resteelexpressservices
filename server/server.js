const express = require('express');
const app = express();
const port = process.env.PORT || 4001;
const cors = require('cors');
const contactSend = require('./emails/contact');
const quoteSend = require('./emails/quote');
const jobSend = require('./emails/job');
const creditSend = require('./emails/credit');

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Your Backend is Working' });
});

app.post('/contact', contactSend);
app.post('/quote', quoteSend);
app.post('/job', jobSend);
app.post('/credit', creditSend);

app.listen(port, (res, err) => {
  if (err) {
    console.log('Server failed');
  } else {
    console.log(`Server started on ${port}`);
  }
});
