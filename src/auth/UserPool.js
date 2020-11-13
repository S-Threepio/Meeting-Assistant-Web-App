import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_couTSIkws',
  ClientId: '17q3gbu3nni29r5htdu7di2ad1'
};

export default new CognitoUserPool(poolData);