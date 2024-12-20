/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button"
import { SiWhatsapp } from "react-icons/si"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { JSX } from "react"

const faqItems: Array<{
    question: string;
    answer: string | JSX.Element;
}> = [
        {
            question: "Meu score irá aumentar após limparem o meu nome?",
            answer: "Com certeza sim, porém não podemos afirmar para quanto, pois isso não depende de nós. O Serasa é obrigado a subir o seu score assim que o nome fique limpo. O que te garantimos é que seu nome estará limpo."
        },
        {
            question: "Vocês pagarão minhas contas e eu pagarei parcelado?",
            answer: "Não pagamos e nem negociamos suas dívidas. Limpamos o seu nome porque é proibido por lei uma empresa expô-lo nos órgãos de proteção ao crédito. Sendo assim, você terá o seu nome limpo e seus créditos reestabelecidos. No momento adequado, com calma e no seu tempo você irá negociar suas dívidas."
        },
        {
            question: "Isso não é um golpe?",
            answer: "De forma alguma. Já trabalhamos com este mercado há 4 anos e somos muito sérios no que fazemos. Se preferir poderá realizar esse processo pessoalmente."
        },
        {
            question: "Quanto tempo demora para me enviar o resultado da minha consulta e orçamento?",
            answer: "No máximo 1 dia útil."
        },
        {
            question: "Quanto tempo de garantia no serviço eu tenho?",
            answer: "12 meses em contrato."
        },
        {
            question: "Tem chance destas minhas dívidas voltarem aparecer no Serasa?",
            answer: "Não, dentro do período de 12 meses. Mas se por algum problema voltar, refazemos o processo sem custo algum para o período negociado no contrato."
        },
        {
            question: "Depois de 12 meses as dívidas voltam a aparecer?",
            answer: "Normalmente não, mas se você fizer novas dívidas e elas não forem pagas, estas novas dívidas aparecerão com certeza."
        },
        {
            question: "Vocês só fazem este trabalho com CPF?",
            answer: "Fazemos em CPF e CNPJ."
        },
        {
            question: "Quais são as leis que amparam este serviço?",
            answer: (
                <>
                    <p className="font-semibold mb-4">
                        AMPARO LEGAL
                    </p>
                    <p className="mb-4">
                        Nossos especialistas utilizam ferramentas judiciais levando em consideração o Código de Defesa do Consumidor para excluir seus apontamentos direcionados ao seu CPF ou CNPJ.
                    </p>

                    <p className="mb-4">
                        Abaixo temos alguns textos de leis aos quais consideramos importantes e dentre outros que utilizamos:
                    </p>

                    <div className="space-y-4">
                        <div>
                            <p className="font-medium">A Lei Civil, ao abordar o tema, em seu art. 17, proíbe a utilização desmedida e inapropriada do nome:</p>
                            <p className="pl-4 mt-2 italic">
                                "Art. 17. O nome da pessoa não pode ser empregado por outrem em publicações ou representações que a exponham ao desprezo público, ainda quando não haja intenção difamatória."
                            </p>
                        </div>

                        <p>
                            A Carta Magna elenca dentre os direitos fundamentais do homem, o direito à resposta, proporcional ao agravo com a posterior reparação dos danos materiais, morais ou à imagem, bem como a proteção à vida privada, à honra e à intimidade da pessoa.
                        </p>

                        <div>
                            <p className="font-medium">Art. 5º</p>
                            <p className="mb-4">
                                Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade, nos termos seguintes:
                            </p>

                            <ul className="space-y-2 pl-4">
                                <li>
                                    <span className="font-medium">V</span> – e assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem;
                                </li>
                                <li>
                                    <span className="font-medium">X</span> – são invioláveis a intimidade, a vida privada, a honra e a imagem das pessoas, assegurado o direito a indenização pelo dano material ou moral decorrente de sua violação;
                                </li>
                                <li>
                                    <span className="font-medium">LXXII</span> – conceder-se-á habeas data:
                                    <ul className="pl-4 mt-2 space-y-2">
                                        <li>a) para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público;</li>
                                        <li>b) para a retificação de dados, quando não se prefira fazê-lo por processo sigiloso, judicial ou administrativo;</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )
        }
    ]

export function FAQ() {
    return (
        <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Ficou alguma dúvida?
                        </p>
                        <h2 className="text-3xl font-black tracking-tighter sm:text-5xl">
                            Dúvidas frequentes
                        </h2>
                    </div>
                </div>

                <div className="mx-auto max-w-3xl mt-8 mb-10">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-500">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <p className="text-gray-500 md:text-xl">
                        Ou se preferir, fale com um especialista agora pelo WhatsApp
                    </p>
                    <Button
                        className="bg-[#1D6AFF] hover:bg-blue-600"
                        aria-label="Falar com especialista no WhatsApp"
                    >
                        <SiWhatsapp className="w-4 h-4 mr-2" />
                        Falar com especialista
                    </Button>
                </div>
            </div>
        </section>
    )
} 