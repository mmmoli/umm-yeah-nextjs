"use client";

import { dashboardRoute } from "@/lib/shared/config/routes";
import { signIn } from "next-auth/react";
import { FC, useCallback, useState } from "react";
import { Button, ButtonProps } from "~ui/button";

export interface SignInButtonProps extends ButtonProps {
  callbackUrl?: string;
}

export const SignInButton: FC<SignInButtonProps> = ({
  callbackUrl = dashboardRoute(),
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = useCallback(() => {
    setIsLoading(true);
    signIn(undefined, {
      callbackUrl,
    });
  }, [callbackUrl]);
  return (
    <Button {...props} disabled={isLoading} onClick={handleClick}>
      Sign In {isLoading ? "…" : null}
    </Button>
  );
};
