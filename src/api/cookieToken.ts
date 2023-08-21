/* eslint-disable no-useless-escape */

export const saveTokenToCookie = (token: string, expiresIn: number) => {
  const deadTokenDate = new Date(Date.now() + expiresIn * 1000).toUTCString();
  document.cookie = `access_token=${token}; expires=${deadTokenDate}`;
};

export const getTokenCookie = (name: string) => {
  const matches = document.cookie.match(
    new RegExp(
      `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
