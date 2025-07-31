# Task Manager Backend

**Task-Manager-Backend** is my **first backend project** — a RESTful API for managing personal tasks, built using Node.js, Express.js, and MongoDB.  
Authentication is handled via regular sessions or basic token logic (no JWT).

---

## 🚀 Features

- CRUD operations on tasks:
  - Create, Read (list & single), Update, Delete
- Task properties include: `title`, `description`, `status` (e.g. pending/completed)
- Middleware to protect task routes for authenticated users only

---

## 🛠 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** with **Mongoose**
- **dotenv** for environment variables
- **express-validator** (or similar) for request validation
- (Optional) **cors** for handling cross-origin access

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

### Setup

```bash
git clone https://github.com/Ravendranmanogar/Task‑Manager‑Backend.git
cd Task‑Manager‑Backend
npm install

# Create .env file
MONGODB_URI=mongodb://localhost:27017/taskmanager
AUTH_SECRET=your_secret_key

