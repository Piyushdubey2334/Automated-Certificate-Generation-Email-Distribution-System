# 🎓 MPCC3 - Certificate Management System

A full-stack Certificate Management System built using **React.js**, **Node.js**, **Express.js**, and **MySQL**. The system enables administrators to upload student data, generate certificates, manage batches, track email delivery, maintain upload history, and verify certificates through a secure and user-friendly dashboard.

---

# 🚀 Features

* 🔐 JWT Authentication
* 👨‍💼 Admin Login
* 📊 Dashboard Overview
* 📁 CSV Upload
* 🗂 Batch Management
* 📜 Certificate Generation
* 📧 Email Sending & Status Tracking
* 📈 Upload History
* ⚠️ Error Log Management
* ✅ Certificate Verification
* 🔍 Search & Filter Records
* 📱 Responsive User Interface

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* SCSS

## Backend

* Node.js
* Express.js
* MySQL
* JWT
* Multer
* Nodemailer
* CSV Parser

## Database

* MySQL

---

# 📁 Project Structure

```text
MPCC3/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── certificates/
│   │   ├── uploads/
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# 📋 Prerequisites

Before running the project, make sure you have installed:

* Node.js (v18 or later recommended)
* MySQL Server
* Git
* npm

---

# ⚙️ Backend Setup

### 1. Navigate to the backend

```bash
cd backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=5007

DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=mpc

JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d

ADMIN_EMAIL=your_admin_email@gmail.com
ADMIN_PASSWORD=your_admin_password

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

### 4. Start the backend server

```bash
npm run dev
```

or

```bash
npm start
```

Backend runs at:

```text
http://localhost:5007
```

---

# 💻 Frontend Setup

### 1. Navigate to the frontend

```bash
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
VITE_BACKEND_URL=http://localhost:5007
```

### 4. Start the frontend

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

# 🗄 Database Setup

Create a MySQL database:

```sql
CREATE DATABASE mpc;
```

Update your MySQL credentials in the backend `.env` file.

Import your database schema if required.

---

# 🔐 Environment Variables

## Backend (.env)

| Variable       | Description            |
| -------------- | ---------------------- |
| PORT           | Backend server port    |
| DB_HOST        | MySQL host             |
| DB_USER        | MySQL username         |
| DB_PASSWORD    | MySQL password         |
| DB_NAME        | Database name          |
| JWT_SECRET     | Secret key for JWT     |
| JWT_EXPIRES_IN | JWT token expiration   |
| ADMIN_EMAIL    | Default admin email    |
| ADMIN_PASSWORD | Default admin password |
| EMAIL_USER     | SMTP email account     |
| EMAIL_PASS     | SMTP app password      |

## Frontend (.env)

| Variable         | Description     |
| ---------------- | --------------- |
| VITE_BACKEND_URL | Backend API URL |

---

# 📡 Main Modules

* Authentication
* Dashboard
* Batch Management
* CSV Upload
* Certificate Generation
* Certificate Records
* Upload History
* Email Status
* Error Logs
* Certificate Verification

---

# ▶️ Running the Project

### Start Backend

```bash
cd backend
npm install
npm run dev
```

### Start Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 Application URLs

| Service  | URL                   |
| -------- | --------------------- |
| Frontend | http://localhost:5173 |
| Backend  | http://localhost:5007 |

---

# 📸 Screens

* Login
* Dashboard
* Upload CSV
* Batch Management
* Certificate Records
* Upload History
* Email Status
* Error Logs
* Certificate Verification

---

# 🔒 Security

* JWT Authentication
* Protected Routes
* Secure Password Handling
* Environment Variables
* Input Validation

---

# 📦 Future Improvements

* Role-Based Access Control (RBAC)
* Bulk Email Queue
* Certificate Templates
* PDF Download
* Analytics Dashboard
* Docker Deployment
* Cloud Storage Integration

---

# 👨‍💻 Author

**Piyush Dubey**

MERN Stack Developer

* Node.js
* Express.js
* React.js
* MySQL
* REST APIs

---

# 📄 License

This project is created for learning, portfolio, and assignment purposes.
