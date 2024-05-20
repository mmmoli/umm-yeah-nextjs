"use client";

import { signIn } from "next-auth/react";
import { FC, useCallback, useState } from "react";
import { Button } from "~ui/button";

export const SignInButton: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = useCallback(() => {
    setIsLoading(true);
    signIn("github");
  }, []);
  return (
    <Button disabled={isLoading} onClick={handleClick}>
      Sign In {isLoading ? "…" : null}
    </Button>
  );
};
