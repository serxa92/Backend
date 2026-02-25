# 🚗 Project 1 - Backend  
### Node.js · Express · MongoDB · Cloudinary

RESTful API developed for the Backend module.  
It includes full user management, JWT authentication, role-based permissions, CRUD operations for cars, image uploads with Cloudinary, and a database seeding system.

---

## 🛠 Technologies Used

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" alt="Node.js"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" alt="Express"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" alt="MongoDB"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" width="40" alt="Mongoose"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original.svg" width="40" alt="Cloudinary"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" width="40" alt="Nodemon"/>
</p>

- **Node.js** – Backend runtime environment  
- **Express** – REST API framework  
- **MongoDB Atlas** – Cloud database  
- **Mongoose** – ODM for MongoDB  
- **Cloudinary** – Image storage and management  
- **Nodemon** – Development server  

---

## ⚙ Installation & Usage

```bash
git clone https://github.com/serxa92/Backend.git
cd Backend
npm install
npm run dev
```
Server will run on:

```bash
http://localhost:8080
```
## 📦 API Endpoints
🚘 Car Endpoints
```bash
GET /cars
````

Returns all cars.


POST /cars

Creates a new car (Authentication required).

Example body:
```json
{
  "brand": "volkswagen",
  "model": "golf gti 35 edition",
  "year": 2011,
  "mileage": 150000
}
```
GET /cars/:id

Returns a car by its ID.

PUT /cars/:id

Updates a car.

DELETE /cars/:id

Deletes a car.

GET /cars/brand/:brand

Returns cars filtered by brand (case-insensitive).

## 🔐 Authentication
POST /auth/register

Registers a new user (default role: user).

Supports image upload using multipart/form-data.

POST /auth/login

Returns JWT token.

## 👥 Role-Based Permissions

user → Can manage own data.

admin → Can change user roles and delete any account.

☁ Cloudinary Integration

Image uploaded on user registration.

Image URL stored in database.

Image automatically deleted from Cloudinary when user is removed.

🌱 Seeder

To populate the database with sample cars:

npm run seed:cars
👨‍💻 Author

Sergio Agulla