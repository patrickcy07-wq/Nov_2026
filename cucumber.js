console.log("CUCUMBER CONFIG LOADED");

requireModule: [
    'ts-node/register',
    'dotenv/config'
],

module.exports = {
    default: {
        paths: ['Features/Orange.feature'],
        paths: ['Features/Leave.feature'],

        requireModule: [
            'ts-node/register',
            'dotenv/config'
        ],

        paths: [
    'Features/Orange.feature',
    'Features/Leave.feature',
    'Features/PIM.feature'
],

require: [
    './Features/StepDefinition/Hooks.ts',
    './Features/StepDefinition/OrangeHRM.steps.ts',
    './Features/StepDefinition/Leave.steps.ts',
    './Features/StepDefinition/PIM.steps.ts'
],
        format: ['progress', 'summary']


        
    }
};