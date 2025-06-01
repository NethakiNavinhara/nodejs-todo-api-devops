# Node.js To-Do API for DevOps Pipeline

This is a simple Node.js To-Do API built for SIT223 Task 7.3HD demonstrating a full DevOps pipeline using Jenkins.

## Features
- RESTful API (CRUD operations)
- Unit tests with Jest
- Docker containerization
- Jenkins CI/CD pipeline
- Code quality with SonarQube
- Security analysis via `npm audit`
- Monitoring endpoint at `/health`

## Getting Started

### Run Locally
```bash
npm install
npm start
```

### Run Tests
```bash
npm test
```

### Run with Docker
```bash
docker build -t node-todo-app .
docker run -p 3000:3000 node-todo-app
```

### Run with Docker Compose
```bash
docker-compose up
```

### Jenkins Setup
- Place Jenkinsfile in your repo.
- Configure Jenkins pipeline from source control.
- Setup SonarQube server and npm audit tools.

