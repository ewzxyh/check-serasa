import { Button } from "@/components/ui/button"
import { BarChart2 } from "lucide-react"
import { SiWhatsapp } from "react-icons/si"

export function Footer() {
    return (
        <footer className="bg-white pt-8 pb-8">
            <div className="container">

                {/* Footer content and CTA */}
                <div className="grid md:grid-cols-2 gap-8 py-12 border-t">
                    {/* Brand info and links */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <BarChart2 className="w-8 h-8 text-[#0066FF]" />
                            <span className="text-3xl font-black">Check Serasa</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-6">
                            Copyright 2024 Check Serasa. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center gap-8">
                            {/* <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors"
                                aria-label="Política de Privacidade"
                            >
                                Política de Privacidade
                            </a>
                            <a
                                href="#"
                                className="text-sm text-gray-600 hover:text-[#0066FF] transition-colors"
                                aria-label="Termos e Condições"
                            >
                                Termos e Condições
                            </a> */}
                            <p className="text-sm text-gray-500">
                                Desenvolvido por{" "}
                                <a
                                    href="https://ewzxyh.dev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0066FF] hover:underline"
                                    aria-label="Visitar Ewzxyh Studios"
                                >
                                    Ewzxyh Studios
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="rounded-2xl p-8 border">
                        <h3 className="text-2xl font-bold mb-4">
                            Consulte seu score agora
                        </h3>
                        <p className="text-neutral-800 mb-6">
                            Tenha acesso instantâneo ao seu score e histórico creditício.
                            Tome decisões financeiras mais inteligentes com informações
                            precisas e atualizadas.
                        </p>
                        <Button
                            className="bg-[#0066FF] hover:bg-[#0066FF]/90 w-fit"
                            aria-label="Verificar seu score"
                        >
                            <SiWhatsapp className="w-4 h-4" />
                            Verificar score
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}