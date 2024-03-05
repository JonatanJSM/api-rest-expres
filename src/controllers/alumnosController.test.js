import { expect } from "@jest/globals";
import request from "supertest";
import app from '../app.js';

describe('Test API endpoints', () => {

  it('should return a 200 status code for the root endpoint', async () => {
    
    const response = await request(app).get('/alumnos');
    expect(response.status).toBe(200);

  });

});
