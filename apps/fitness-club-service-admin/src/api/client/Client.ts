import { Subscription } from "../subscription/Subscription";

export type Client = {
  contactInformation: string | null;
  createdAt: Date;
  dateOfBirth: Date | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
