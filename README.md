# Express CRUD Backend Project

## Overview
This project is a backend using Node.js and Express, designed to perform CRUD operations on a database. It utilizes Mongoose for database interaction, dotenv for environment variables, nodemon for automatic server restarts during development, and cors for enabling cross-origin resource sharing.

## Features

- **Node.js**: The runtime environment for server-side JavaScript.
- **Express**: A minimal and flexible Node.js web application framework.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB.
- **dotenv**: A module for managing environment variables from a .env file.
- **nodemon**: Automatically restarts the server during development.
- **cors**: Enables cross-origin resource sharing for wide application compatibility.

## Getting Started

### Prerequisites

- **Node.js**: [Download and install Node.js](https://nodejs.org/).

- **MongoDB**: Set up a local instance or use a cloud-based MongoDB service like MongoDB Atlas.

## Project Structure

- The project structure is organized as follows:  

* app.js: The entry point of the application.

* controllers/: Contains controllers that handle the logic for each CRUD operation.

* models/: Contains Mongoose models for your data structures.

* routes/: Defines the API routes and their associated controllers.

* config/: Houses configuration files and database connection setup.

* package.json and package-lock.json: Node.js package files.

## Configuration

Configuration variables are managed using the .env file. Create one in the project root directory and set your environment variables. Use the provided .env.example as a template.

##  Usage

Using this Project you can get clear understanding how the backend functionaliy works on you local computer.
You also got an clarity how to interact with Mongodb Database with the CRUD funtions. 

## Project Output

- http://localhost:8000/createuser  

![Alt text](<Screenshot (94).png>)

- http://localhost:8000/deleteuser/ID

![Alt text](<Screenshot (95).png>)

## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. We appreciate your interst in making this project better!

