import { BarChart2, PieChart, Users, Target, UserCircle, Building2 } from 'lucide-react'
import CreditScoreLanding from './score'
import Image from 'next/image'
import { PulsatingButtonDemo } from './button-whatsapp'

export function FeaturesGrid() {
  const features = [
    {
      title: "Score",
      icon: BarChart2,
      description: "Um score de crédito ou score de crédito é uma avaliação em forma de número que reflete uma pessoa ou devedor, sobre a possibilidade de você pagar o crédito na próxima solicitação de empréstimo."
    },
    {
      title: "Benefício",
      icon: PieChart,
      description: "Seu score de crédito pode determinar quanto seu empréstimo e solicitação de cartão de crédito são aprovados. Além disso, com um score de crédito, você tem a liberdade de escolher o banco e o credor que oferece a melhor oferta."
    },
    {
      title: "Entenda seu score",
      icon: Target,
      description: "O score de crédito pode ser complicado. Mas não precisa ser. Aprender comportamentos responsáveis com o crédito pode te ajudar a alcançar seus objetivos. Descubra o que está no seu relatório de crédito da Equifax, como seus scores são calculados e como se manter no caminho certo em sua jornada de crédito."
    },
    {
      title: "Alcance seus objetivos financeiros",
      icon: Users,
      description: "A vida é uma série de marcos, e quando se trata de finanças, conhecimento é o seu maior e mais valioso ativo. Se você está planejando comprar uma casa, adquirir um carro ou solicitar um empréstimo, descubra o que potenciais credores estão procurando."
    },
    {
      title: "Score pessoal",
      icon: UserCircle,
      description: "O score de crédito pessoal é a aplicação de previsão de risco financeiro. Torna-se um desafio ainda mais importante à medida que instituições financeiras enfrentam uma série de competições e desafios."
    },
    {
      title: "Score empresarial",
      icon: Building2,
      description: "Cada empresa é única, e cada interação com o cliente é uma proposta altamente personalizada 1:1. Mas em cada caso, nosso objetivo é simples: Trabalhar com nossos clientes para criar soluções de dados que são tão pessoais quanto lucrativas em cada ponto do seu caminho de cliente."
    }
  ]

  return (
    <section>
      <div className="container">
        <CreditScoreLanding />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border group hover:border-[#0066FF] transition-colors flex flex-col h-full">
              <div className="flex-1">
                <feature.icon className="w-10 h-10 text-[#0066FF] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Score section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center py-14">
          <h2 className="text-4xl md:text-4xl font-bold">
            Seu score é calculado junto com nosso parceiro confiável:

            <div className="flex items-center gap-3 mt-4">
              <Image
                src="/serasa.svg"
                alt="Serasa Logo"
                width={45}
                height={45}
                className="object-contain border rounded-full p-1"
              />
              <span className="text-blue-700 font-bold text-3xl md:text-4xl">Serasa Experian</span>
            </div>
          </h2>
          <div className="flex flex-col gap-6">
            <p className="text-gray-600">
              A vida é uma série de marcos, e quando se trata de finanças,
              a informação é o seu maior e mais valioso ativo.
            </p>
            <div className="flex gap-4">
              <PulsatingButtonDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

