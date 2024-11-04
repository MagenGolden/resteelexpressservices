import express from 'express';
const app = express();
const port = process.env.PORT || 4001;
import cors from 'cors';
import nodemailer from 'nodemailer';
import contactSend from './emails/contact.js';


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'Your Backend is Working' });
});

app.listen(port, (res, err) => {
  if (err) {
    console.log('Server failed');
  } else {
  console.log(`Server started on port ${port}`);
  }
});

app.post('/contact', contactSend);
