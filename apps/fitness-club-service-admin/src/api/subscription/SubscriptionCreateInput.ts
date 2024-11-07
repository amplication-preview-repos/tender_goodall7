import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type SubscriptionCreateInput = {
  client?: ClientWhereUniqueInput | null;
  cost?: number | null;
  endDate?: Date | null;
  startDate?: Date | null;
  typeField?: string | null;
};
