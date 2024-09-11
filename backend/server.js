const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const userRoutes = require('./routes/users');
const nftRoutes = require('./routes/nfts');

app.use('/api/users', userRoutes);
app.use('/api/nfts', nftRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});