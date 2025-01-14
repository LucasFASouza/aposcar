import { AvatarDropdown } from "@/components/ProfileBadge";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import Link from "next/link";

const LoginButton = () => (
  <Button variant="ghost" asChild>
    <Link href="/login">Login</Link>
  </Button>
);

export const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="flex w-full max-w-[1000px] items-center justify-between p-2">
      <h1 className="text-2xl font-semibold text-primary">Aposcar</h1>
      {session && <AvatarDropdown session={session} />}
      {!session && <LoginButton />}
    </nav>
  );
};
