#!/bin/bash
echo ">>> Deploy Started..."

echo ">>> LogIn to IBM Cloud...."
ibmcloud --version
ibmcloud login --apikey $API_KEY -a api.ng.bluemix.net -o "$ORG" -s "$SPACE"

echo ">>> Install Serverless packages globally..."
npm install -g serverless serverless-openwhisk

echo ">>> Deploy functions/resources via Serverless..."
npm list -g --depth=0 | grep "serverless"
serverless deploy -v

echo ">>> Deploy functions/resources Successfully!!"
