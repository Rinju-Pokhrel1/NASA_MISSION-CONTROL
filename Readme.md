# 🚀 NASA Mission Control

A full-stack mission control application built with **React, Node.js, and Express**, inspired by NASA's space mission management system.

The application uses **Kepler exoplanet data** for mission destinations and provides interfaces for managing **launches, upcoming missions, and launch history**.

🌐 **Live Demo:** [NASA Mission Control](https://nasa-mission-cntrl.vercel.app/)

> **Note:** The current live deployment contains the frontend only. The backend is developed separately and will be deployed and connected to the frontend.

---

## ✨ Features

* 🌍 **Kepler Planet Data** — Browse and validate mission destinations.
* 🚀 **Launch Management** — Create and manage new missions.
* 🔭 **Upcoming Missions** — View scheduled launches.
* 🛰️ **Mission History** — View previous launches.
* 🔄 **REST API** — React frontend communicates with an Express backend.
* 🧭 **Client-side Routing** — React Router for seamless navigation.
* 📊 **CSV Data Processing** — Asynchronous processing of Kepler dataset.

---

## 🛠️ Tech Stack

**Frontend**

* React
* JavaScript
* React Router
* CSS

**Backend**

* Node.js
* Express.js
* CORS
* Morgan
* Nodemon

**Data**

* Kepler Dataset (CSV)
* JavaScript Map

**Deployment**

* Vercel — Frontend

---

## 🏗️ Architecture

```text
React Frontend
      │
      │ REST API
      ▼
Node.js + Express
      │
      ├── Planet API
      │      └── Kepler CSV Data
      │
      └── Launch API
             └── Launch Data
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js
* npm
* Git

### Clone

```bash
git clone https://github.com/Rinju-Pokhrel1/NASA_MISSION-CONTROL.git
cd NASA_MISSION-CONTROL
```

### Install Dependencies

```bash
npm install
```

Install client dependencies:

```bash
cd client
npm install
```

Install server dependencies:

```bash
cd ../server
npm install
```

### Run the Application

Start the backend:

```bash
cd server
npm start
```

Start the frontend in another terminal:

```bash
cd client
npm start
```

---

## 🔌 API Endpoints

| Method | Endpoint    | Description            |
| ------ | ----------- | ---------------------- |
| `GET`  | `/planets`  | Get Kepler planet data |
| `GET`  | `/launches` | Get launch data        |
| `POST` | `/launches` | Create a new launch    |

---

## 📁 Project Structure

```text
NASA_MISSION-CONTROL/
├── client/          # React frontend
├── server/          # Node.js / Express backend
│   └── src/
│       ├── data/    # Kepler dataset
│       ├── models/
│       └── routes/
├── package.json
└── README.md
```

---

## 🌐 Deployment

**Frontend:** Vercel
🔗 https://nasa-mission-cntrl.vercel.app/

**Backend:** In development / separate deployment

---

## 🎯 Learning Outcomes

This project demonstrates practical experience with:

* Full-stack application architecture
* React and REST API integration
* Node.js & Express backend development
* HTTP methods and middleware
* CSV data processing
* Client-side routing
* CORS configuration
* Production frontend deployment

---

## 👩‍💻 Author

**Rinju Pokhrel**

