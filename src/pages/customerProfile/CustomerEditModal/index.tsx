import { BodyBlinder } from '../../../components/BodyBlinder';
import {
  CustomerPersonalDataEditor,
  CustomerEditProps,
} from './CustomerEditForm';

export function CustomerEditModal({
  cancelEdit,
  customerOldData,
}: CustomerEditProps) {
  return (
    <BodyBlinder>
      <CustomerPersonalDataEditor
        cancelEdit={cancelEdit}
        customerOldData={customerOldData}
      />
    </BodyBlinder>
  );
}
