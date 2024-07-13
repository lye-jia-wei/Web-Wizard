import AWS from 'aws-sdk';

// Configure AWS with your access and secret key.
const config = new AWS.Config({
  accessKeyId: 'ASIAUJTLG732VEHHYU75',
  secretAccessKey: 'kAiIrHqoCmbMpjmkc45IRnfPN+EoXYOxJqxm0WI0',
  region: 'us-west-2'


});

AWS.config.update(config);
