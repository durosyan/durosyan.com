#!/usr/bin/env node

const { App } = require('@aws-cdk/core');
const { SiteStack } = require('../lib/site-stack');

const app = new App();
new SiteStack(app, 'personal-site');
