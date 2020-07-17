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
    ```sh
        [
            {
                "_links": {
                    "self": "/users/5ec69cf0d2ef79453470328d"
                },
                "_id": "5ec69cf0d2ef79453470328d",
                "name": "Lucas",
                "email": "lucas@gmail.com",
                "department": "ti",
                "password": "123",
                "createdAt": "2020-05-21T15:23:28.962Z"
            }
        ]
    ```
- /