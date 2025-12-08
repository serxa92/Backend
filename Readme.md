# Project 1 - Backend (Node.js + Express + MongoDB)

RESTful API developed for the Backend module.  
It includes full user management, JWT authentication, role-based permissions, CRUD operations for cars, image uploads with Cloudinary, and a database seeding system.

## Technologies Used 

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Cloudinary
- Nodemon

## Installation and use

```bash
git clone https://github.com/serxa92/Backend.git
cd backend
npm install
npm run dev

Car Endpoints
GET /cars

Returns all cars.

POST /cars

Creates a new car.

Example body:

{
  "brand": "volkswagen",
  "model": "golf gti 35 edition",
  "year": 2011,
  "mileage": 150000
}

GET /cars/:id

Returns a car by its ID.

PUT /cars/:id

Updates a car.

DELETE /cars/:id

Deletes a car.

GET /cars/brand/:brand

Returns cars filtered by brand.
```
## Author

Sergio Agulla

