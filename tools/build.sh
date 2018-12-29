#!/bin/bash
echo ">>> Build Started..."

# Replace parameters with environment variables
#区切り文字'/'だとURLの中で区切られてしまうため, URLを含む場合は区切り文字を'|'にする
echo ">>> Replace parameters..."
echo ">>> Replace Function parameters..."
sed -i -e "s|@TRELLO_URL@|$TRELLO_URL|g" serverless.yml
sed -i -e "s/@TRELLO_API_KEY@/$TRELLO_API_KEY/g" serverless.yml
sed -i -e "s/@TRELLO_TOKEN@/$TRELLO_TOKEN/g" serverless.yml
echo ">>> Replace Slack Package parameters..."
sed -i -e "s|@SLACK_WEBHOOK_URL@|$SLACK_WEBHOOK_URL|g" serverless.yml
sed -i -e "s/@SLACK_APP_USER@/$SLACK_APP_USER/g" serverless.yml
sed -i -e "s/@SLACK_CHANNEL@/$SLACK_CHANNEL/g" serverless.yml

echo ">>> Build Successfully!!"
