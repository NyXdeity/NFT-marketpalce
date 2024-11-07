
---

# NFT Exchange - Full Stack Marketplace Application

## Overview

NFT Exchange is a full-stack marketplace application where users can create, buy, and sell Non-Fungible Tokens (NFTs). The application is built using React for the frontend and Node.js with Express for the backend, along with MongoDB as the database.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Features

- User authentication and authorization (JWT-based).
- Create, view, and purchase NFTs.
- Secure payments integration (e.g., with Stripe or another payment gateway).
- User profiles with a history of created and purchased NFTs.
- Search and filter functionality to explore NFTs.
- Responsive design for both desktop and mobile views.

## Tech Stack

**Frontend:**

- React
- React Router
- Axios
- CSS/SCSS

**Backend:**

- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- JWT for authentication

**Database:**

- MongoDB

**Tools:**

- Nodemon for development
- Dotenv for environment variable management
- Webpack (via Create React App)

## Project Structure
```
NFT_Exchange/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md

```

## Setup and Installation

### Prerequisites

- Node.js (v16.x recommended)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository:**

2. **Backend setup:**
    
    - Navigate to the `backend` directory:
        
        bash
        
        Copy code
        
        `cd backend`
        
    - Install dependencies:
        
        bash
        
        Copy code
        
        `npm install`
        
3. **Frontend setup:**
    
    - Navigate to the `frontend` directory:
        
        bash
        
        Copy code
        
        `cd ../frontend`
        
    - Install dependencies:
        
        bash
        
        Copy code
        
        `npm install`
        

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in both the `backend` and `frontend` directories:

### Backend

```
MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret PORT=5000`
```
### Frontend
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running the Application

### Backend

- Start the server:
    
    bash
    
    Copy code
    
    `npm start`
    
    The backend server will run on `http://localhost:5000`.
    

### Frontend

- Start the development server:
    
    bash
    
    Copy code
    
    `npm start`
    
    The frontend will run on `http://localhost:3000`.
    

### Full-stack Application

Make sure both the frontend and backend servers are running simultaneously to test the full functionality of the application.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### NFTs

- `GET /api/nfts` - Get all NFTs
- `GET /api/nfts/:id` - Get a single NFT by ID
- `POST /api/nfts` - Create a new NFT (authenticated users only)
- `PUT /api/nfts/:id` - Update an NFT (authenticated users only)
- `DELETE /api/nfts/:id` - Delete an NFT (authenticated users only)

### Users

- `GET /api/users/:id` - Get a user by ID
- `GET /api/users/:id/nfts` - Get NFTs created by a user

## Screenshots

_Are to be added._

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes relevant tests.
