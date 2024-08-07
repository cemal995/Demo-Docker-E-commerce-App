const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/db-test', async (req, res) => {
  try {
    const result = await client.query('SELECT NOW()');
    res.send(`Database connection successful: ${result.rows[0].now}`);
  } catch (err) {
    res.status(500).send(`Database connection error: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
