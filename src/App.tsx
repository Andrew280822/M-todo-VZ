import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XOctagon, 
  MessageCircle, 
  TrendingUp, 
  BrainCircuit, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  Star,
  Smartphone,
  ArrowRight,
  Menu
} from 'lucide-react';

const CTAButton = ({ text = "Comprar agora", href = "https://pay.kiwify.com.br/mnyZC6q", className = "" }: { text?: string, href?: string, className?: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-neutral-950 font-extrabold text-[15px] sm:text-lg py-4 sm:py-5 px-6 sm:px-10 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.25)] transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] uppercase tracking-wide w-full md:w-auto text-center leading-tight ${className}`}
  >
    {text}
    <ArrowRight className="w-5 h-5 animate-pulse" />
  </a>
);

const notifications = [
  "Juliana de Dourados finalizou a compra",
  "Marcos de São Paulo finalizou a compra",
  "Camila de Belo Horizonte finalizou a compra",
  "Rafael de Curitiba finalizou a compra",
  "Amanda de Salvador finalizou a compra"
];

const PurchaseNotification = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 5000); // 5 segundos visível
    };

    // Inicia a primeira notificação logo após carregar
    const initialTimeout = setTimeout(showNotification, 3000);

    // Loop a cada 20 segundos
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % notifications.length);
      showNotification();
    }, 20000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-50 bg-white text-neutral-900 pl-3 pr-5 py-3 rounded-xl shadow-[0_10px_40px_rgba(37,211,102,0.2)] flex items-center gap-3 transition-all duration-500 transform ${visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'}`}
    >
      <div className="bg-[#25D366] text-white p-2 rounded-full shadow-inner shrink-0">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div>
        <p className="font-bold text-sm tracking-tight">{notifications[index]}</p>
        <p className="text-xs text-neutral-500 font-medium">Comprado há alguns minutos</p>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#000000]/95 backdrop-blur-md border-b border-white/5 py-4 px-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://i.postimg.cc/xTsCSPtc/Chat-GPT-Image-2-de-mai-de-2026-00-57-42.png" alt="Método VendaZap" className="h-[40px] md:h-[50px] w-auto drop-shadow-md" />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-bold text-neutral-300 items-center">
          <a href="#inicio" className="hover:text-white transition-colors">Início</a>
          <a href="#problema" className="hover:text-white transition-colors">Problema</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
        </div>
        
        <div className="hidden md:block">
          <a href="https://pay.kiwify.com.br/mnyZC6q" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1EBE5A] text-neutral-950 font-bold px-5 py-2.5 rounded-full text-xs transition-colors uppercase">
            Comprar agora
          </a>
        </div>
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#000000] border-b border-white/5 py-4 px-5 flex flex-col gap-4 font-bold text-neutral-300">
           <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
           <a href="#problema" onClick={() => setMobileMenuOpen(false)}>Problema</a>
           <a href="#depoimentos" onClick={() => setMobileMenuOpen(false)}>Depoimentos</a>
           <a href="#faq" onClick={() => setMobileMenuOpen(false)}>Dúvidas</a>
           <a href="https://pay.kiwify.com.br/mnyZC6q" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="text-[#25D366] uppercase">Comprar agora</a>
        </div>
      )}
    </nav>
  );
};

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-[#25D366] selection:text-neutral-950 pt-20">
      <Navbar />
      <PurchaseNotification />
      
      {/* 1. HERO SECTION (Dark) */}
      <section id="inicio" className="relative px-5 py-12 md:py-20 lg:py-24 flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900/10 via-dark-bg to-dark-bg -z-10" />
        
        <div className="max-w-6xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#25D366] text-xs font-bold uppercase tracking-wider mb-8">
              <MessageCircle className="w-4 h-4" />
              Método de Conversão Acelerada
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              PARE DE PERDER DINHEIRO NO WHATSAPP COM <span className="text-[#25D366]">MENSAGENS QUE SÃO IGNORADAS.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-neutral-300 md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
              Descubra o método que te mostra <strong className="text-white">a verdade dos bastidores da venda.</strong> Mais do que modelos de "Ctrl C + Ctrl V", entenda <em>por que</em> cada palavra funciona para impactar a decisão de compra e aumente seus fechamentos hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-14 w-full md:w-auto justify-center lg:justify-start">
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#25D366] shrink-0" />
                  <span className="font-semibold text-neutral-200">Roteiros validados que geram respostas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#25D366] shrink-0" />
                  <span className="font-semibold text-neutral-200">Psicologia de compra simplificada.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#25D366] shrink-0" />
                  <span className="font-semibold text-neutral-200">Fácil de aplicar (em qualquer nicho).</span>
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col items-center lg:items-start">
              <CTAButton />
              <p className="mt-4 text-xs text-neutral-500 font-medium">100% de Garantia • Acesso Imediato</p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative flex justify-center lg:justify-end">
             {/* Glow effect behind image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#25D366]/20 rounded-full blur-[100px] z-0" />
             
             <div className="relative z-10 p-2 bg-gradient-to-br from-white/10 to-transparent rounded-3xl border border-white/10 shadow-2xl">
               <img 
                 src="https://i.postimg.cc/Hs7TytBV/Chat-GPT-Image-1-de-mai-de-2026-22-11-43.png" 
                 alt="Controlando as vendas pelo WhatsApp" 
                 className="rounded-2xl object-cover w-full h-auto max-w-[450px]"
               />
               <div className="absolute -bottom-6 -left-6 bg-dark-bg border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-4">
                  <div className="bg-[#25D366]/20 p-3 rounded-full">
                    <TrendingUp className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-white font-black text-xl">+300%</p>
                    <p className="text-neutral-400 text-xs font-bold uppercase">de Conversão</p>
                  </div>
               </div>
             </div>
          </div>
          
        </div>
      </section>

      {/* 2. PROBLEMA (Dark Green) */}
      <section id="problema" className="bg-dark-green px-5 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-center mb-6 leading-tight">
            VOCÊ VIVE ESSA <span className="text-[#25D366]">FRUSTRAÇÃO</span> DIARIAMENTE?
          </h2>
          <p className="text-neutral-300 text-center mb-12 md:text-lg max-w-2xl font-medium">
            Atrair clientes não adianta nada se, na hora de fechar a venda, você comete os mesmos erros que matam a conversão.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
            {[
              "O cliente pergunta o preço, visualiza e some para sempre.",
              "Dizem que \"vão pensar\" ou que precisam \"falar com a esposa(o)\" e desaparecem.",
              "Você copia mensagens de gurus, mas pra você simplesmente não funcionam.",
              "Sente que está implorando pela venda toda vez que manda mensagem.",
              "Ouve constantemente que seu produto/serviço está caro.",
              "Perde horas no celular e chega no fim do dia sem dinheiro no bolso."
            ].map((problem, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl items-start">
                <XOctagon className="w-7 h-7 text-red-400 shrink-0 mt-0.5" />
                <p className="text-zinc-200 font-medium leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          <div className="w-full text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-8 text-white">Se você marcou "Sim" para pelo menos uma dessas opções, a culpa não é do seu produto. <span className="text-[#25D366]">A culpa é da sua abordagem.</span></h3>
            <CTAButton />
          </div>
        </div>
      </section>

      {/* 3. SOLUÇÃO (Dark) */}
      <section className="bg-dark-bg px-5 py-20 lg:py-28 border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase">
              Não é "só mais um cursinho". <br className="hidden md:block"/>
              É a <span className="text-[#25D366]">ciência da venda.</span>
            </h2>
            <p className="text-neutral-300 md:text-lg max-w-3xl mx-auto leading-relaxed">
              O mercado está saturado de cursos fracos que te entregam PDFs com frases feitas que seu cliente já cansou de ouvir. O que nós criamos é um <strong>MÉTODO</strong> de vendas reais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/5 text-center flex flex-col items-center">
              <div className="bg-dark-green w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <BrainCircuit className="w-7 h-7 text-[#25D366]" />
              </div>
              <h4 className="text-lg font-bold mb-3">O "Porquê" das coisas</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Eu explico o impacto mental por trás de cada mensagem. Você vai entender exatamente como ativar o gatilho da compra no cérebro do cliente.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/5 text-center flex flex-col items-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-[#25D366]" />
              <div className="bg-dark-green w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-7 h-7 text-[#25D366]" />
              </div>
              <h4 className="text-lg font-bold mb-3">Modelos Adaptáveis</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Roteiros impecáveis que se encaixam como uma luva no seu negócio, seja você prestador de serviços, vendedor de produtos físicos ou infoprodutos.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/5 text-center flex flex-col items-center">
              <div className="bg-dark-green w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#25D366]" />
              </div>
              <h4 className="text-lg font-bold mb-3">Fechamento Lógico</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                O cliente vai comprar e ainda vai te agradecer no final. Destruímos objeções antes mesmo que o cliente consiga pensar nelas.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* 4. BENEFÍCIOS (Dark Green) */}
      <section className="bg-dark-green px-5 py-20 lg:py-28 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/5 rounded-full blur-[100px]" />
        
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6">
              A TRANSFORMAÇÃO QUE VOCÊ VAI <span className="text-[#25D366]">VIVER NAS PRÓXIMAS SEMANAS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            <div className="flex gap-5 items-start">
              <div className="mt-1 bg-black/30 p-3 rounded-xl border border-white/10 shrink-0">
                <Clock className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Tempo Livre Recuprado</h4>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">Pare de gastar 40 minutos tentando convencer apenas 1 cliente. Responda rápido, seja assertivo e feche em menos de 10 minutos.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="mt-1 bg-black/30 p-3 rounded-xl border border-white/10 shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Confiança Absoluta</h4>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">Acabará o medo do "achou caro?". Quando o cliente vier com objeções, você já saberá exatamente a frase certa para contornar e reverter a situação.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="mt-1 bg-black/30 p-3 rounded-xl border border-white/10 shrink-0">
                <TrendingUp className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Previsibilidade de Lucro</h4>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">Ao ter uma taxa de conversão que funciona, você calcula com precisão: se X pessoas entrarem em contato hoje, Y fecharão. Dinheiro previsível no bolso.</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="mt-1 bg-black/30 p-3 rounded-xl border border-white/10 shrink-0">
                <Smartphone className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-white">Domínio da Ferramenta</h4>
                <p className="text-neutral-300 leading-relaxed text-sm md:text-base">O WhatsApp deixará de ser um ambiente de estresse para se tornar a sua máquina de vendas mais forte do seu negócio.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
             <CTAButton />
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL (Dark) */}
      <section id="depoimentos" className="bg-dark-bg px-5 py-20 lg:py-28 border-y border-white/5 relative">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-white/5 blur-[120px] rounded-full z-0 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-12">
             <div className="flex items-center gap-2 mb-4 bg-white/10 px-4 py-2 rounded-full border border-white/10">
                <span className="font-bold text-white text-sm">Avaliações Verificadas</span>
                <div className="flex">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />)}
                </div>
             </div>
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-white">
               QUEM APLICOU, <span className="text-[#25D366]">COMPROVOU O RESULTADO</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                text: "Eu estava quase desistindo. As pessoas chamavam, pediam catálogo e sumiam. Só de mudar a forma de dar o preço (como ensina no curso), minhas vendas triplicaram em 10 dias.",
                name: "João Carlos",
                time: "3 dias atrás",
                initials: "J",
                color: "bg-blue-500"
              },
              {
                text: "Entender o 'porquê' da mensagem faz toda diferença. Não é mais copiar como um robô. Agora eu sei lidar com objeção. Meu faturamento subiu de 4k pra 12k só pelo WhatsApp.",
                name: "Mariana S.",
                time: "uma semana atrás",
                initials: "M",
                color: "bg-pink-500"
              },
              {
                text: "Vale cada centavo. Mostrei pra minha equipe e implementamos os roteiros em 1 tarde. Na primeira semana a taxa de fechamento que era 10% pulou pra 35%. Genial.",
                name: "Ricardo Mendes",
                time: "2 semanas atrás",
                initials: "R",
                color: "bg-green-600"
              }
            ].map((dep, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-between transform transition duration-300 hover:-translate-y-2 border border-neutral-200">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${dep.color}`}>
                       {dep.initials}
                     </div>
                     <div>
                       <p className="font-bold text-neutral-900 leading-none">{dep.name}</p>
                       <p className="text-neutral-500 text-xs mt-1">{dep.time}</p>
                     </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, idx) => <Star key={idx} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />)}
                  </div>
                  <p className="text-neutral-700 leading-relaxed text-[15px]">"{dep.text}"</p>
                </div>
                <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-2">
                   <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                   </svg>
                   <span className="text-xs text-neutral-500 font-medium">Avaliação no Google</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
             <CTAButton />
          </div>
        </div>
      </section>

      {/* 6. OFERTA (Dark Green) */}
      <section id="oferta" className="bg-dark-green px-5 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-neutral-950 rounded-3xl border border-green-900/50 shadow-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="bg-gradient-to-r from-green-600 to-[#25D366] p-4 text-center">
              <span className="text-neutral-950 font-black uppercase tracking-widest text-sm md:text-base">Oferta Exclusiva e Limitada</span>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-black mb-8 text-center">O QUE VOCÊ VAI LEVAR HOJE:</h3>
              
              <ul className="space-y-4 mb-10 max-w-2xl mx-auto">
                {[
                  "Acesso Completo ao Método de Vendas no WhatsApp.",
                  "Módulo: Análise Psicológica do Comprador.",
                  "Biblioteca de Roteiros Validados Prontos para Uso.",
                  "Aula Bônus: Como Contornar Objeções de Preço.",
                  "Suporte diretamente com a nossa equipe."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center">
                     <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                     <span className="font-medium text-neutral-200">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mb-10 border-t border-white/10 pt-10 relative mt-8">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[11px] font-black uppercase px-4 py-1 rounded-full animate-bounce shadow-lg shadow-red-600/30 whitespace-nowrap">
                  72% de Desconto
                </div>
                <p className="text-neutral-400 font-medium mb-1 line-through text-sm md:text-base">O valor normal é R$ 35,90</p>
                <p className="text-neutral-300 font-bold mb-3 text-lg md:text-xl">Mas hoje, você leva tudo por apenas:</p>
                
                <div className="flex justify-center items-end gap-0.5 mb-5 transform hover:scale-105 transition-transform cursor-default">
                  <span className="text-7xl md:text-8xl font-black text-[#25D366] leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(37,211,102,0.4)]">R$10</span>
                  <span className="text-3xl md:text-4xl font-bold text-[#25D366] mb-1.5 md:mb-2 leading-none">,00</span>
                </div>

                <div className="inline-block bg-[#072615] border border-[#25D366]/30 px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(37,211,102,0.1)]">
                  <p className="text-[#25D366] font-black uppercase tracking-wide text-[10px] sm:text-xs">
                    Garanta seu acesso imediato antes que o preço suba!
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <CTAButton className="w-full md:w-3/4 py-6 md:text-xl" />
                
                <div className="flex items-center gap-2 mt-6 text-neutral-400 text-sm">
                   <ShieldCheck className="w-5 h-5" />
                   Compra Segura e Risco Zero (7 dias de garantia)
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ (Dark) */}
      <section className="bg-dark-bg px-5 py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-12">
            FICOU ALGUMA <span className="text-[#25D366]">DÚVIDA?</span>
          </h2>

          <div className="space-y-4 mb-12">
            {[
              {
                q: "Serve para qualquer nicho de mercado?",
                a: "Sim! Como o método foca na psicologia de compra, a estrutura se aplica para quem vende serviços, produtos físicos, imóveis, carros ou infoprodutos."
              },
              {
                q: "Como vou receber o acesso?",
                a: "O acesso chega no seu e-mail assim que o pagamento for aprovado. Compras no cartão ou PIX liberam o acesso na mesma hora."
              },
              {
                q: "Eu não tenho tempo para estudar, o curso é longo?",
                a: "Pelo contrário. O curso é direto e focado no que importa. Você assiste uma aula e já consegue aplicar a técnica no mesmo dia na sua próxima conversa no WhatsApp."
              },
              {
                q: "E se eu não gostar?",
                a: "Você tem 7 dias de garantia incondicional. Se você achar que os roteiros não ajudam, basta apertar um botão e devolveremos 100% do seu dinheiro. Simples assim."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-200">
                <button 
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-transparent"
                  onClick={() => toggleFaq(i)}
                >
                  <span className="font-bold text-white md:text-lg pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#25D366] transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-neutral-400 font-medium leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 8. FECHAMENTO (Dark Green) */}
      <section className="bg-gradient-to-b from-dark-green to-black px-5 py-24 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 leading-tight text-white">
            SEU CLIENTE ESTÁ ESPERANDO. <br className="hidden md:block"/>
            SÓ DEPENDE DA <span className="text-[#25D366]">SUA MENSAGEM.</span>
          </h2>
          <p className="text-neutral-300 font-medium mb-12 text-lg">
            Você pode fechar esta página e continuar perdendo vendas todos os dias por não saber o que responder... ou pode pegar o atalho com mensagens validadas e mudar seu financeiro ainda hoje. A escolha é sua.
          </p>

          <CTAButton />
        </div>
      </section>

      <footer className="bg-[#000000] py-8 border-t border-white/10 text-center px-5">
        <p className="text-neutral-500 font-medium text-xs sm:text-sm">
          © {new Date().getFullYear()} método VendaZap. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

