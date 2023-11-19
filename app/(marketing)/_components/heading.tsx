"use client"

import Link from "next/link"
import { SignInButton } from "@clerk/clerk-react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/common/spinner"
import { useConvexAuth } from "convex/react"

const Heading = () => {

    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Tus Ideas, Documentos & Planes. Unificados. Bienvenido a <span className="underline">Jotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion es el espacio de trabajo todo en uno para tu equipo. <br />
                Escribe, planifica, colabora y organiza tus ideas. Todo en un solo lugar.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button
                    type="button"
                    asChild
                >
                    <Link href="/documents">
                        Empieza ahora
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Obten Jotion Gratis
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </SignInButton>
            )}

        </div>
    )
}

export default Heading