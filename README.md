# tickets-api
Helpdesk system where the focus is create e solve tickets about Technology


### Tecnologies

* [Node.js](https://nodejs.org/en/): version 10.16.3
    * [Restify](http://restify.com/): version 8.5.1

* [MongoDb](https://www.mongodb.com/): version 4.2.0
    * [Mongoose](https://mongoosejs.com/): version 5.9.14

* [JWT](https://jwt.io/): version 8.5.1

### Development

##### Installing
To have access to the project only follow the next instructions below:

After download or clone the project on GutHub, just download dependencies on package.json wuth command:
```sh
    npm install
```

Then you can start the project on port 4000 with command:
```sh
    npm run dev
```


##### Resourcing

- /users: to manage CRUD function of Users

    - GET http://localhost:4000/users
        - Status Code: 200
    ```sh
        [
            {
                "_links": {
                "self": "/users/5f11e942e1143034bc6b4d4c"
            },
                "_id": "5f11e942e1143034bc6b4d4c",
                "name": "Fulano",
                "email": "fulano@email.com",
                "department": "ti",
                "password": "202cb962ac59075b964b07152d234b70",
                "phone": "(00) 0 0000-0000",
                "category": "user",
                "status": true,
                "createdAt": "2020-07-17T18:09:06.992Z"
            }
        ]
    ```

    - POST http://localhost:4000/users
        - Status Code: 201
    ```sh
        {
            "name": "Fulano",
            "email": "fulano@email.com",
            "department": "ti",
            "password": "123",
            "phone": "(00) 0 0000-0000",
            "category": "user",
            "status": "true"
        }
    ```

    - GET ID http://localhost:4000/users/ObjectId()
        - Status Code: 200
    ```sh
        {
            "_links": {
            "self": "/users/5f11e942e1143034bc6b4d4c"
        },
            "_id": "5f11e942e1143034bc6b4d4c",
            "name": "Fulano",
            "email": "fulano@email.com",
            "department": "ti",
            "password": "202cb962ac59075b964b07152d234b70",
            "phone": "(00) 0 0000-0000",
            "category": "user",
            "status": true,
            "createdAt": "2020-07-17T18:09:06.992Z"
        }
    ```

    - PUT http://localhost:4000/users/ObjectId()
        - Status Code: 202
    ```sh
        {
            "name": "Fulano",
            "email": "fulano@email.com",
            "department": "ti",
            "password": "123",
            "phone": "(00) 0 0000-0000",
            "category": "user",
            "status": "true"
        }
    ```

    - DELETE http://localhost:4000/users/ObjectId()
        - Status Code: 204
    ```sh
        (No content)
    ```
- /