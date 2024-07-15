# Getting Started with Bookshelf-Frontend

## Project Overview

This is Fullstack Project for Returnship Program of Pluralsight.

This is the back-end of full-stack application that allows bookstore employees to internally manage the books carried by a small bookstore.  
The front-end is @ https://github.com/Bhawna-Bhatt/Bookshelf-Frontend in this same account.

This repository contains code for designing and implementing a back-end system for the bookstore. This will involve creating a relational
database to store information about books, authors, and genres, and building a REST API to interact with the database.

## Steps

- Install Git
- Install Node.js
- Clone this repository
- Navigate to the Project Directory
- Install depenedencies using **npm install**
- Start the development server using **npm start**
- The backend should be running on port 4000

## Tech Stack

- Node.js
- Javascript
- ORM - Sequelize
- Express

## how to create the database and inserting sample data

- The database has been made with Sequelize ORM and sample data was inserted using BulkCreate method of the same.

## list of endpoints are as follows

Books:
- GET /books : Retrieve a list of all books
- GET /books/{book_id} : Retrieve details of a specific book
- POST /books : Add a new book
- PUT /books/{book_id} : Update details of an existing book
- DELETE /books/{book_id} : Delete a specific book
Authors:
- GET /authors : Retrieve a list of all authors
- GET /authors/{author_id} : Retrieve details of a specific author
- POST /authors : Add a new author
- PUT /authors/{author_id} : Update details of an existing author
- DELETE /authors/{author_id} : Delete a specific author
Genres:
- GET /genres : Retrieve a list of all genres
- GET /genres/{genre_id} : Retrieve details of a specific genre
- POST /genres : Add a new genre

## source code for the REST API

- is available at backend repository [https://github.com/Bhawna-Bhatt/Bookshelf-Backend.git
](https://github.com/Bhawna-Bhatt/Bookshelf-Backend/tree/main/routes)





