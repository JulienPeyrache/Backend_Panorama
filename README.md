## Description

Backend de l'application Panorama des services de la MACIF.

Framework utilisé : [Nest](https://github.com/nestjs/nest)

Communication avec la base de données MySQL grâce à TypeORM.

## Installation

```bash
$ npm install
```

## Lancer le back

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger documentation of the API

The route '/api/doc' will display the swagger documentation of the API.

## Commandes de migration de la base de données

```bash
# generate migration : 
$ npm run typeorm:generate-migration --name=XXXXX

# run migrations : 
$ npm run typeorm:run-migrations

# revert migration : 
$ npm run typeorm:revert-migration

# create migration : 
$ npm run typeorm:create-migration --name=XXXXX
```

## Test (non développé)

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
