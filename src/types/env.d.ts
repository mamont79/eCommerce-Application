/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_APP_CTP_PROJECT_KEY: string;
  readonly VITE_REACT_APP_CTP_CLIENT_SECRET: string;
  readonly VITE_REACT_APP_CTP_CLIENT_ID: string;
  readonly VITE_REACT_APP_CTP_AUTH_URL: string;
  readonly VITE_REACT_APP_CTP_API_URL: string;
  readonly VITE_REACT_APP_CTP_SCOPES: string;
  readonly VITE_REACT_APP_COMMENTED_REQUIRED_VALUE: unknown;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
