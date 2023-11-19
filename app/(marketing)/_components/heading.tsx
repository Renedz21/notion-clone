"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Tus Ideas, Documentos & Planes. Unificados. Bienvenido a <span className="underline">Jotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion es el espacio de trabajo todo en uno para tu equipo. <br />
                Escribe, planifica, colabora y organiza tus ideas. Todo en un solo lugar.
            </h3>
            <Button
                type="button"
            >
                Empieza ahora
                <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        </div>
    )
}

export default Heading