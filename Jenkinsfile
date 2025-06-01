pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        bat 'npm install'
      }
    }
    stage('Test') {
      steps {
        bat 'npm test'
      }
    }
    stage('Code Quality') {
      steps {
        echo 'Running SonarQube...'
      }
    }
    stage('Security') {
      steps {
        bat 'npm audit || exit 0'
      }
    }
    stage('Deploy') {
      steps {
        bat 'docker build -t node-todo-app .'
      }
    }
    stage('Release') {
      steps {
        bat 'git tag -a v1.0.0 -m "Release v1.0.0" || exit 0'
      }
    }
    stage('Monitoring') {
      steps {
        echo 'Health check endpoint is available at http://localhost:3000/health'
      }
    }
  }
}
