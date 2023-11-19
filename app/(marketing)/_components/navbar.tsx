"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { useConvexAuth } from "convex/react"
import { SignInButton, UserButton } from '@clerk/clerk-react'

import { ModeToggle } from "@/components/common/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/common/spinner";

import { cn } from "@/lib/utils";
import Logo from "./logo";
import Link from "next/link";

const Navbar = () => {

    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "bg-background dark:bg-[#1F1F1F] fixed top-0 z-50 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner />
                )}
                {
                    !isAuthenticated && !isLoading && (
                        <>
                            <SignInButton mode="modal">
                                <Button variant="ghost" size='sm'>
                                    Iniciar Sesión
                                </Button>
                            </SignInButton>
                            <SignInButton mode="modal">
                                <Button size='sm'>
                                    Obtener Jotion Gratis
                                </Button>
                            </SignInButton>
                        </>
                    )
                }
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href='/documents'>
                                Enter Jotion
                            </Link>
                        </Button>
                        <UserButton
                            afterSignOutUrl="/"
                        />
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar