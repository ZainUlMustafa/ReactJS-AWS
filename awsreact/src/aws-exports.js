const awsconfig = {
  Auth: {
    Cognito: {
      // region: 'us-east-1',
      userPoolClientId: '7j5f51ci7gv1s3reoj2bi55gof',
      userPoolId: 'us-east-1_pw6B1Dl6m',
      identityPoolId: 'us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      loginWith: { // Optional
        oauth: {
          domain: 'parados-users-1.auth.us-east-1.amazoncognito.com',
          scopes: ['openid','email','phone','profile','aws.cognito.signin.user.admin'],
          redirectSignIn: ['http://localhost:3000/','https://example.com/'],
          redirectSignOut: ['http://localhost:3000/','https://example.com/'],
          responseType: 'code',
        },
        username: 'true',
        email: 'false', // Optional
        phone: 'false', // Optional
      }
    }
  },
  storage: {
    AWSS3: {
      bucket: "test-bucket-access-parados",
      region: "us-east-1",
    },
  },
};

export default awsconfig;
