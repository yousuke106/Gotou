import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button className="w-full" variant="outline">
        Sign in with GitHub
      </Button>
    </form>
  );
}

export function SignOut({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button className="w-full p-0" variant="ghost" {...props}>
        Sign out
      </Button>
    </form>
  );
}
