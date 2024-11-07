import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "typeField";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.typeField?.toString() || String(record.id);
};
