## Node API

### Description
Node API is production ready and open source project in Node, Express and MongoDB

## Routes

#### Charsheets
| URL | Collection | Method | Parameters | Response | Action |
| ------ | ------ | ------ | ------ | ------ | ------ |
| https://dnd-charsheet-api.herokuapp.com/charsheets | charsheets | get | Nothing | JSON with Array | Get a list of charsheets in the database |
| https://dnd-charsheet-api.herokuapp.com/charsheets/create | charsheets | post | JSON | JSON | Add JSON into the database |
| https://dnd-charsheet-api.herokuapp.com/charsheets/update/:id | charsheets | put | id, JSON | Update the document with sent JSON data |
| https://dnd-charsheet-api.herokuapp.com/charsheets/select/:id | charsheets | get | id | JSON | Return the document, related to the sent id |
| https://dnd-charsheet-api.herokuapp.com/charsheets/delete/:id | charsheets | delete | id | status 200 | Delete the document, related to the sent id |

#### Users
| URL | Collection | Method | Parameters | Response | Action |
| ------ | ------ | ------ | ------ | ------ | ------ |
| https://dnd-charsheet-api.herokuapp.com/users | users | get | Nothing | JSON with Array | Get a list of users in the database |
| https://dnd-charsheet-api.herokuapp.com/users/create | users | post | JSON | JSON | Add JSON into the database |
| https://dnd-charsheet-api.herokuapp.com/users/update/:id | users | put | id | JSON | Update the document with sent JSON data |
| https://dnd-charsheet-api.herokuapp.com/users/select/:id | users | get | id | JSON | Return the document, related to the sent id |
| https://dnd-charsheet-api.herokuapp.com/users/delete/:id | users | delete | id | status 200 | Delete the document, related to the sent id |

## Collections

#### Schema charsheet (charsheets)

| Name | Description | Type |
| ------ | ------ | ------ |
| charsheet | charsheet name | String |
| description | charsheet description  | String |

#### Schema User (users)

| Name | Description | Type |
| ------ | ------ | ------ |
| username | user name | String |
| password | user password (hash) | String |
| email | user mail  | String |

## API

| Technology | Description | Link |
| ------ | ------ | ------ |
| Heroku | Cloud Platform | [heroku.com] |
| Heroku mLab Dyno | MongoDB database server | [mlab.com] |
| GitHub | Version Controlling | [github.com] |
| PM2 | server reload, automatically | [pm2.com] |

## API Directories

- Routes ```./src/routes```
- Models ```./src/models```
- Actions ```./src/actions```
- Services ```./src/services```
- Configurations of Express ```./config/express.js```
- Database configurations ```./config/database.js```
- Server configurations ```./server.js```

## Configuring the API locally

- Download or clone the charsheet access the charsheet folder with the terminal and execute the CLI <code>npm install</code>
- Config your database in ```./congig/database.js``` change ```mongoose.connect('mongodb://localhost/yourDatabaseName');```
- Run the server in development mode <code>npm run dev</code>
- <code>Ctrl + c</code> to exit of logs and run <code>pm2 kill</code> to kill all process of pm2
- Access in your browser <a href="http://localhost:3000/charsheets">http://localhost:3000/charsheets</a>

By: <a href="http://renanlopes.com">Renan Lopes</a>
