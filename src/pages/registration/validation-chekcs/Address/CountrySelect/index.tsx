import CustomSelect from './style';

export default function CountrySelect({
  setCountry,
}: {
  setCountry: (a: string) => void;
}) {
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value;
    setCountry(newCountry);
  };

  const baseElement = (
    <CustomSelect defaultValue="" onInput={handleCountryChange}>
      <option value="" hidden disabled>
        Country
      </option>
      <option value="us">United States</option>
      <option value="au">Australia</option>
      <option value="de">Germany</option>
      <option value="es">Spain</option>
    </CustomSelect>
  );

  return baseElement;
}
