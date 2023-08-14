import StyledInput from '../../components/styledInput';

export default function CustomRegistrationInput({
  $maxWidth,
  placeholder,
  type,
  onInput,
}: {
  $maxWidth?: string;
  placeholder?: string;
  type: string;
  onInput: React.ChangeEventHandler<HTMLInputElement>;
}) {
  const input = (
    <StyledInput
      $maxWidth={$maxWidth}
      placeholder={placeholder}
      type={type}
      onInput={onInput}
    />
  );
  return input;
}

CustomRegistrationInput.defaultProps = {
  placeholder: '',
  $maxWidth: '',
};
