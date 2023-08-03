const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const connection = require('./connector');

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Pagination endpoint
app.get('/api/orders', async (req, res) => {
  let offset = parseInt(req.query.offset) || 0;
  let limit = parseInt(req.query.limit) || 10;

  if (isNaN(offset) || isNaN(limit) || offset < 0 || limit <= 0) {
    offset = 0;
    limit = 10;
  }

  try {
    const query = `SELECT * FROM orders LIMIT ${limit} OFFSET ${offset}`;
    const results = await new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });

    res.status(200).json(results);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Zomato Orders API');
  });

app.listen(port, () => console.log(`App listening on port ${port}!`));
