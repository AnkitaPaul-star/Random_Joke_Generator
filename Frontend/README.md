# Random Joke Generator
A full-stack Random Jokes Generator platform built with the MEAN stack (MongoDB, Express.js, Angular, Node.js), featuring a modern UI and comprehensive functionality.

## 🌟 Features

1. Home Page: A landing page for general information
2. User Authentication: Secure Authentication with JWT
3. Login: Secure access for registered users.
4. Signup: Allows new users to create an account.
5. User Page: Users can view a variety of jokes and can like favorite joke
6. Admin Panel: Database Access of Users
 

## 🚀 Technology Used

### Frontend
- Angular with TypeScript
- HTML & CSS for styling
### Backend
- Node.js & Express.js
- MongoDB Atlas with Mongoose
- JWT Authentication

### 🛠️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   # Install backend dependencies
   cd Backend
   npm install

   # Install frontend dependencies
   cd ../Frontend/myapp
   npm install
   ```
3. Set up environment variables:
   Create .env file in Backend & environment.development.ts file in Frontend directory with necessary configurations.

4. Run the development servers:
   ```bash
   # Start backend server
   cd Backend
   npm run dev

   # Start frontend server
   cd Frontend
   ng serve
   ```

## 📁 Project Structure

The project follows a clean and modular architecture:

Frontend
├── src/
|    ├──app/                # Reusable UI components
|    |   ├──app.routes.ts   # Define application routes
|    |   ├──app.config.ts   # Import providers
|    |   ├──app.ts          # Entry point of the Angular app          
|    |   ├──guards/         # Authentication & Authorization
|    |   ├──services/       # Services for API calls, authentication
|    |   ├──interceptors/   # Add JWT authentication to the request
|    |   ├──environments/   # Store API endpoints 
|    |   ├──home/           # Landing Page
|    |   ├──signup/         # User registration form
|    |   ├──login/          # User login form with authentication
|    |   ├──user/           # Platform to display jokes and like them
|    |   ├──admin/          # Access to user database
|    ├──styles.css          # Global styles
├──angular.json             # Angular CLI configuration
├──package.json             # Project dependencies and scripts
├──tsconfig.json            # TypeScript configuration
├──README.md                # This file


Backend/
├──models/       # Mongoose models
├──server.js     # Connection to MongoDB Atlas
├──package.json  # Project dependencies and scripts


## 🌐 API Endpoints

1. POST /api/register- Register a new user
2. POST /api/login-  Authenticate user
3. GET /api/fetch_details- Get all user information

## 🔒 Security Features

- JWT Authentication
- Password Hashing
- Protected Routes
- Input Validation
- CORS Configuration

## 🚀 Future Improvements

👍 Save liked jokes in Database
📊 Admin panel for joke moderation
⚫ Dark mode UI
🌐 Add custom joke API



## 👨‍💻 Author

Made with 💖 by Ankita Paul💙
3rd year IT student,📍 Narula Institute of Technology  


