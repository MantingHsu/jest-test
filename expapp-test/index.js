const express = require('express');
const axios = require('axios');
const app = express();

const todos = [
  { id: 1, title: "Learn JavaScript" },
  { id: 2, title: "Build a Node App" },
  { id: 3, title: "Test with Jest" }
];

app.get('/todo', (req, res) => {
  res.json(todos);
});

app.get('/todo/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).send('Todo not found');
  res.json(todo);
});

app.get('/joke', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch joke" });
  }
});

const port = 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
