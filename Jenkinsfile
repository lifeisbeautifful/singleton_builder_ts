pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.42.1-jammy' } }
   stages {

      stage('Update playwright') {
         steps {
            sh 'npm i -D @playwright/test'
            sh 'npx playwright install'
         }
      }

      stage('test') {
         steps {
            sh 'npm run tests'
         }
      }
   }
}