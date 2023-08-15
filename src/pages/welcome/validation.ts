function validationEmail(value: string): string {
  if (!value) {
    return 'required';
  }
  if (
    !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i.test(
      value
    )
  ) {
    return 'you invalid';
  }
  return '';
}

export default validationEmail;
