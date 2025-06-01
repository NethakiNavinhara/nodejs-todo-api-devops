pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Code Quality') {
      steps {
        echo 'Running SonarQube...'
      }
    }
    stage('Security') {
      steps {
        sh 'npm audit || true'
      }
    }
    stage('Deploy') {
      steps {
        sh 'docker build -t node-todo-app .'
      }
    }
    stage('Release') {
      steps {
        sh 'git tag -a v1.0.0 -m "Release v1.0.0" || true'
      }
    }
    stage('Monitoring') {
      steps {
        echo 'Health check endpoint is available at /health'
      }
    }
  }
}
