import { signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export function Github({
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
        Sign up with GitHub
      </Button>
    </form>
  );

  revalidatePath("/");
  redirect("/");
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
      Sign out
    </form>
  );

  revalidatePath("/");
  redirect("/");
}
