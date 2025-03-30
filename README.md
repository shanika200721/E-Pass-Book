# E-Pass Book - Digital Banking System

![Project Screenshot](/client/src/assets/screenshot.png) <!-- Add a screenshot later -->

A full-stack digital passbook application built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to:
- Create banking accounts
- View transaction history
- Transfer funds
- Manage personal finances

## Features

### User Authentication
- Secure JWT-based login/logout
- User registration with validation
- Password reset functionality

### Account Management
- Create multiple account types (SmartGen, Youth, SmartWomen)
- View account balances
- Transaction history with filters

### Transactions
- Deposit/withdrawal recording
- Balance tracking in real-time
- Detailed transaction reports

### Admin Features
- User management dashboard _(future development)_
- Transaction approval system _(future development)_

## Technologies Used

### Frontend
- React 18
- React Router 6
- Axios for API calls
- Material-UI (MUI) for UI components
- Formik + Yup for forms
- CSS Modules for styling

### Backend
- Node.js + Express
- MongoDB (Mongoose ODM)
- JWT Authentication
- Bcrypt for password hashing
- Dotenv for environment variables

## Installation

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account or local MongoDB
- Git

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/e-passbook.git
   cd e-passbook
2. **backend setup**
   ```bash
   cd server
   npm install
   cp .env.example .env
   
3. **Front end setup**
    ```bash
   cd ../client
   npm install
   cp .env.example .env

   Set VITE_API_BASE_URL=http://localhost:5000 in .env

 4. **Run the Application**
   in one terminal
     
       cd server
       npm start
  in another terminal
      ```
           cd client
           npm run dev
5.  Access the App

Frontend: http://localhost:5173
Backend API: http://localhost:5000

### Future Enhancements
   # Implement fund transfers between accounts
   # Add admin dashboard
   # Integrate SMS notifications
   # Add charts for spending analytics
   # Dark mode support
