#!/bin/bash
echo ">>> Build Started..."

echo ">>> Install dependencies..."
npm install

# Replace parameters with environment variables
echo ">>> Replace parameters..."
echo ">>> Replace Function parameters..."
sed -i -e "s/@TRELLO_URL@/$TRELLO_URL/g" serverless.yml
sed -i -e "s/@TRELLO_API_KEY@/$TRELLO_API_KEY/g" serverless.yml
sed -i -e "s/@TRELLO_TOKEN@/$TRELLO_TOKEN/g" serverless.yml
echo ">>> Replace Slack Package parameters..."
sed -i -e "s/@SLACK_WEBHOOK_URL@/$SLACK_WEBHOOK_URL/g" serverless.yml
sed -i -e "s/@SLACK_APP_USER@/$SLACK_APP_USER/g" serverless.yml
sed -i -e "s/@SLACK_CHANNEL@/$SLACK_CHANNEL/g" serverless.yml

echo ">>> Build Successfully!!"
