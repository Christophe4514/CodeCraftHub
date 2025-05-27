# User Service API

This project is a User Service built with Node.js and MongoDB. It provides a RESTful API for managing user-related operations such as creating, retrieving, updating, and deleting users.

## Project Structure

```
user-service
├── src
│   ├── controllers        # Contains the user controller handling requests
│   ├── models             # Contains the Mongoose user model
│   ├── routes             # Contains the user routes
│   ├── services           # Contains the business logic for user operations
│   └── app.js             # Entry point of the application
├── package.json           # NPM configuration file
├── .env                   # Environment variables
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd user-service
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

## Usage

To start the application, run:
```
npm start
```

The server will start and listen on the specified port (default is 3000).

## API Endpoints

- **POST /users**: Create a new user
- **GET /users/:id**: Retrieve a user by ID
- **PUT /users/:id**: Update a user by ID
- **DELETE /users/:id**: Delete a user by ID

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.