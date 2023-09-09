import { IChangeCustomerDataAction } from './customerProfileData/types';

type ICustomerChangeActions = {
  actions: IChangeCustomerDataAction[];
  addCustomerChangeAction: (newAction: IChangeCustomerDataAction) => void;
  clearActions: () => void;
};

export const customerChangeActions: ICustomerChangeActions = {
  actions: [],
  addCustomerChangeAction(newAction: IChangeCustomerDataAction) {
    this.actions.push(newAction);
  },
  clearActions() {
    this.actions.length = 0;
  },
};
