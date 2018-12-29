#!/bin/bash
echo ">>> Deploy Started..."

echo ">>> LogIn to IBM Cloud...."
ibmcloud --version
ibmcloud login --apikey $API_KEY -a api.ng.bluemix.net -o "$ORG" -s "$SPACE"
ibmcloud fn property get --auth

echo ">>> Install Serverless packages globally..."
npm install -g serverless serverless-openwhisk

echo ">>> Install dependencies..."
npm install

echo ">>> Deploy functions/resources via Serverless..."
serverless deploy -v

echo ">>> Deploy functions/resources Successfully!!"
