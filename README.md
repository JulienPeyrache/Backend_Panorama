## Description

Backend de l'application Panorama des services de la MACIF.

Framework utilisé : [Nest](https://github.com/nestjs/nest)

Communication avec la base de données MySQL grâce à TypeORM.

## Installation des dépendances

```bash
$ npm install
```

## Variables d'environnement
Les variables d'environnement sont utilisées dans `/src/database/typeormoptions.config.ts` pour configurer la connection à la base de données.
Il s'agit des variables:
```bash
DATABASE_HOST=localhost
DATABASE_USER=panorama
DATABASE_PASSWORD=panorama
DATABASE_NAME=panorama-db
```
Pour lancer le back en local, elles sont définies dans le fichier `.env` à la racine du répo. Il faut charger ce fichier avant de lancer en local.
Pour un déployement dockerizé, ces variables doivent être définies dans l'environnement du Docker.


## Lancer le back

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Pour lancer le back dockerizé, il faut `docker build -t server` pour build l'image à partir du Dockerfile, et ensuite créer un conteneur à partir de cette image.

## Ordre de lancement des différentes parties
- BDD MySQL
- Migrations TypeORM: `npm run typeorm:run-migrations` (cette étape est faite dans le `docker-entrypoint.sh` du Dockerfile)
- Lancer le back

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
