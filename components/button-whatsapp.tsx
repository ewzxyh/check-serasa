"use client"

import PulsatingButton from "@/components/magicui/pulsating-button";
import { SiWhatsapp } from "react-icons/si";

export function PulsatingButtonDemo() {
    const handleClick = () => {
        window.open('https://wa.me/5511999999999', '_blank');
    };

    return (
        <PulsatingButton
            onClick={handleClick}
            tabIndex={0}
            role="button"
            aria-label="Abrir WhatsApp para verificar score"
            className="cursor-pointer"
        >
            <div className="flex items-center gap-2">
                <SiWhatsapp className="w-4 h-4" />
                Verificar score
            </div>
        </PulsatingButton>
    );
}
