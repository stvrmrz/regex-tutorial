const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Initialize the Express app
const app = express();

// Define the server port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the API routes
app.use('/api', routes);

// Connect to MongoDB
const connectionString = 'mongodb+srv://<stevearamirez@gmail.com>:<D@venbono182189>@cluster09659.cbusifo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster09659'; // Replace this with your actual connection string

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
