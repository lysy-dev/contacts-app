# Monorepo with Frontend and Backend
This is a simple monorepo project for practicing coding skills. The project includes a frontend application built with React and a backend application built with Koa.js. The backend includes an in-memory database for storing and retrieving contact information.

## Running the Frontend
To run the backend, navigate to the frontend directory and run the following command:

`yarn start`
This will start the frontend React app.

## Running the Backend
To run the backend, navigate to the backend directory and run the following command:

`yarn start`
This will start the backend server and listen for incoming requests.

### In-Memory Database
The backend application includes an in-memory database for storing and retrieving contact information. The database is implemented using a simple JavaScript object.

### Adding Contacts
To add a new contact to the database, send a PUT request to the /user endpoint with the following JSON payload:

```
{
  "first_name": "John" 
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "phone": "555-555-5555"
}
```
The backend will add the new contact to the database and return the following JSON response:

```
{
  "id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "555-555-5555"
}
```
### Retrieving Contacts
To retrieve all the contacts in the database, send a GET request to the /users endpoint. The backend will return the following JSON response:

```
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "555-555-5555"
  },
  {
    "id": "2",
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "phone": "555-555-5555"
  }
]
```
