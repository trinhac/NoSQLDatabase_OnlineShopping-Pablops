const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./dbConfig'); // Import your configuration file
const app = express();
const addressRoutes = require('./routes/addressRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');
mongoose.connect(dbConfig.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});
app.use(express.json()) //In your app.js (or wherever you set up your middleware), make sure you have the following line before defining your routes:
const routes = [addressRoutes, sellerRoutes, customerRoutes, productRoutes]
routes.forEach((route) => app.use('/api',route));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})