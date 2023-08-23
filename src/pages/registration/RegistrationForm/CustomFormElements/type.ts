export type IRegistrationPageCheckboxProps = {
  label: string | JSX.Element;
  name: string;
  disabled?: boolean;
  checked?: boolean;
  handleClick?: () => void | null;
};
