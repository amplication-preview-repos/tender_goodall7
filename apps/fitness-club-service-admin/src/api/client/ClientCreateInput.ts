import { SubscriptionCreateNestedManyWithoutClientsInput } from "./SubscriptionCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  contactInformation?: string | null;
  dateOfBirth?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutClientsInput;
};
