# Worko API

## Getting Started

## Prerequisites
- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd worko.ai

2. yarn/npm install

3. npm/yarn -g typescript

4. create .env file
    i. PORT=8080
    ii. MONGO_URI= your_mongodb_url
    iii. JWT_SECRET=your_jwt_secret


## Running API

1. to run the program [ yarn server or npm run server ]

## API Endpoints

GET /api/worko/user - List all users
GET /api/worko/user/:userId - Get user details
POST /api/worko/user - Create a new user
PUT /api/worko/user/:userId - Update user details
PATCH /api/worko/user/:userId - Partially update user details
DELETE /api/worko/user/:userId - Soft delete user


## TEST

npm/yarn test