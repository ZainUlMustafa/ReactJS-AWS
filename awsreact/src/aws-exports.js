const awsconfig = {
  Auth: {
    Cognito: {
      userPoolClientId: '7j5f51ci7gv1s3reoj2bi55gof',
      userPoolId: 'us-east-1_pw6B1Dl6m',
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
      bucket: "your-bucket-name",
      region: "us-east-1",
    },
  },
};

export default awsconfig;
