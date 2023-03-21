pipeline {
    agent {
        node{
            label 'my_nodejs_label'
            customWorkspace '/var/jenkins/workspace/pipeline'
            tool 'node 14.10.0'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run test'
                sh 'npm run build'
                echo 'Building'
            }
        }
        stage('Deploy') {
            steps {
                sh "aws configure set region $AWS_DEFAULT_REGION" 
                sh "aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID"  
                sh "aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY"
                sh "aws s3 cp public/index.html s3://tmotions-sudhanshu-practice"
            }
        }
    }
}

