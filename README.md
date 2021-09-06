# bld-test

## Implementation details
- I decided to use typescript, postgres and a ORM for scalability. Also added a route for adding vehicles to a driver.
- I used [Celebrate](https://www.npmjs.com/package/celebrate) for validation.

### Techs
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)  ![TypeORM](https://img.shields.io/badge/-TypeORM-FE0902?style=for-the-badge)

# Routes
### POST /drivers
```json
{
  "name": "Motorista 1",
  "postalCode": "80010-180"
}
```
#### Response: `201 Created`
### POST /drivers/1/vehicles
```json
{
  "plate": "ABC-1234"
}
```
#### Response: `201 Created`
### GET /drivers
#### Response:
```json
[
  {
    "id": 1,
    "name": "Motorista 1",
    "vehicles": "ABC-1234, ZZZ-0000",
    "postalCode": "80010-180",
    "state": "PR",
    "city": "Curitiba"
  },
  {
    "id": 2,
    "name": "Motorista 2",
    "vehicles": "",
    "postalCode": "99999-999",
    "state": "",
    "city": ""
  }
]
```

### VSCode extensions used: 
- [Editor Config](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
# Getting started:
1. Clone repo
2. [Install docker](https://www.docker.com/products/docker-desktop) (If you already have a postgres database running, you can jump to step 4)
3. Once docker is installed and running, create the postgres container:
```
docker run -p 5432:5432 --name pg -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=bld -d postgres
```
4. Install yarn if it isn't already installed: `npm i -g yarn`
5. Install dependencies with `yarn`
```
yarn typeorm-dev migration:run
```
#### ** The default drivers and vehicles are inserted by the migrations **

- Create a `.env` file in the project root folder. Example contents:
```env
DB_CONNECTION = 'postgres'
DB_HOST = 'localhost'
DB_USERNAME = 'postgres'
DB_PASSWORD = 'postgres'
DB_DATABASE = 'bld'
DB_PORT = 5432

# Defaults to 3333
PORT = 3333
```
- Start the project with `yarn dev`
