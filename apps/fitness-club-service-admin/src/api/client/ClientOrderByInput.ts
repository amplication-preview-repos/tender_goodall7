import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  contactInformation?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
