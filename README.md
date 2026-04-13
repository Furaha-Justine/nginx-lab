# Containerization Labs

A small collection of Docker practice labs featuring a Node.js app and an Nginx reverse proxy.

## Project structure

- docker-lab/ — Node.js + Express application containerized with Docker
- nginx-lab/ — Nginx configuration for proxying requests to the Node.js app
- docker-compose.yml — Runs both services together on one Docker network

## docker-lab

A simple Express server that responds with a greeting message at the root route.

### Features

- Node.js 20 Alpine base image
- Express server listening on port 3000
- Health endpoint at /healthz
- Containerized with Docker

### Run locally with Docker

From the docker-lab directory:

```bash
docker build -t docker-lab .
docker run -p 3000:3000 docker-lab
```

Then open:

- http://localhost:3000

### Run without Docker

From the docker-lab directory:

```bash
npm install
npm start
```

## nginx-lab

An Nginx container that proxies requests to the Node.js app over the Docker network.

### How it works

- Nginx listens on port 80 inside the container
- Requests are proxied to the app service at http://app:3000
- This is better for container-to-container communication and works well with Compose

## Recommended setup

Use Docker Compose to run both services together.

### Build and run

From the project root:

```bash
docker compose up --build
```

Then open:

- http://localhost:8080

## Notes

- The Node.js app responds with a basic HTML message on the home route.
- The app includes a /healthz route for health checks.
- The Nginx configuration uses a service name instead of host.docker.internal.
- The root .gitignore keeps local OS and Node artifacts out of version control.

## Requirements

- Docker
- Node.js 20 or later for running the app outside Docker
