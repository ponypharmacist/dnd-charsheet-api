## Node API

### Description
Node API is production ready and open source project in Node, Express and MongoDB

## Routes

#### Projects
| URL | Collection | Method | Parameters | Response | Action |
| ------ | ------ | ------ | ------ | ------ | ------ |
| https://rest-api-node.herokuapp.com/projects | projects | get | Nothing | JSON with Array | Get a list of projects in the database |
| https://rest-api-node.herokuapp.com/projects/create | projects | post | JSON | JSON | Add JSON into the database |
| https://rest-api-node.herokuapp.com/projects/update/:id | projects | put | id, JSON | Update the document with sent JSON data |
| https://rest-api-node.herokuapp.com/projects/select/:id | projects | get | id | JSON | Return the document, related to the sent id |
| https://rest-api-node.herokuapp.com/projects/delete/:id | projects | delete | id | status 200 | Delete the document, related to the sent id |

#### Users
| URL | Collection | Method | Parameters | Response | Action |
| ------ | ------ | ------ | ------ | ------ | ------ |
| https://rest-api-node.herokuapp.com/users | users | get | Nothing | JSON with Array | Get a list of users in the database |
| https://rest-api-node.herokuapp.com/users/create | users | post | JSON | JSON | Add JSON into the database |
| https://rest-api-node.herokuapp.com/users/update/:id | users | put | id | JSON | Update the document with sent JSON data |
| https://rest-api-node.herokuapp.com/users/select/:id | users | get | id | JSON | Return the document, related to the sent id |
| https://rest-api-node.herokuapp.com/users/delete/:id | users | delete | id | status 200 | Delete the document, related to the sent id |

## Collections

#### Schema Project (projects)

| Name | Description | Type |
| ------ | ------ | ------ |
| project | project name | String |
| description | project description  | String |
| author | author's name | String |
| authorLink | links to author (website, linkedin) | String |
| status | project status (Development / Production) | String |

#### Schema User (users)

| Name | Description | Type |
| ------ | ------ | ------ |
| username | user name | String |
| password | user password (hash) | String |
| email | user mail  | String |
| photo | user photo | String |
| nickname | user nickname | String |

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

- Download or clone the project access the project folder with the terminal and execute the CLI <code>npm install</code>
- Config your database in ```./congig/database.js``` change ```mongoose.connect('mongodb://localhost/yourDatabaseName');```
- Run the server in development mode <code>npm run dev</code>
- <code>Ctrl + c</code> to exit of logs and run <code>pm2 kill</code> to kill all process of pm2
- Access in your browser <a href="http://localhost:3000/projects">http://localhost:3000/projects</a>

By: <a href="http://renanlopes.com">Renan Lopes</a>
