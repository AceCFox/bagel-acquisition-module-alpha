const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');;

// Route includes
const itemRouter = require ('./routes/item.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.use('/api/item', itemRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


module.exports = app;