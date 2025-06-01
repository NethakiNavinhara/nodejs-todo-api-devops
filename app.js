const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];
let idCounter = 1;

app.get('/health', (req, res) => res.send({ status: 'OK' }));

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const task = { id: idCounter++, title, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.get('/tasks', (req, res) => res.json(tasks));

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id != id);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
