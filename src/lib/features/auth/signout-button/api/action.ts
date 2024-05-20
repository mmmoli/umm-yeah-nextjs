"use server";

import { signOut } from "~shared/services/auth";

export const formAction = async () => {
  await signOut();
};
