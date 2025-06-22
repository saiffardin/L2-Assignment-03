# Library Management System

This project consists of 7 REST APIs for managing books, authors, borrowing books, and borrowed book summaries. The project was built with **TypeScript**, **ExpressJS**, and **MongoDB (Mongoose)**.

## Features

- CRUD operations for books
- Borrow and summary of borrowed books
- Data validation using Zod
- Consistent HTTP status codes
- Error Handling
- Modular and maintainable codebase
- Vercel Deployment

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Zod
- **Language**: TypeScript
- **Deployment**: Vercel

---

## Status Codes
- `200 OK` – Successful GET/DELETE/PATCH
- `201 Created` – Successful resource creation
- `400 Bad Request` – Validation error
- `404 Not Found` – Resource not found
- `409 Conflict` – Business logic conflicts (e.g., insufficient copies)
- `500 Internal Server Error` – Unexpected server error


## Running Locally
- install `nodeJS`, `mongoDB`, `typescript` in your PC.
- start mongoDB server
- run `git clone https://github.com/yourusername/library-api.git`
- run `cd library-api`
- run  `cp .env.local .env`
- run `npm install`
- run `npm run dev`