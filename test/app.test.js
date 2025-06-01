const request = require('supertest');
const app = require('../app');

describe('Task API', () => {
  it('should create a new task', async () => {
    const res = await request(app).post('/tasks').send({ title: 'Test Task' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test Task');
  });

  it('should return all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update a task', async () => {
    const resCreate = await request(app).post('/tasks').send({ title: 'Update Me' });
    const id = resCreate.body.id;
    const res = await request(app).put(`/tasks/${id}`).send({ completed: true });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('completed', true);
  });

  it('should delete a task', async () => {
    const resCreate = await request(app).post('/tasks').send({ title: 'Delete Me' });
    const id = resCreate.body.id;
    const res = await request(app).delete(`/tasks/${id}`);
    expect(res.statusCode).toEqual(204);
  });
});
