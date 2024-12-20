import Image from "next/image"

export default function CreditScoreLanding() {
    return (
        <div className="">
            <div className="container mx-auto pt-8 space-y-8">
                {/* Hero Section */}
                <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight px-4">
                    <span className="text-primary">Nome limpo é um </span>
                    <span className="bg-[#1D6AFF] text-background px-2">direito</span>
                    <span className="text-primary"> seu</span>
                </h1>

                {/* Stats divs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                    <div className="overflow-hidden border border-blue-500 rounded-xl py-4">
                        <div className="p-4 text-center space-y-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">+70 Milhões</h2>
                            <p className="text-muted-foreground text-sm md:text-base">
                                Pessoas com score negativo no Brasil
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden border border-blue-500 rounded-xl py-4">
                        <div className="p-4 text-center space-y-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">+7.1 mil</h2>
                            <p className="text-muted-foreground text-sm md:text-base">
                                Operações de recuperação de score realizadas
                            </p>
                        </div>
                    </div>

                    <div className="overflow-hidden sm:col-span-2 md:col-span-1 border py-4 border-blue-500 rounded-xl">
                        <div className="p-4 text-center space-y-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">30 dias</h2>
                            <p className="text-muted-foreground text-sm md:text-base">
                                Recupere seu score em 30-60 dias!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Credit Score Section */}
                <div className="px-4">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                            Score de crédito
                        </h2>
                        <div className="bg-[#1D6AFF] inline-block">
                            <h3 className="text-xl md:text-2xl font-bold text-background">
                                Por que você deve se importar?
                            </h3>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 items-center mt-6 md:-mt-24">
                        <div>
                            <div className="text-base md:text-lg">
                                <p className="mb-2">
                                    A <span className="font-bold">pontuação de crédito</span> é uma avaliação muito importante para qualquer pessoa, nas taxas de juros de pagamento, cartões concedidos e outros pontos, que classificam os consumidores em categorias quanto à{' '}
                                    <span className="font-bold">capacidade de pagamento de suas contas</span>.
                                </p>
                                <p>
                                    Com um <span className="font-bold">score de crédito</span>, mais alto você ganha{' '}
                                    <span className="font-bold">credibilidade</span> quando procura serviços financeiros.
                                </p>
                            </div>
                        </div>

                        {/* Credit Score Gauge */}
                        <div>
                            <div className="flex justify-center items-center mt-0 md:-mt-16">
                                <div className="relative w-full max-w-[450px] mx-auto aspect-square">
                                    <Image
                                        src="/score.svg"
                                        alt="Score de crédito"
                                        fill
                                        className="object-contain"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

