"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { ModeToggle } from "@/components/common/mode-toggle";

const Navbar = () => {

    const scrolled = useScrollTop();

    return (
        <div className={cn(
            "bg-background dark:bg-[#1F1F1F] fixed top-0 left-0 right-0 z-50 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar