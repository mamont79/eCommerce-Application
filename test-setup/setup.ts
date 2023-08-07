import '@testing-library/jest-dom';
import { vi, beforeAll } from 'vitest';
import 'vi-fetch/setup';
import { prepareFetch, createMockApi, mockFetch } from 'vi-fetch';

// global.fetch = vi.fn((url) => {  // This is a way to simulate server requests.
//   return Promise.resolve({       // It's OK for js, but not OK for TS.
//     json: () => {                // Maybe it is worth considering to rename file to JS
//       console.log(`              // or to substitute server requests in a different way.
//       =======>
//       =======>
//       ${url}
//       =======>
//       =======>
//       `);
//       return Promise.resolve({});
//     },
//   });
// });

// beforeAll(() => {
//   prepareFetch(global, 'fetch');
// });

// beforeEach(() => {
//   mockFetch.clearAll();
// });
