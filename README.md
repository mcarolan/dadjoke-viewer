# dadjoke-viewer

This is a front end service designed to show dad jokes exposed by [dadjoke-service](https://github.com/mcarolan/dadjoke-service/tree/main). It has been built to demonstrate Consumer Driven Contract Testing.

The main interesting places for explorers are:

* [JokeService.pact.ts](https://github.com/mcarolan/dadjoke-viewer/blob/main/tests/pact/JokeService.pact.test.ts) The Pact this project defines
* [JokeService.ts](https://github.com/mcarolan/dadjoke-viewer/blob/main/src/services/jokeservice.ts) The production code that calls `dadjoke-service`.
* [main.yml](https://github.com/mcarolan/dadjoke-viewer/blob/main/.woodpecker/main.yml) The CI pipeline.

## How to run

### Pact tests

```
$ npm run test:pact
```

### Stub dadjoke service

```
$ npm run stub:dadjoke-service
```

### Development server

```
$ npm run dev
```