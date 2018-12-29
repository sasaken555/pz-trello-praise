#!/bin/bash
echo ">>> Build Started..."

echo ">>> Install dependencies..."
npm install

# Replace parameters with environment variables
echo ">>> Replace parameters..."
echo ">>> Replace Function parameters..."
sed -i "s/@TRELLO_URL@/$TRELLO_URL/" serverless.yml
sed -i "s/@TRELLO_API_KEY@/$TRELLO_API_KEY/" serverless.yml
sed -i "s/@TRELLO_TOKEN@/$TRELLO_TOKEN/" serverless.yml
echo ">>> Replace Slack Package parameters..."
sed -i "s/@SLACK_WEBHOOK_URL@/$SLACK_WEBHOOK_URL/" serverless.yml
sed -i "s/@SLACK_APP_USER@/$SLACK_APP_USER/" serverless.yml
sed -i "s/@SLACK_CHANNEL@/$SLACK_CHANNEL/" serverless.yml

echo ">>> Build Successfully!!"
