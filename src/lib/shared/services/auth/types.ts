import { Session } from "next-auth";

export type AuthedNextRequest<T> = T & {
  auth: Session | null;
};
