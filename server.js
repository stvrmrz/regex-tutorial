const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/socialNetwork', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');const express = require('express');
  const mongoose = require('mongoose');
  const routes = require('./routes');
  
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  app.use(express.json());
  app.use('/api', routes);
  
  mongoose.connect('mongodb://localhost:27017/socialNetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
