/* eslint-disable */
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: LicenseRef-.amazon.com.-AmznSL-1.0
// Licensed under the Amazon Software License  http://aws.amazon.com/asl/

const awsparams = {
    "aws_project_region": "us-east-1",
    "aws_cloud_logic_custom": [
        {
            "name": "AmplifyWebApp",
            "endpoint": "https://01ptyff1u3.execute-api.us-east-1.amazonaws.com/dev1",
            "region": "us-east-1"
        }
    ],
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_KFgrlNoux",
    "aws_user_pools_web_client_id": "1c749blb7gogsmndlq7ucv3thf",
    "oauth": {},
    "app_linking": {
        "COGNITO_AUTH_URL": 'Value for your Cognito Authorization URL',
        "LWA_CLIENT_ID": 'Value for LWA Client ID',
        "COGNITO_ALEXA_APP_CLIENT_ID": 'Value for Cognito Alexa App Client ID',
        "WEB_APP_URL": 'Value for Web App URL'
    }
};


export default awsparams;
