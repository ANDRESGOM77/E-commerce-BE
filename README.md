# E-commerce-BE

## Table of Contents

- [Description](#Description)
- [Installation](#installation)
- [Usage](#Usage)
- [Features](#features)
- [Technologies Usage](#technologies-usage)
- [License](#license)
- [Contributing](#contributing)
- [links](#links)
- [Questions](#Questions)

## Description

The E-commerce Backend is a Node.js application that provides the server-side functionality for an e-commerce platform. This project focuses on creating routes to connect the server with categories, products, and tags in the PostgreSQL database. The routes allow for various CRUD operations, which can be tested using Insomnia. Additionally, the application includes models for each section and seeding functionality to populate the database with initial data.

## Installation

1. Clone the repository:

- git clone https://github.com/ANDRESGOM77/E-commerce-BE

2. Navigate to the project directory

3. Install the required npm packages:

- npm install

4. Set up the PostgreSQL database:

- Ensure you have PostgreSQL installed and running on your machine.
- Create a database named ecommerce_db.
- Execute the SQL schema provided in the schema.sql file to create the necessary tables and relationships.

5. Configure the database connection:

- Create a .env file in the root directory with the following variables:
    - DB_HOST=your_database_host
    - DB_USER=your_database_user
    - DB_PASSWORD=your_database_password
    - DB_NAME=ecommerce_db

6. Run the database migrations and seed the database:

- npm run seed


## Usage 

1. Start the application:

- npm run start

2. Use Insomnia or any other API client to test the routes. The following endpoints are available:

- Categories:
    - GET /api/categories
    - GET /api/categories/:id
    - POST /api/categories
    - PUT /api/categories/:id
    - DELETE /api/categories/:id
- Products:
    - GET /api/products
    - GET /api/products/:id
    - POST /api/products
    - PUT /api/products/:id
    - DELETE /api/products/:id
- Tags:
    - GET /pi/tags
    - GET /api/tags/:id
    - POST /api/tags
    - PUT /api/tags/:id
    - DELETE /api/tags/:id

## Features

- CRUD operations for categories, products, and tags
- Database models for each section
- Database seeding functionality
- API testing through Insomnia

## Technologies Usage

- Node.js
- PostgreSQL
- npm packages:
    - pg: PostgreSQL client for Node.js
    - inquirer: Command-line interface for user prompts
    - dotenv: Loads environment variables from a .env file

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Links 

- video display: https://drive.google.com/file/d/1uZT38pI3rJZoazXusQMqsc1b0_bU3DEh/view

## Questions

If you have any questions about the project, please feel free to contact me:

- GitHub: ANDRESGOM77