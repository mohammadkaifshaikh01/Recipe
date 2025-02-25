# C-K-D Project

## Description
C-K-D is a full-stack web application built using React (Vite) for the frontend and Node.js (Express) with MongoDB for the backend. The project includes authentication, CRUD operations, and an "Add to Favorites" functionality.

## Features
- User Authentication (Signup/Login)
- Create, Read, Update, and Delete (CRUD) operations
- Add to Favorites functionality
- Secure API using JWT authentication
- Responsive UI with React and Vite
- Backend API built with Express.js
- Database managed using MongoDB

## Technologies Used
### Frontend:
- React (Vite)
- React Router
- Axios
- Tailwind CSS (Optional for styling)

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for Authentication
- bcrypt for Password Hashing

## Installation & Setup
### Prerequisites
- Node.js installed
- MongoDB installed and running

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/mohammadkaifshaikh01/Recipe.git
   cd Recipe/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd Recipe/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm run dev
   ```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### CRUD Operations
- `GET /api/items` - Get all items
- `POST /api/items` - Add a new item
- `PUT /api/items/:id` - Update an item
- `DELETE /api/items/:id` - Delete an item

### Favorites
- `POST /api/favorites` - Add to favorites
- `GET /api/favorites` - Get user favorites

## License
This project is open-source and available under the [MIT License](LICENSE).

## GitHub Repository
[https://github.com/mohammadkaifshaikh01/Recipe](https://github.com/mohammadkaifshaikh01/Recipe)

