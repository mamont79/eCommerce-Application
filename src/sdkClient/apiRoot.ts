import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ctpClient } from './BuildClient';
import { CTP_PROJECT_KEY } from '../constants/commerceApi';

// Create apiRoot from the imported ClientBuilder and include your Project key
const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: CTP_PROJECT_KEY,
});

// Example call to return Project information
// This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
export const getProject = () => apiRoot.get().execute();

export const createCustomer = () =>
  apiRoot
    .customers()
    .post({
      // The CustomerDraft is the object within the body
      body: {
        email: 'paululul@gmail.com',
        firstName: 'Paul',
        lastName: 'Lol',
        password: 'Paul=Lol123',
      },
    })
    .execute();
