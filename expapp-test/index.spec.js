const request = require('supertest');
const app = require('./index');

describe('Todo API', () => {
  it('should return all todos', async () => {
    const res = await request(app).get('/todo');
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBe(3);
  });

  it('should return a todo by id', async () => {
    const res = await request(app).get('/todo/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title', 'Learn JavaScript');
  });

  it('should return 404 for non-existing todo', async () => {
    const res = await request(app).get('/todo/999');
    expect(res.statusCode).toEqual(404);
  });

  it('should fetch a joke from external API', async () => {
    const res = await request(app).get('/joke');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('setup');
    expect(res.body).toHaveProperty('punchline');
  });
});
