import { Button } from "~ui/button";
import Link from "next/link";
import { FC } from "react";
import { routes } from "~shared/config/routes";
import { UserButton } from "~features/auth/user-button";

const { dashboardRoute, messagesRoute, orgRoute, publicHomeRoute } = routes;

export const Masthead: FC = () => {
  return (
    <div className="flex justify-between">
      <nav>
        <ul className="flex">
          <li>
            <Button variant="link" asChild>
              <Link href={publicHomeRoute()} prefetch>
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href={dashboardRoute()} prefetch>
                Dashboard
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href={messagesRoute()} prefetch>
                Messages
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="link" asChild>
              <Link href={orgRoute()} prefetch>
                Org
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
      <div>
        <UserButton />
      </div>
    </div>
  );
};
