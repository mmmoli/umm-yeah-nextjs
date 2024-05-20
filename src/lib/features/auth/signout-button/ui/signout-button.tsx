import { FC } from "react";
import { Button, ButtonProps } from "~ui/button";
import { formAction } from "../api/action";

interface SignOutButtonProps extends ButtonProps {}

export const SignOutButton: FC<SignOutButtonProps> = ({
  children = "Sign out",
  ...props
}) => {
  return (
    <form action={formAction}>
      <Button {...props} type="submit">
        Sign out
      </Button>
    </form>
  );
};
