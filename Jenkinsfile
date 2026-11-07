
pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    environment {
        NODE_OPTIONS = '--max-old-space-size=4096'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Cucumber Tests') {
            steps {
                bat 'npm run test:cucumber'
            }
        }
    }

    post {
        always {
            echo 'Playwright Cucumber execution completed'
        }
    }
}
