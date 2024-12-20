import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Scan, Briefcase, Shield, CreditCard, Award, WandSparkles } from 'lucide-react'

export default function ServicesSection() {
    return (
        <div className="w-full px-4 py-12 bg-background">
            <div className="container mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <p className="text-primary mb-2">Confira</p>
                    <h2 className="text-primary text-3xl md:text-4xl font-black tracking-tight">Nossos serviços</h2>
                </div>

                {/* Main Services */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <Card className="bg-card">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-4">
                                <WandSparkles className="w-6 h-6 text-[#0066FF]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">Limpa Nome</h3>
                            <p className="text-muted-foreground">
                                Após a análise é possível retirar todos os protestos e dívidas da consulta, ficando entre cliente e empresa apenas. Tudo isso de{" "}
                                <span className="font-semibold">forma rápida, segura e dentro da Lei</span>, usando nosso{" "}
                                <span className="font-semibold">Método Único</span>.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card">
                        <CardContent className="p-6">
                            <div className="w-12 h-12 border rounded-lg flex items-center justify-center mb-4">
                                <Scan className="w-6 h-6 text-[#0066FF]" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-primary">Consulta Raio-X</h3>
                            <p className="text-muted-foreground">
                                Faça uma pesquisa completa para seu cliente, entendendo quais são as dívidas e protestos do CPF/CNPJ.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Advantages Section */}
                <div className="text-center py-12">
                    <h2 className="text-white text-2xl md:text-3xl font-black inline-block px-6 py-2 bg-[#0066FF]">
                        Vantagens para você:
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((advantage, index) => (
                        <Card key={index} className="bg-card">
                            <CardContent className="p-6 text-center">
                                <div className="w-12 h-12 mx-auto border rounded-sm flex items-center justify-center mb-4">
                                    {advantage.icon}
                                </div>
                                <CardTitle className="mb-4 text-lg min-h-[3rem] flex items-center justify-center">
                                    {advantage.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">{advantage.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

const advantages = [
    {
        icon: <Briefcase className="w-6 h-6 text-[#0066FF]" />,
        title: "Mais chances de ser contratado",
        description:
            "Muitos empregadores consultam o histórico de crédito dos candidatos durante o processo de contratação. Elimine registros negativos que poderiam prejudicar suas chances de conseguir um emprego.",
    },
    {
        icon: <Shield className="w-6 h-6 text-[#0066FF]" />,
        title: "Blindagem de CPF e CNPJ",
        description:
            "A blindagem do seu CPF ou do CNPJ é uma estratégia inteligente para prevenir apontamentos negativos nos órgãos de proteção ao crédito. Duração de 12 meses.",
    },
    {
        icon: <CreditCard className="w-6 h-6 text-[#0066FF]" />,
        title: "Recupere seu crédito",
        description:
            "Ao limpar o nome de forma judicial, é possível reabilitar seu histórico de crédito, o que abre portas para obter empréstimos, financiamentos e cartões de crédito com taxas de juros mais baixas.",
    },
    {
        icon: <Award className="w-6 h-6 text-[#0066FF]" />,
        title: "Restabelecimento da Reputação",
        description:
            "Ao limpar o nome de forma judicial, você demonstra comprometimento em resolver suas pendências financeiras, o que reflete positivamente em sua imagem.",
    },
]

