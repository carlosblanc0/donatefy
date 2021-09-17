[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)

# donatefy

![Database](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Backend](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![DevOps](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

The idea behind this project is to connect individuals who are looking to get their blood donated. The result is a simple in-browser app that pushes user's entries into a SQL database.

![donatefy](https://i.imgur.com/dBLIwBU.png)

[YouTube Shorts](https://youtu.be/9zj0XyiVEJI)

## Run Locally

Clone the project

```bash
  git clone  git@github.com:carlosblanc0/donatefy.git
```

Go to the project directory

```bash
  cd donatefy
```

Install dependencies

```bash
npm install
```

Spin up the database (I've used [ElephantSQL's](http://www.elephantsql.com/) free tier for demoing purposes)

```bash
touch elephantsql.js
```

```bash
var pg = require('pg');

var conString = "INSERT_YOUR_POSTGRES_URL_HERE" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);

    client.end();
  });
});
```

Start the server

```bash
  npm start
```

## Design

> [Figma](https://https://www.figma.com/file/AmpZrlO8ZRlQzLFkv4zHWF/Donatefy?node-id=0%3A1)

## Live Demo

>  Coming soon on https://donatefy.herokuapp.com

## Official Repo

- [donatefy](https://github.com/carlosblanc0/donatefy)

###### tags: `Netlify`, `Templating`, `Basics`

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-)
