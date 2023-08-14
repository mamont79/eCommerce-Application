export default function changePasswordVisibility(
  e: React.MouseEvent<HTMLDivElement>
) {
  const passwordVisibility = (
    (e.target as HTMLElement).previousSibling as HTMLInputElement
  ).type;

  ((e.target as HTMLElement).previousSibling as HTMLInputElement).type =
    passwordVisibility === 'text' ? 'password' : 'text';
  (e.target as HTMLElement).classList.toggle('visible');
}
