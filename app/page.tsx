import HeroBackground from "@/components/background";
import { FeaturesGrid } from "@/components/features-grid";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { SiWhatsapp } from "react-icons/si";
import { BarChart2, Info } from "lucide-react";
import Image from "next/image";
import NumberTicker from "@/components/magicui/number-ticker";
import ServicesSection from "@/components/services";
import { FAQ } from "@/components/faq"

const CreditScorePage = () => {
  return (
    <main className="min-h-screen mx-auto px-8 md:px-32">
      {/* Header */}
      <header className="container mx-auto pt-6 flex items-center justify-between bg-transparent ml-2 md:ml-0">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-8 h-8 text-[#0066FF]" />
          <span className="text-3xl font-black">Check Serasa</span>
        </div>
        <Button
          className="bg-[#0066FF] hover:bg-[#0066FF]/90 w-fit hidden md:flex md:items-center"
          aria-label="Verificar seu score"
        >
          <SiWhatsapp className="w-4 h-4 mr-2" />
          Verificar score
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container relative mx-auto px-4 py-8 md:pb-24">
        <div className="absolute inset-0 -z-10">
          <HeroBackground />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xl text-neutral-700 mb-2">
              Está negativado?
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1D6AFF] mb-6">
              <strong className="font-black">Nome limpo e blindado</strong> <strong className="font-bold text-blue-950">em poucos dias</strong>
            </h1>
            <p className="text-xl text-neutral-900 mb-8">
              A Check Serasa é especializada em recuperação do direito ao crédito com clientes por todo país que estão retomando sua vida financeira.
            </p>
            <p className="text-xl text-neutral-900 mb-8">
              Ao consultar seu CPF, você descobre se há restrições em seu nome, protestos em cartório e outras informações.
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-[#0066FF] hover:bg-[#0066FF]/90 w-fit"
                aria-label="Verificar seu score"
              >
                <SiWhatsapp className="w-4 h-4 mr-2" />
                Verificar score
              </Button>
            </div>
          </div>
          <div className="relative w-full md:w-1/2 min-h-[400px]">
            <div className="relative w-full aspect-square">
              <Image
                src="/hero.svg"
                alt="Ilustração de pessoa analisando gráficos financeiros"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute bottom-11 md:bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
              <div>
                <p className="text-sm text-gray-600">Sua pontuação de crédito</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-extrabold">
                    <NumberTicker value={740} className="text-[#00BA88]" />
                  </span>
                  <span className="text-gray-600 font-medium mt-1">Bom</span>
                </div>
                <p className="text-sm text-gray-600 underline flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  <span className="font-bold">Melhorar score</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#1D6AFF] py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p className="text-white text-sm">
            Seu score é calculado junto com nosso parceiro confiável: <span className="font-bold">Serasa Experian</span>
          </p>
          <div className="flex items-center gap-8">
            {/* Add partner logos here */}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto top-0 border p-4 md:p-10">
        <FeaturesGrid />
      </section>

      {/* Statistics Section */}
      <section className="bg-[#1D6AFF] text-white mt-0 md:-mt-10 py-16">
        <div className="container mx-auto px-11">
          <h2 className="text-3xl font-bold mb-8">
            Total de clientes que usam nosso serviço
          </h2>
          <div className="flex gap-16">
            <div>
              <p className="text-4xl font-bold">5.468</p>
              <p>Clientes pessoais</p>
            </div>
            <div>
              <p className="text-4xl font-bold">1.678</p>
              <p>Clientes empresas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 pt-8 border">
        <ServicesSection />
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4">
        <FAQ />
      </section>

      {/* Footer CTA Section */}
      <section className="container mx-auto px-4">
        <Footer />
      </section>

    </main>
  );
};

export default CreditScorePage;
