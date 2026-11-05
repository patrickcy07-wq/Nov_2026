console.log("CUCUMBER CONFIG LOADED");

requireModule: [
    'ts-node/register',
    'dotenv/config'
],

module.exports = {
    default: {
        paths: ['Features/Orange.feature'],

        requireModule: [
            'ts-node/register',
            'dotenv/config'
        ],

        require: [
            './Features/StepDefinition/Hooks.ts',
            './Features/StepDefinition/OrangeHRM.steps.ts',
             './Features/StepDefinition/Leave.steps.ts'
           
        ],

        format: ['progress', 'summary']


        
    }
};