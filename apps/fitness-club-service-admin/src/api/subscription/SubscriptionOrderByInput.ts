import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  clientId?: SortOrder;
  cost?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
