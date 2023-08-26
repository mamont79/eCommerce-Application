import { catalogProducts } from '../../api/catalog';
import { StyledBtn } from '../../components/styledBtn';

export default function Catalog() {
  return (
    <div>
      <h1>Catalog</h1>
      <StyledBtn onClick={catalogProducts}>Get Catalog</StyledBtn>
    </div>
  );
}
