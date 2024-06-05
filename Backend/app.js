const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./dbConfig'); // Import your configuration file
const app = express();
const addressRoutes = require('./routes/addressRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');
const Seller = require('./models/Seller');
mongoose.connect(dbConfig.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
// app.options('/', function(req, res) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.end();
// });




const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

const cors = require("cors")
app.use(express.json()) //In your app.js (or wherever you set up your middleware), make sure you have the following line before defining your routes:
app.use(express.urlencoded({ extended: true }))
app.get("/", cors(), (req, res) => {

})


app.post("/", async (req, res) => {
  const { seller_username, seller_password } = req.body

  try {
    const checkUsername = await Seller.findOne({ seller_username: seller_username })
    const checkPassword = await Seller.findOne({ seller_password: seller_password })
    if (checkUsername && checkPassword) {
      res.json("Login successfully")
    }
    else {
      res.json("Login failed")
    }

  }
  catch (e) {
    res.json("Fail to login")
  }

})

app.post("/signup", async (req, res) => {
  const { seller_username, seller_password } = req.body

  const data = {
    seller_username: seller_username,
    seller_password: seller_password
  }

  try {
    const check = await Seller.findOne({ seller_username: seller_username })

    if (check) {
      res.json("Username have already been taken. Please choose another ones")
    }
    else {
      res.json("Create seller successfully")
      await Seller.insertMany([data])
    }

  }
  catch (e) {
    res.json("Fail to create seller")
  }

})

const routes = [addressRoutes, sellerRoutes, customerRoutes, productRoutes]
routes.forEach((route) => app.use('/api', route));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})