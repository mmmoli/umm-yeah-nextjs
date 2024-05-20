import { FC, ReactNode } from "react";
import { UserModel } from "../model/user-model";

export type UserEntityProps = {
  children?: ReactNode;
  user: UserModel;
};

export const UserEntity: FC<UserEntityProps> = ({ user }) => {
  const name = user.name ?? user.email;
  return <div>{name}</div>;
};
