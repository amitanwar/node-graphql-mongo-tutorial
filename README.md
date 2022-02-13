# node-graphql-mongo-tutorial

## Software Requirements

- Node.js 8+
- MongoDB 3.6+ (Recommended 4+)

## How to install

### Using Git (recommended)

1. Clone the project from github

```
git clone https://github.com/amitanwar/node-graphql-mongo-tutorial.git

```

### Using manual download ZIP

1. Download respository
2. Uncompress to your desired directory

### Install npm dependencies after installing (Git or mannual download)

```
cd project
npm install

```

### Setting up enviroments

1. Make copy of .env.tmpl to .env and update the required variables

```
cp .env.tmpl .env

```

2. The file .env is already ignored, so you never commit your credentials.

## Project structure

```
app/
┣ graphql/
┃ ┣ resolvers/
┃ ┃ ┗ index.js
┃ ┗ schema/
┃ ┗ index.js
┣ helper/
┃ ┗ connection.js
┗ models/
┗ author.model.js
```

## How to run

### Running API server locally

```
node app
```

or use nodemon

```
nodemon app
```

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.
