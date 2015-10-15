/**
 * @fileoverview Checks if a function will be considered as an inline function.
 * @author Aravind Srivastan
 * @copyright 2015 Aravind Srivastan. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

module.exports = {
    rules: {
        "inline-check": require('./rules/inlinecheck');
    },
    rulesConfig: {
        "inline-check": 1
    }
};
