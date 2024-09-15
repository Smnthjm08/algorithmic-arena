"use client";

import Link from "next/link";
import { signOut, useSession, signIn } from "next-auth/react";
import { Button } from "@repo/ui/button";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export function Appbar() {
  const { data: session, status: sessionStatus } = useSession();
  const isLoading = sessionStatus === "loading";
  const router = useRouter(); // Initialize the router

  return (
    <header className="bg-background border-b px-4 md:px-6 py-3 flex items-center border-gray-800 text-white justify-between">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <div className="flex flex-col justify-center">
          <div className="text-lg font-bold">algorithmic</div>
          <div className="text-blue-500 font-medium">arena</div>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-6">
        {/* <Link href="/contests" className="hover:underline" prefetch={false}>
          Contests
        </Link>
        <Link href="/problems" className="hover:underline" prefetch={false}>
          Problems
        </Link>
        <Link href="/standings" className="hover:underline" prefetch={false}>
          Standings
        </Link> */}
      </nav>

      {!isLoading && session?.user && (
        <div className="flex items-center gap-4">
          <div className="gap-4 w-[273px] space-x-4">
            <Link onClick={() => signOut()} href="/" className="font-medium text-blueGray-500">Problems</Link>
            <Link onClick={() => signOut()} href="/" className="font-medium text-blueGray-500">Contests</Link>
            <Link onClick={() => signOut()} href="/" className="font-medium text-blueGray-500">Leaderboard</Link>
          </div>
          {/* <div className="flex items-center gap-4"> */}
          <ModeToggle />
          <Image className="hidden md:flex" src="/Avatar.png" alt="avatar" width="40" height="40" />
        </div>
      )}

      {!isLoading && !session?.user && (
        <div className="flex items-center gap-4 ">
          <ModeToggle />
          <Button variant="secondary" onClick={() => router.push('/login')}  className="text-white">Login</Button>
          <Button
            variant="secondary"
            onClick={() => router.push('/signup')} // Redirect to sign-up page
            className="bg-blue-600 text-white"
          >
            Sign Up Now
          </Button>
        </div>
      )}

      {isLoading && <div className="flex items-center gap-4"></div>}
    </header>
  );
}
