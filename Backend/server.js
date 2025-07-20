
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const b1 = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();
const User = require('./models/User');

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors({
   origin: process.env.cors_origin,
   credentials: true,
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.Mongo_url, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => {
   console.log("Connected to mongodb");
}).catch((err) => {
   console.error("Connection error:", err);
})





console.log("hii");
app.listen(port, () => {
   console.log(`Listening on port ${port}`)
})



app.post('/api/register', async (req, res) => {
   console.log("body", req.body);
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(500).json({ errors: errors.array() });
   }

   try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
         return res.status(400).json({ message: 'All fields are required' });
      }

      console.log("body", req.body);
      
      let user = await User.findOne({ email });
      if (user) {
         return res.status(409).json({ message: "User already exist" })
      }
      const salt = await bcrypt.genSalt(6);
      const spass = await bcrypt.hash(password, salt);

      const newuser = new User({
         name,
         email,
         password: spass
      });
      await newuser.save();
      res.status(201).send({ message: "success" });


   }
   catch (error) {
      console.error('Signup error:', error);
      //  res.status(500).send({message:'Server error'});
   }
})



app.post('/api/login', async (req, res) => {
   try {
      const { email, password } = req.body;
      
      const user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ message: 'Invalid Email' });
      }
      const loguser = await bcrypt.compare(password, user.password);
      if (!loguser) {
         return res.status(400).json({ message: 'Invalid password' });
      }

      const token = jwt.sign({
         userId: user._id,
         email: user.email

      }, process.env.JWT_SECRET, {
         expiresIn: '1h'
      });

      res.json({ token, user: { email: user.email } });
   }

   catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ message: 'Server error' });
   }
})

function authToken(req, res, next) {
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];

   if (!token) {
      return res.status(401).json({ message: 'Authorization denied' });
   }

   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
   } catch (error) {
      return res.status(401).json({ message: 'Expired Token' })
   }
}



app.get("/api/fetch_details", async (req, res) => {
   try {
      const alluser = await User.find({});
      res.status(200).json(alluser )
   } catch (err) {
      console.log(err)
   }
})














