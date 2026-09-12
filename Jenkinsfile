pipeline{
    agent any

    stages{
        
        stage('Checkout'){
            steps{
                checkout scm
            }
        }

        stage('Install'){
            steps{
                sh 'npm ci'
            }
        }

        stage('Test'){
            steps{
                sh 'npm test'
            }
        }
    }
}