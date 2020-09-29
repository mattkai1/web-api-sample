/*
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 *  Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *  SPDX-License-Identifier: Apache-2.0
 *  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

'use strict';

module.exports = {
    manifest: {
        publishingInformation: {
            isAvailableWorldwide: false,
            distributionCountries: ['US'],
            distributionMode: 'PUBLIC',
            category: 'GAMES',
            testingInstructions: 'replace with testing instructions',
            locales: {
                'en-US': {
                    name: 'Web Sample',
                    invocation: 'skill challenge winner',
                    summary: 'replace with brief description, no longer than 120 characters',
                    description: 'Longer description, goes to the skill store. Line breaks are supported.',
                    examplePhrases: [
                        'Alexa, launch skill challenge winner',
                        'Alexa, open skill challenge winner',
                        'Alexa, play skill challenge winner',
                    ],
                    keywords: [
                        'game',
                        'fun',
                        'single player',
                        'winner'
                    ]
                }
            }
        },
        privacyAndCompliance: {
            allowsPurchases: false,
            usesPersonalInfo: false,
            isChildDirected: false,
            isExportCompliant: true,
            containsAds: false,
            locales: {
                'en-US': {
                    privacyPolicyUrl: 'https://www.example.com/privacy.html',
                    termsOfUseUrl: 'https://www.example.com/terms.html'
                }
            }
        }
    }
};
