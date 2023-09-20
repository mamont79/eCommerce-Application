/* eslint-disable no-useless-escape */

export const saveTokenToCookie = (
  token: string,
  expiresIn: number,
  name: string
) => {
  const deadTokenDate = new Date(Date.now() + expiresIn * 1000).toUTCString();
  document.cookie = `${name}=${token}; expires=${deadTokenDate}`;
};

export const deleteMailToken = (name: string) => {
  document.cookie = `${name}=; max-age=-1`;
};

export const getTokenCookie = (name: string): string | undefined => {
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
