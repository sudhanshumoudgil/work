pipeline {
    agent any
    stages {
        stage('deploy') {
            steps {
              sh "aws configure set region $us-east-2" 
              sh "aws configure set aws_access_key_id $AKIAYO6B4FIPHNZQQNUC"  
              sh "aws configure set aws_secret_access_key $PzR0KI1B24jYgR6d7M9+6AkM8Ae6KxCZOyzvg3Tr"
              sh "aws s3 cp Code/index.html s3://tmotions-sudhanshu-practice"
            }
        }
    }
}
