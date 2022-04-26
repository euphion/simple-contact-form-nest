# simple-contact-form-nest

Simple contact form for Nest JS demonstration. 
Attached repository is [simple-contact-form-vue](https://github.com/jakubdvorak7/simple-contact-form-vue).

## Prerequisites

Make sure you have installed [Node JS](https://nodejs.org/) and Docker on your machine.

You can use yarn or npm.

## Installation

Run this command in you terminal. Then download pgAdmin 4 for PostgreSQL and create empty database called "forms". Use credentials postgres/postgres.

```bash
# run database in Docker
$ docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

then

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
