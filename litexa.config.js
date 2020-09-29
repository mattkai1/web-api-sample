/*
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *  Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

'use strict';

module.exports = {
    name: 'webapi-sample',
    deployments: {
        development: {
            module: '@litexa/deploy-aws',
            // See details here: https://litexa.com/get-started/deploying.html#deploying-the-skill
            s3Configuration: {
                // Pick a unique bucket name to store your experience
                bucketName: null
            },
            // Complete https://litexa.com/get-started/deploying.html#deployment-prerequisites to fill these out.
            // If you've completed the prerequisites, you can find info on how to look these up here: https://developer.amazon.com/en-US/docs/alexa/smapi/manage-credentials-with-ask-cli.html
            askProfile: null,
            awsProfile: null,
        }
    },
    extensionOptions: {}
};
