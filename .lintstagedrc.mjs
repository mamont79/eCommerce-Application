export default {
  '*.{tsx,ts}': [
    'eslint --report-unused-disable-directives --max-warnings 0 --fix',
    'prettier --write',
  ],
};
