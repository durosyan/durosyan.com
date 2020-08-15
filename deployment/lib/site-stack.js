const { Stack } = require('@aws-cdk/core');
const s3 = require('@aws-cdk/aws-s3');

const bucket = s3.Bucket.fromBucketArn(this, 'durosyan.com', 'arn:aws:s3:::durosyan.com');


class SiteStack extends Stack {
  constructor(scope, id, props) {
    super(this, id, props);
  }
}

module.exports = { SiteStack }
