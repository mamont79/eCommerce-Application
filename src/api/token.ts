type IStoredToken = {
  value: string;
  timeStamp: number;
};

const TOKEN_KEY = 'auth_token';

const TOKEN_TIME_S = 172800 * 1000;

export const isExpired = (timeStamp?: number): boolean => {
  if (!timeStamp) return false;

  const now = new Date().getTime();
  const diff = now - timeStamp;

  return diff > TOKEN_TIME_S;
};

export const setToken = (access_token: string): void => {
  localStorage.setItem(
    TOKEN_KEY,
    JSON.stringify({
      value: access_token,
      timeStamp: new Date().getTime(),
    })
  );
};

export const removeToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = (): IStoredToken | null => {
  let result = null;

  const storedToken = localStorage.getItem(TOKEN_KEY);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  storedToken && (result = JSON.parse(storedToken));

  return result;
};
