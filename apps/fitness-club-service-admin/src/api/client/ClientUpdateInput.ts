import { SubscriptionUpdateManyWithoutClientsInput } from "./SubscriptionUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  contactInformation?: string | null;
  dateOfBirth?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  subscriptions?: SubscriptionUpdateManyWithoutClientsInput;
};
