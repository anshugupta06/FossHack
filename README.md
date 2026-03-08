# StayMatch – Lifestyle Compatibility Engine for Shared Living

StayMatch is an **open-source lifestyle compatibility engine** designed to help students and working professionals find compatible roommates before sharing accommodation.

The system evaluates lifestyle preferences and predicts **compatibility scores and potential conflict risks**, enabling smarter roommate matching.

---

## Table of Contents
 
- [Problem Statement](#problem-statement)
- [Current Solution](#current-solution)
- [Project Goals and Milestones](#project-goals-and-milestones)
- [Project Approach](#project-approach)
- [System Features](#system-features)
- [Technology Stack](#technology-stack)
- [Backend Architecture](#backend-architecture)
- [Repository Structure](#repository-structure)
- [Project Outcomes](#project-outcomes)
- [Future Improvements](#future-improvements)
- [Assumptions](#assumptions)
- [References](#references)
- [Development Progress](#development-progress)

---

# Problem Statement

In urban environments, students and working professionals frequently relocate for education and employment. While accommodation discovery has become easier through digital platforms, **roommate allocation remains largely compatibility-blind**.

Differences in lifestyle habits such as:

- Sleep schedule  
- Cleanliness standards  
- Study habits  
- Noise tolerance  
- Smoking preferences  
- Social behavior  

often lead to conflicts between roommates.

Most existing accommodation platforms focus only on **room availability**, not **lifestyle compatibility**.

This results in:

- Frequent roommate conflicts  
- Reduced productivity  
- Mental stress  
- Financial disagreements  
- Early termination of accommodation agreements  

Therefore, there is a need for a **structured compatibility evaluation system** that predicts lifestyle alignment before roommates are assigned.

---

# Current Solution

Currently, people find roommates using:

- Local brokers
- Social media groups
- Word-of-mouth referrals
- Random hostel allocation
- Rental listing platforms

These methods consider only:

- Vacancy availability
- Gender
- Budget
- Basic preferences

They **do not evaluate lifestyle compatibility**, which leads to conflicts after roommates start living together.

---

# Project Goals and Milestones

## General Goals

- Build a **modular open-source compatibility engine**
- Implement **configurable compatibility scoring**
- Predict **conflict risk before roommate allocation**
- Provide **smart roommate recommendations**
- Generate **digital roommate agreements**
- Provide **visual analytics of lifestyle compatibility**

## Milestones

### Phase 1 – Core Architecture
- Requirement analysis
- Database schema design
- Backend API structure
- User preference models

### Phase 2 – Compatibility Engine
- Weighted compatibility scoring
- JSON-based weight configuration
- Conflict risk classification

### Phase 3 – Integration Layer
- Roommate agreement generator
- Frontend match visualization
- Radar chart compatibility analytics

### Phase 4 – Open Source Readiness
- Code modularization
- Documentation
- API documentation
- Testing and deployment

---

# Project Approach

### 1. Requirement Analysis
Identify measurable lifestyle parameters:

- Sleep schedule
- Cleanliness
- Smoking preference
- Study habits
- Noise tolerance
- Personality traits

---

### 2. Modular Architecture

System designed with:

- Node.js backend
- MongoDB database
- Modular folder structure
- Scalable API design

---

### 3. Compatibility Engine

Features include:

- Weighted scoring algorithm
- Configurable weight parameters
- Compatibility score normalization
- Transparent match explanations

---

### 4. Conflict Prediction

Roommates classified as:

- Low Risk
- Moderate Risk
- High Risk

Based on rule-based mismatch detection.

---

### 5. Visualization and Agreements

- Radar chart comparison of lifestyle parameters
- Digital roommate agreement generation
- Shared living rule documentation

---

# System Features

StayMatch provides several features to improve compatibility-based roommate allocation.

1. Lifestyle Compatibility Matching  
2. Configurable Compatibility Engine  
3. Conflict Risk Prediction  
4. Match Explanation System  
5. Digital Roommate Agreement Generator  
6. Compatibility Visualization (Radar Charts)  
7. Guest Mode Access  
8. Smart Match Recommendation System  
9. Lifestyle Comparison Dashboard  
10. Compatibility Feedback System  

---

# Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)
- React.js
- Chart.js

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JSON Web Tokens (JWT)
- bcrypt.js

## Agreement Generation

- PDFKit
- HTML-PDF

## Deployment

- MongoDB Atlas
- Render / Railway
- Vercel / Netlify

## Development Tools

- Visual Studio Code
- Git & GitHub
- Postman

---
## Backend Architecture

The backend follows a modular architecture.

```
backend/
│
├── models
├── controllers
├── routes
├── config
└── server.js
```

- **Models** – Database schema definitions  
- **Controllers** – Business logic  
- **Routes** – API endpoints  
- **Config** – Database configuration  
- **server.js** – Main application entry point  



---
## Repository Structure

```
FossHack/
│
├── backend
│   ├── models
│   ├── controllers
│   ├── routes
│   ├── config
│   └── server.js
│
├── index.html
├── script.js
├── style.css
├── README.md
└── LICENSE
```
# Project Outcomes

- Open-source compatibility engine
- Configurable roommate matching system
- Conflict risk prediction
- Transparent compatibility scoring
- Digital roommate agreements
- Visual compatibility analytics
- Smart roommate recommendation system
- Modular and scalable architecture

---

# Future Improvements

- Machine learning based compatibility prediction
- Mobile application
- Real-time roommate chat
- Behavioral conflict prediction
- Integration with university housing systems

---

# Assumptions

- Users provide accurate preference information
- Lifestyle parameters are measurable
- Institutions may modify compatibility weights
- Initial deployment handles moderate user traffic

---

# References

- Elmasri & Navathe – Fundamentals of Database Systems
- Korth & Silberschatz – Database System Concepts
- MongoDB Documentation
- Node.js Documentation
- Express.js Guide
- React Documentation

---

# Development Progress

### 1 March 2026
- Project initialized
- GitHub repository created
- MIT License added

### 2 March 2026
- Frontend base files created
- Repository structure organized

### 3 March 2026
- Backend folder created
- Node.js initialization started

### 4 March 2026
- Express server configured
- Backend architecture structured

### 5 March 2026
- Compatibility engine implemented

### 6 March 2026
- Sample data added for testing

### 7 March 2026
- Minor fixes and documentation improvements
- Documentation improvements and progress updates
