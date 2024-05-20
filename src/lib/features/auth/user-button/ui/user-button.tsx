import { auth } from "~shared/services/auth";
import { SignInButton } from "../../signin-button";
import { SignOutButton } from "../../signout-button";
import { UserEntity } from "~entities/user";

export async function UserButton() {
  const session = await auth();
  const isSignedIn = !!session?.user;

  switch (isSignedIn) {
    case true: {
      const user = session?.user;
      if (!user) return null;

      return (
        <div className="flex space-x-2 items-center">
          <UserEntity user={user}>signed In</UserEntity>
          <SignOutButton variant="link" className="px-0" />
        </div>
      );
    }

    case false:
      return (
        <>
          <SignInButton />
        </>
      );
  }
}
