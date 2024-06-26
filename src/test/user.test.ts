import request from 'supertest';
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from '../router/user.routes';
import connectDB from '../db/connection';
import mongoose from 'mongoose';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/api', userRoutes);

// Connect to Database before tests
beforeAll(async () => {
    await connectDB();
});

// Close the database connection after tests
afterAll(async () => {
    await mongoose.connection.close();
});

describe('User API', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/worko/user')
            .send({
                email: 'test@example.com',
                name: 'John Doe',
                age: 30,
                city: 'New York',
                zipCode: '10001',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });

    // Add more tests for other endpoints
});
