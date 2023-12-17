## Description

This project is about multiple behaviours for async and sync API concepts

Cloud Service

- [Google Cloud](https://console.cloud.google.com)
- [Google Cloud Tasks](https://www.npmjs.com/package/@google-cloud/tasks)
- [Google Pub Sub](https://www.npmjs.com/package/@google-cloud/pubsub)

Backend
- [NestJS](https://nestjs.com/)

## Current implemented concepts.

### Asynchronous Execution via Cloud Tasks
  1. Call an endpoint which schedules a cloud task to the queue.
  2. The caller gets a response immediately and doesn't have to wait.
  3. The cloud task calls a specific endpoint which handles the desired implementation.


## Cloud Run
The app is dockerized an can be deployed to Cloud Run

```
gcloud run deploy
```


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start
```