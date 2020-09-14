# Kanbas Board 

Application that allows the user to manage task cards.

## Deployed Version 📦

Try the [live](https://nameless-wave-99131.herokuapp.com/) version, deployedn in heroku.

## Stack & Dependencies 🔧

* [React](https://github.com/facebook/create-react-app) - Client Views.
* [Materialize](https://github.com/Dogfalo/materialize) - CSS Framework 
* [Material Design Icons](https://github.com/google/material-design-icons) - Icons
* [Redux](https://github.com/reduxjs/redux)- State manager
* [react-redux](https://github.com/reduxjs/react-redux) - Connect react with redux
* [redux-thunk](https://github.com/reduxjs/redux-thunk) - Middleware for async actions
* [bcryptjs](https://github.com/kelektiv/node.bcrypt.js/) - Hashing passwords
* [jsonwebtoken](https://github.com/jsonwebtoken/jsonwebtoken.github.io) - Tokens
* [config](https://github.com/lorenwest/node-config) - Global variables
* [mongoose](https://github.com/Automattic/mongoose) - Mongoose
* [nodemon](https://github.com/remy/nodemon) - Run Dev Changes
* [concurrently](https://github.com/kimmobrunfeldt/concurrently) - Run Back, and Front
* [MongoDB](https://github.com/mongodb/mongo) - Manage Information of the Users & Lists.
* [Express](https://github.com/expressjs) - API for auth, and lists methods.
* [Node](https://github.com/nodejs/node) - Managing Dependencies.


## Package Changes 📁

`"json-server": "json-server --watch db.json --port 5000"` <br/>
`"dev": "concurrently \"npm start \" \"npm run json-server\""` <br/>
`"proxy": "http://localhost:5000"` <br/>
`"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"`

## Contributing 📖

Please read [CONTRIBUTING.md](https://gist.github.com/jmfraggy/xxxxxx) for more details about our conduct code, and the process to send pull requests.

## Author 💻

* **[José Fragoso](https://github.com/jmfraggy)** - *Software Engineer* 

## License 📄

This project is under the licence (Name of licence) - look at [LICENSE.md](LICENSE.md) for more details.
