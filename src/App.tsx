import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  ShieldAlert,
  MessageSquare,
  Scale,
  Phone
} from 'lucide-react';
import logoImg from './assets/logo.png';
import logoWhiteImg from './assets/logo-white.png';

function Navbar() {
  return (
    <nav className="border-b border-neutral-light bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logoImg} alt="WeSimp" className="h-12 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-medium">
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> (17) 98126-0785</span>
          <span className="text-neutral-dark">|</span>
          <span>Fernandópolis, SP</span>
          <a href="#diagnostico" className="btn-primary px-5 py-2.5 rounded-full font-semibold">
            Diagnóstico Gratuito
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative bg-brand-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white/20"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full border-[20px] border-white/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
              <Scale className="w-4 h-4 text-brand-accent" />
              <span className="text-neutral-light opacity-80">BPO Financeiro para Advogados</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
              Você cuida dos clientes e dos processos. <span className="text-brand-accent">A WeSimp cuida do financeiro.</span>
            </h1>
            <p className="text-lg text-neutral-light mb-8 leading-relaxed max-w-xl opacity-90">
              Seu escritório precisa crescer — mais clientes, mais contratos, mais casos. Não é possível crescer perdendo horas com extrato, cobrança e contas a pagar. A WeSimp resolve isso por você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#diagnostico" className="btn-primary px-8 py-4 rounded-full font-semibold text-lg flex justify-center items-center gap-2">
                Diagnóstico gratuito
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#como-funciona" className="px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/10 transition-all text-white flex justify-center items-center gap-2">
                Ver como funciona
              </a>
            </div>
          </div>

          <div id="diagnostico" className="bg-white rounded-2xl p-8 shadow-2xl lg:ml-auto w-full max-w-md text-text-primary relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-bold mb-2 font-serif">Receba uma proposta para o seu escritório</h3>
            <p className="text-neutral-medium text-sm mb-6">Nossa equipe entra em contato em até 24h para um diagnóstico gratuito e sem compromisso.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">Seu nome</label>
                <input type="text" placeholder="Dr. Rafael Mendonça" className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:ring-2 focus:ring-brand-900 focus:border-brand-900 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1">WhatsApp</label>
                <input type="tel" placeholder="(17) 99999-0000" className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:ring-2 focus:ring-brand-900 focus:border-brand-900 outline-none transition-all" />
              </div>
              <button className="w-full btn-primary py-4 rounded-xl font-semibold flex items-center justify-center gap-2 mt-2">
                Quero meu diagnóstico gratuito <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-neutral-medium mt-4 flex items-center justify-center gap-1">
                <ShieldAlert className="w-3 h-3" /> Seus dados estão seguros. Sem spam.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const highlights = [
    "Custo muito inferior ao de uma equipe interna",
    "Gestão financeira feita por profissionais",
    "Time de cobrança para diminuir a inadimplência",
    "Contas em dia e fluxo de caixa controlado"
  ];

  return (
    <section className="bg-white border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((text, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-light shadow-sm hover:shadow-md transition-all">
              <div className="bg-neutral-light p-2.5 rounded-xl border border-neutral-light shrink-0">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
              </div>
              <span className="text-sm font-semibold text-text-primary leading-relaxed pt-0.5">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  const pains = [
    {
      id: "01",
      title: "Tempo operacional no lugar do tempo jurídico",
      desc: "Verificar extratos, lançar notas, organizar vencimentos — tarefas que consomem horas que deveriam estar em causas, clientes e crescimento. O escritório não pode depender de você para rodar o financeiro.",
      quote: "Fico até tarde resolvendo financeiro que qualquer especialista faria melhor do que eu."
    },
    {
      id: "02",
      title: "Honorários em atraso sem processo de cobrança",
      desc: "Cobrar cliente é socialmente custoso para quem advoga. Sem régua automatizada, o atraso se prolonga, a inadimplência cresce e o caixa se ressente — enquanto você foca nos processos.",
      quote: "Sei que preciso cobrar, mas fica pra depois. Aí o 'depois' vira 3 meses."
    },
    {
      id: "03",
      title: "Decisões estratégicas tomadas no escuro",
      desc: "Qual área rende mais? O caixa aguenta uma contratação? Quanto sobrou esse mês? Sem dados confiáveis, toda decisão de gestão é intuição — e o escritório não consegue crescer com inteligência.",
      quote: "Tenho a sensação de que o dinheiro some, mas não sei exatamente onde."
    },
    {
      id: "04",
      title: "Multas e custos extras por falta de controle",
      desc: "Tributos, aluguel, fornecedores — no meio de uma audiência ou prazo processual, um vencimento passa em branco. A multa é pequena, mas o sinal é claro: o escritório cresceu sem estrutura financeira para sustentar.",
      quote: "Já paguei multa por coisa que era só questão de organização."
    }
  ];

  return (
    <section className="py-24 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h4 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Por que isso importa</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">O financeiro está te impedindo de crescer</h2>
          <p className="text-lg text-neutral-medium">Cada hora que você passa no operacional é uma hora a menos focada em fechar novos contratos e atender clientes.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pains.map((pain) => (
            <div key={pain.id} className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-light hover:shadow-md transition-shadow">
              <div className="text-neutral-dark font-serif text-5xl font-bold mb-4 opacity-50">{pain.id}</div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{pain.title}</h3>
              <p className="text-neutral-medium mb-6 leading-relaxed">{pain.desc}</p>
              <div className="bg-neutral-light rounded-xl p-4 border-l-4 border-brand-accent">
                <p className="text-sm font-medium text-text-primary italic">"{pain.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      id: "01",
      title: "Seu tempo de volta para a advocacia",
      desc: "Mais clientes atendidos, melhores peças, mais tempo para fechar contratos. Cada hora liberada do operacional vai direto para o que faz o escritório crescer. O retorno começa imediatamente.",
      highlight: "Toda operação financeira diária fica com a WeSimp",
      icon: <Clock className="w-6 h-6 text-brand-accent" />
    },
    {
      id: "02",
      title: "Cobranças acontecem sem você precisar agir",
      desc: "Régua automatizada de cobrança, acompanhamento ativo das contas a receber e alertas de inadimplência. Você recebe o que é seu sem precisar fazer uma ligação constrangedora.",
      highlight: "Régua ativa, sem atrito pessoal com o cliente",
      icon: <MessageSquare className="w-6 h-6 text-brand-accent" />
    },
    {
      id: "03",
      title: "Clareza total para crescer com dados",
      desc: "Dashboard atualizado em tempo real. Rentabilidade por área e cliente. Projeção de caixa. Você passa de operador a gestor — e toda decisão estratégica tem dado real por trás.",
      highlight: "Relatórios gerenciais e dashboard sempre atualizados",
      icon: <TrendingUp className="w-6 h-6 text-brand-accent" />
    },
    {
      id: "04",
      title: "Zero multas, pagamentos sempre em dia",
      desc: "Todos os vencimentos monitorados com alertas preventivos e pagamentos gerenciados antes do prazo. O custo de uma multa vai além do valor — é sinal de descontrole. Com a WeSimp, isso acaba.",
      highlight: "Contas a pagar gerenciadas sem falhas",
      icon: <CheckCircle2 className="w-6 h-6 text-brand-accent" />
    }
  ];

  return (
    <section className="py-24 bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h4 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">O que muda com a WeSimp</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Financeiro resolvido. Escritório crescendo.</h2>
          <p className="text-lg text-neutral-light opacity-90">Quando o operacional sai do seu caminho, você volta a fazer o que faz o escritório crescer de verdade.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-neutral-light/80 mb-6 leading-relaxed">{benefit.desc}</p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-accent bg-brand-accent/10 px-4 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                {benefit.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: "📥",
      title: "Contas a Pagar & Receber",
      desc: "Controle de todas as entradas e saídas com vencimentos monitorados e alertas preventivos."
    },
    {
      icon: "🏦",
      title: "Conciliação Bancária",
      desc: "Registros financeiros sempre alinhados com os extratos bancários, sem divergências."
    },
    {
      icon: "💰",
      title: "Fluxo de Caixa",
      desc: "Controle das entradas e saídas com projeções para planejar investimentos e capital de giro."
    },
    {
      icon: "📬",
      title: "Gestão de Cobranças",
      desc: "Régua automatizada e acompanhamento ativo de honorários em atraso — sem você agir."
    },
    {
      icon: "📊",
      title: "Dashboard & Relatórios",
      desc: "Indicadores atualizados em tempo real e relatório gerencial mensal com análise interpretada."
    },
    {
      icon: "💬",
      title: "Atendimento via WhatsApp",
      desc: "Contato direto com seu time WeSimp. Sem ticket, sem fila. Resposta rápida e personalizada."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">O que está incluído</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">Tudo que o financeiro do seu escritório precisa</h2>
          <p className="text-lg text-neutral-medium">Um único serviço que cobre cada ponto da operação financeira.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-neutral-light border border-neutral-light hover:border-brand-accent/30 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-brand-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-medium text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Preencha o formulário",
      desc: "Nome e WhatsApp. Nossa equipe entra em contato em até 24h."
    },
    {
      num: "2",
      title: "Diagnóstico gratuito",
      desc: "Conversa de 20 minutos para entender o escritório e os gargalos atuais."
    },
    {
      num: "3",
      title: "Proposta personalizada",
      desc: "Escopo e valores ajustados ao seu porte e momento. Sem pacote genérico."
    },
    {
      num: "4",
      title: "Financeiro em ordem",
      desc: "A WeSimp assume. Você acompanha pelo dashboard — sem operar nada."
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-neutral-light border-y border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h4 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Como começar</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">Simples de começar.<br/>Rápido de ver resultado.</h2>
            <p className="text-lg text-neutral-medium mb-8">Onboarding estruturado. Você não precisa explicar o básico.</p>
            
            <a href="#diagnostico" className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex justify-center items-center gap-2">
              Quero começar agora
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="space-y-8 relative">
            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-neutral-light"></div>
            
            {steps.map((step, i) => (
              <div key={i} className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-brand-900 flex items-center justify-center font-bold text-brand-900 text-lg shrink-0 z-10 shadow-sm">
                  {step.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-brand-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TargetAudience() {
  const points = [
    {
      title: "Você quer crescer a carteira, mas o operacional te segura",
      desc: "Mais clientes exige mais estrutura. O financeiro precisa acompanhar o crescimento — senão vira gargalo."
    },
    {
      title: "Você quer um financeiro profissional sem contratar internamente",
      desc: "Equipe especializada com custo de serviço terceirizado. Sem CLT, FGTS ou encargos."
    },
    {
      title: "Você quer tomar decisões com dados, não com intuição",
      desc: "Saber a rentabilidade por área, projetar o caixa e entender onde investir para crescer com inteligência."
    },
    {
      title: "Você quer reduzir custos sem abrir mão da qualidade",
      desc: "Um serviço especializado pode custar menos do que um assistente CLT — com entrega muito superior."
    },
    {
      title: "Você quer focar 100% na advocacia",
      desc: "Liberar seu tempo das rotinas financeiras para dedicar ao que realmente faz o escritório crescer."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Para quem é indicado</h4>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-900 mb-6">Este serviço é para o seu escritório se…</h2>
        </div>

        <div className="space-y-6">
          {points.map((point, i) => (
            <div key={i} className="flex gap-4 p-6 rounded-2xl bg-neutral-light border border-neutral-light">
              <div className="mt-1">
                <CheckCircle2 className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-900 mb-1">{point.title}</h3>
                <p className="text-neutral-medium">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border-[60px] border-white/20 translate-x-1/3 -translate-y-1/3"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Pronto para o financeiro deixar de ser uma dor de cabeça?</h2>
        <p className="text-xl text-neutral-light/80 mb-12 max-w-2xl mx-auto">
          Preencha o formulário. Nossa equipe entra em contato em até 24 horas para um diagnóstico gratuito e sem compromisso. Você sai da conversa sabendo exatamente o que seria feito — e quanto custaria.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto text-left text-text-primary">
          <h3 className="text-2xl font-bold mb-2 font-serif text-center">Fale com a WeSimp</h3>
          <p className="text-neutral-medium text-sm mb-6 text-center">Preencha abaixo. Retorno em até 24h úteis.</p>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">Seu nome</label>
              <input type="text" placeholder="Dr. Rafael Mendonça" className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:ring-2 focus:ring-brand-900 focus:border-brand-900 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">WhatsApp</label>
              <input type="tel" placeholder="(17) 99999-0000" className="w-full px-4 py-3 rounded-xl border border-neutral-light focus:ring-2 focus:ring-brand-900 focus:border-brand-900 outline-none transition-all" />
            </div>
            <button className="w-full btn-primary py-4 rounded-xl font-semibold flex items-center justify-center gap-2 mt-2">
              Quero meu diagnóstico gratuito <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-center text-neutral-medium mt-4 flex items-center justify-center gap-1">
              <ShieldAlert className="w-3 h-3" /> Seus dados estão seguros. Sem spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-800 text-neutral-dark py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={logoWhiteImg} alt="WeSimp" className="h-12 w-auto" />
            </div>
            <p className="text-xl font-bold text-white mb-3">Sua empresa sem burocracia</p>
            <p className="text-sm max-w-sm text-neutral-dark leading-relaxed">
              WeSimp Soluções Contábeis<br/>
              Simplificando a gestão financeira e contábil do seu escritório para você focar no que realmente importa.
            </p>
          </div>
          <div className="md:text-right space-y-6">
            <div>
              <p className="font-bold text-white mb-3 uppercase tracking-widest text-xs">Contato</p>
              <div className="space-y-2 text-sm">
                <p className="flex items-center md:justify-end gap-2 text-neutral-dark hover:text-white transition-all">
                  <Phone className="w-4 h-4 text-brand-accent" /> (17) 98126-0785
                </p>
                <p className="flex items-center md:justify-end gap-2 text-neutral-dark hover:text-white transition-all">
                  <span className="w-4" /> (17) 98844-3962
                </p>
                <p className="flex items-center md:justify-end gap-2 text-neutral-dark hover:text-white transition-all">
                  <span className="w-4" /> (17) 99719-5735
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-neutral-dark hover:text-brand-accent transition-all font-medium italic">contato@wesimp.com</p>
              <p className="text-neutral-dark max-w-xs md:ml-auto">Av. Milton Terra Verde, 880 Centro - Fernandópolis/SP</p>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 WeSimp Soluções Contábeis Ltda · CNPJ 55.684.395/0001-80</p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-light font-sans text-text-primary">
      <Navbar />
      <Hero />
      <Stats />
      <PainPoints />
      <Benefits />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <BottomCTA />
      <Footer />
    </div>
  );
}
