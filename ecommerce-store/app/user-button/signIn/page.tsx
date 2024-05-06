import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MountainIcon } from "@/app/component/header";

export default function SignIn() {
  return (
    <div className="mt-5">
      <div className="flex justify-center mb-6">
        <Link className="bg-gray-900 dark:bg-gray-50 p-4 rounded-full" href="/">
          <MountainIcon className="h-8 w-8 text-white dark:text-gray-900" />
        </Link>
      </div>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign in</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  className="ml-auto inline-block text-sm underline"
                  href="#"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
            <Button className="w-full" variant="outline">
              Login with GitHub
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don't have an account?
            <Link className="underline" href="/user-button/signUp">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
