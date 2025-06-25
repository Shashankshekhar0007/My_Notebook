const express = require('express');
const router = express.Router();
const User= require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middlewares/fetchuser');

const JWT_SECRET="shashankauthenticates";

// ROUTE 1: Create a User using POST "/api/auth/createuser".

router.post('/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be at least 8 characters').isLength({ min: 8 }),
],
  async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array().map(err => err.msg) });
  }
 try {
  // Check if a user with the given email already exists
    let user=await User.findOne({ email: req.body.email });
    if(user){
      return res.status(400).json({ error: 'User with this email already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    // Create a new user
     user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    // Create a JWT token
    const data = {
      user: {
        id: user.id
      }
    };
    const authToken = jwt.sign(data, JWT_SECRET);
    // Send the token in the response 
    res.json({ authToken });
    // res.status(201).json(user);
  }catch (err) {
    // if (err.code === 11000) {
    //   return res.status(400).json({ error: 'Email already exists' });
    // }
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
})

// ROUTE 2: Authenticate a User using POST "/api/auth/login". No login required

router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array().map(err => err.msg) });
    }
    const { email, password } = req.body;
    try {
      // Check if the user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
      // Compare the password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
      // Create a JWT token
      const data = {
        user: {
          id: user.id
        }
      };
      // Sign the token with the secret key
      const authToken = jwt.sign(data, JWT_SECRET);
      // Send the token in the response
      res.json({ authToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    }
  });

// ROUTE 3: Get logged in User details using POST "/api/auth/getuser". Login required
router.post('/getuser',fetchuser, async (req, res) => {
        try{
           userId=req.user.id;
           const user=await User.findById(userId).select("-password")
           res.send(user);
        }catch (err) {
          console.error(err.message);
          res.status(500).send('Internal Server Error');
        }
})
module.exports = router;