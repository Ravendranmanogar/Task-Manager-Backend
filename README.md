# Task Manager Backend

This is my **first backend project**: a **Task Management API** built with **Node.js**, **Express.js**, **MongoDB**, and **JWT authentication**.

---

## 🚀 Features

- User registration and login with **hashed passwords**
- Secure authentication with **JWT tokens**
- CRUD operations for tasks:
  - Create, Read (list & by ID), Update, Delete
- Task metadata: `title`, `description`, `status` (e.g. pending/completed), optional `dueDate` or `category`
- Authentication middleware to protect routes

---

## 🛠 Tech Stack

- **Node.js** & **Express.js**
- **MongoDB** with **Mongoose**
- **bcrypt.js** for password hashing
- **jsonwebtoken** for token-based authentication
- **dotenv** for managing environment variables
- **express-validator** for input validation
- (Optional) **cors** middleware if you plan a separate frontend

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or above)
- MongoDB (either local instance or Atlas cloud)

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/Ravendranmanogar/Task‑Manager‑Backend.git
cd Task‑Manager‑Backend

# 2. Install dependencies
npm install

# 3. Create `.env` file with these keys:
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRATION=1d

# 4. Run the server
npm run dev
# or
npm start
