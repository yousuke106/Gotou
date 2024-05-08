import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { UserButton } from "./user-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950">
      <div className="container flex items-center justify-between py-4 px-4 md:px-6">
        <Link className="flex items-center gap-2" href="/">
          <MountainIcon className="h-6 w-6" />
          <span className="font-semibold text-lg">Acme Store</span>
        </Link>
        <div className="flex-1 max-w-md">
          <form>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full rounded-md border border-gray-200 bg-gray-100 py-2 pl-10 pr-4 text-sm focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50"
                placeholder="Search products..."
                type="search"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-4">
          <Button
            className="rounded-full border border-gray-200 w-10 h-10 dark:border-gray-800"
            size="icon"
            variant="ghost"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <div>
            <UserButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
