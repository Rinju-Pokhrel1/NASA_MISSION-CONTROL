# 🚀 NASA Mission Control

A full-stack **NASA Mission Control** web application built with React and Node.js/Express.

The project simulates a mission-control system where users can explore **Kepler planet data**, view **upcoming and historical launches**, and create new launches through a REST API.

The frontend is currently deployed on Vercel.

🌐 **Live Demo:**  
https://nasa-mission-control-lvk2.vercel.app/

> **Deployment Status:** The frontend is deployed on Vercel. The backend is currently designed to run separately and needs to be deployed and connected to the production frontend for the complete application to work online.

---

## 🌌 Project Overview

NASA Mission Control is a full-stack web application inspired by a NASA mission-control system.

The project uses real **Kepler mission dataset information** to populate planets and mission destinations. It combines the dataset with a custom launch management system to provide a complete workflow for viewing and creating space missions.

The application contains three major launch categories:

- 🚀 **Launch** — create a new mission
- 🔭 **Upcoming** — view scheduled upcoming missions
- 🛰️ **History** — view previous mission launches

The frontend was based on the provided NASA Project client structure and was integrated with a newly developed Node.js/Express backend.

---

# ✨ Features

## 🌍 Kepler Planet Data

The application uses Kepler dataset information to populate the available planets.

The data is stored as CSV and processed by the backend.

The planet information is used to:

- Display available planets
- Populate the destination dropdown
- Validate selected destinations
- Provide mission destination information

---

## 🚀 Launch Management

Users can create a new launch by providing information such as:

- Mission name
- Rocket
- Launch date
- Destination
- Customers

The backend validates the submitted destination against the available Kepler planets before creating the launch.

---

## 🔭 Upcoming Missions

The Upcoming section displays missions that are scheduled for the future.

Launch information includes:

- Flight number
- Mission
- Rocket
- Launch date
- Destination
- Customers
- Launch status

---

## 🛰️ Mission History

The History section displays previously completed missions.

It provides information about past launches and their mission details.

---

## ➕ Add New Launch

The application supports creating new launches through a POST request.

Each newly created launch receives a flight number and is stored in the server-side launch collection.

---

## 🔄 REST API

The React frontend communicates with the Express backend through REST API endpoints.

Example endpoints:

```text
GET  /planets
GET  /launches
POST /launches