import { Client } from "../client/Client";

export type Subscription = {
  client?: Client | null;
  cost: number | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  typeField: string | null;
  updatedAt: Date;
};
