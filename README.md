# AI Interview Prep

AI-powered interview preparation platform that analyzes a candidate's resume against a target job description and generates a personalized interview preparation strategy.

## Overview

AI Interview Prep helps candidates prepare for technical interviews by using their resume, target job description, and optional self-description to generate:

- Resume-to-job match score
- Technical interview questions
- Behavioral interview questions
- Skill gaps
- Interview preparation roadmap
- Personalized preparation recommendations
- AI-generated ATS-friendly resume

The platform uses Google's Gemini API to analyze the candidate profile and generate personalized interview content.

## Features

### Resume Analysis
Upload a PDF resume and compare it with a target job description.

### AI Interview Questions
Generate technical and behavioral questions based on the candidate's projects, skills, and target role.

### Skill Gap Analysis
Identify missing or weaker skills relevant to the target job.

### Interview Roadmap
Generate a personalized preparation plan based on the identified gaps.

### Authentication
Secure user registration and login using JWT-based authentication and password hashing.

### Resume Generation
Generate an ATS-friendly resume based on the candidate's interview profile.

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- Context API
- SCSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer

### AI
- Google Gemini API

### Deployment
- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

## Project Structure

```text
AI-Interview-Prep/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── features/
│   │   ├── App.jsx
│   │   └── app.routes.jsx
│   └── package.json
│
└── README.md