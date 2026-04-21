import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Lock,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Activity,
  Phone,
  Download,
  Landmark,
  CircleDollarSign,
  MailPlus,
  PieChart,
  MessageCircle,
  XCircle,
  CheckCircle,
  MapPin,
  User
} from 'lucide-react';
import logoImg from './assets/logo.png';
import logoWhiteImg from './assets/logo-white.png';
import whyWesimpImg from './assets/why-wesimp.jpeg';
import luizMoraesImg from './assets/luiz-moraes.jpeg';
import whatsappImg from './assets/whatsapp.svg';

const GOOGLE_SHEETS_URL = 'SUA_URL_AQUI'; // Substitua pela URL da sua implantação do Apps Script

function LeadForm({ variant = 'hero' }) {
  const [nome, setNome] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !whatsapp) return;
    
    setStatus('loading');
    
    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Importante para o Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, whatsapp }),
      });
      
      setStatus('success');
      setNome('');
      setWhatsapp('');
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
      setStatus('error');
    }
  };

  const inputClasses = variant === 'hero' 
    ? "w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:ring-[3px] focus:ring-brand-accent/30 focus:border-brand-accent/60 outline-none transition-all duration-300 ease-out shadow-inner"
    : "w-full px-5 py-4 rounded-xl border border-neutral-light bg-neutral-light/30 focus:bg-white focus:ring-[3px] focus:ring-brand-900/10 focus:border-brand-900 outline-none shadow-sm transition-all duration-300 placeholder:text-neutral-medium/40";
    
  const labelClasses = "block text-xs font-bold text-brand-accent uppercase tracking-widest mb-2";

  if (status === 'success') {
    return (
      <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-accent/30">
          <CheckCircle className="w-8 h-8 text-brand-accent" />
        </div>
        <h4 className="text-xl font-bold mb-2">Solicitação Enviada!</h4>
        <p className="text-sm opacity-70">Em breve nossa equipe entrará em contato com você.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-brand-accent font-bold text-sm uppercase tracking-widest hover:underline"
        >
          Enviar nova solicitação
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <div className="relative group">
          <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${variant === 'hero' ? 'text-brand-accent/40 group-focus-within:text-brand-accent' : 'text-neutral-medium/40 group-focus-within:text-brand-900'}`} />
          <input 
            type="text" 
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu Nome" 
            className={`${inputClasses} pl-12`} 
          />
        </div>
      </div>
      <div>
        <div className="relative group">
          <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${variant === 'hero' ? 'text-brand-accent/40 group-focus-within:text-brand-accent' : 'text-neutral-medium/40 group-focus-within:text-brand-900'}`} />
          <input 
            type="tel" 
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="Seu WhatsApp" 
            className={`${inputClasses} pl-12`} 
          />
        </div>
      </div>
      <div className="pt-3">
        <button 
          disabled={status === 'loading'}
          className="w-full btn-primary py-[24px] px-2 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap text-[15.3px]"
        >
          {status === 'loading' ? 'ENVIANDO...' : 'QUERO ORGANIZAR O FINANCEIRO'}
        </button>
      </div>
      <p className={`text-[10px] text-center uppercase tracking-[0.2em] mt-4 ${variant === 'hero' ? 'text-white/40' : 'text-neutral-medium/60 border-t border-neutral-light pt-4'}`}>
        Atendemos advogados de todo o Brasil
      </p>
    </form>
  );
}

function Navbar() {
  return (
    <nav className="border-b border-neutral-light bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center md:justify-between">
        <div className="flex items-center">
          <img src={logoImg} alt="WeSimp" className="h-12 w-auto" />
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-neutral-dark/80">
          <a href="#solucao" className="hover:text-brand-accent transition-colors">A Solução</a>
          <a href="#servicos" className="hover:text-brand-accent transition-colors">Vantagens</a>
          <a href="#publico" className="hover:text-brand-accent transition-colors">Para Quem</a>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-medium">
          <a href="https://wa.me/5517981260785?text=Ol%C3%A1%2C%20gostaria%20de%20organizar%20a%20gest%C3%A3o%20financeira%20do%20meu%20escrit%C3%B3rio%20com%20a%20WeSimp%21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-900 transition-colors cursor-pointer"><Phone strokeWidth={1.5} className="w-4 h-4" /> 55 17 98126-0785</a>
          <a href="#contato" className="bg-brand-accent text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:scale-105 hover:shadow-lg transition-transform text-[14px]">
            Falar com Especialista
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 mb-8 backdrop-blur-sm transition-all hover:bg-brand-accent/20">
              <span className="text-[13.2px] font-bold text-brand-accent uppercase tracking-[0.25em] leading-tight text-center">
                BPO Financeiro <br className="sm:hidden" /> para Advogados
              </span>
            </div>
            <h1 className="text-[2.025rem] md:text-5xl font-bold tracking-tight leading-[1.15] mb-6">
              Advogado bom não perde tempo com financeiro. <span className="text-brand-accent">Deixa isso com a gente.</span>
            </h1>
            <p className="text-[1.0125rem] text-neutral-light mb-8 leading-relaxed max-w-[540px] opacity-90 mx-auto lg:mx-0">
              A WeSimp organiza o financeiro do seu escritório - contas a pagar, cobranças, fluxo de caixa - para você focar no que realmente importa: seus clientes e processos.
            </p>
          </div>

          <div id="diagnostico" className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 lg:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] lg:ml-auto w-full max-w-md border border-white/10 relative overflow-hidden group -translate-y-[10%] lg:translate-y-0">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl hover:bg-brand-accent/30"></div>
            
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      title: "Contas a Pagar & Receber",
      desc: "Vencimentos monitorados e pagamentos programados, sem atrasos e sem esquecimentos.",
      icon: <CircleDollarSign strokeWidth={1.5} className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Conciliação Bancária",
      desc: "Todos os lançamentos conferidos com os extratos bancários — números corretos e sem divergências.",
      icon: <Landmark strokeWidth={1.5} className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Fluxo de Caixa",
      desc: "Visão clara do que entra, sai e sobra, com previsões para decisões estratégicas.",
      icon: <TrendingUp strokeWidth={1.5} className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Gestão de Cobranças",
      desc: "Cobrança ativa e automatizada dos honorários em aberto, sem dor de cabeça.",
      icon: <MailPlus strokeWidth={1.5} className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Dashboard & Relatórios",
      desc: "Indicadores em tempo real e relatórios mensais com análise completa do seu financeiro.",
      icon: <BarChart3 strokeWidth={1.5} className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Atendimento via WhatsApp",
      desc: "Contato direto com o time WeSimp. Suporte personalizado, sem fila, sem robô.",
      icon: <MessageCircle strokeWidth={1.5} className="w-8 h-8 text-brand-accent" />
    }
  ];

  return (
    <section id="servicos" className="py-12 lg:py-32 bg-white border-y border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 leading-tight tracking-tight mb-6">
            Tudo que o seu financeiro precisa, em um único serviço.
          </h2>
          <p className="text-xl text-neutral-medium leading-relaxed max-w-3xl mx-auto">
            Reunimos contadores, uma plataforma própria e um analista dedicado - para que você tenha clareza total sobre os números do seu escritório.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-8 lg:p-10 rounded-2xl bg-white border border-neutral-light/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 ease-out group">
              <div className="w-14 h-14 bg-brand-accent/5 rounded-xl flex items-center justify-center mb-8 border border-brand-accent/10 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-300 ease-out">
                <div className="group-hover:brightness-0 group-hover:invert transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3 tracking-snug">{feature.title}</h3>
              <p className="text-[17px] text-neutral-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center">
          <a href="#contato" className="w-full sm:w-auto btn-primary px-12 py-5 rounded-xl font-black flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all whitespace-nowrap text-[17.2px]">
            QUERO ORGANIZAR O FINANCEIRO
          </a>
          <p className="text-[10px] text-center text-neutral-medium/60 mt-4 uppercase tracking-[0.2em] font-bold">Atendemos advogados de todo o Brasil</p>
        </div>

      </div>
    </section>
  );
}

function TargetAudience() {
  const points = [
    "Crescer sem o financeiro virar gargalo na operação",
    "Ter uma equipe especializada sem contratar, treinar ou gerenciar internamente",
    "Eliminar custos com CLT, FGTS e encargos — com um modelo mais eficiente",
    "Contar com profissionais experientes que operam o financeiro de diversos escritórios",
    "Reduzir dor de cabeça com gestão de equipe e rotina financeira",
    "Pagar menos do que um time interno, com entrega superior",
    "Tomar decisões com base em números claros, não em intuição",
    "Ter tudo organizado para contabilidade e imposto, sem complicação"
  ];

  const lastPoint = "Focar 100% na advocacia, sem se envolver no operacional financeiro";

  return (
    <section id="publico" className="py-20 lg:py-32 bg-neutral-light/30 border-t border-neutral-light/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h4 className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-6">PARA QUEM É INDICADO</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-900 leading-[1.15] tracking-tighter">
            Para escritórios que querem crescer<br className="hidden md:block" /> com o financeiro sob controle
          </h2>
        </div>

        {/* TABELA VISUAL UNIFICADA */}
        <div className="bg-white rounded-[32px] border border-neutral-light shadow-[0_20px_60px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Corpo da Tabela */}
          <div className="grid md:grid-cols-2">
            {points.map((point, i) => (
              <div 
                key={i} 
                className={`flex items-start gap-5 sm:gap-6 p-8 sm:p-10 transition-colors duration-300 hover:bg-neutral-light/30 border-[#E5E7EB] ${
                  i % 2 === 0 ? 'md:border-r' : ''
                } ${
                  i < points.length - 2 ? 'border-b' : ''
                } ${
                  i === points.length - 2 ? 'border-b md:border-b-0' : ''
                }`}
              >
                <CheckCircle strokeWidth={1.5} className="w-7 h-7 text-brand-accent shrink-0 mt-0.5" />
                <p className="text-[17px] sm:text-[19px] font-bold text-brand-900 leading-[1.6]">
                  {point}
                </p>
              </div>
            ))}
          </div>
          
          {/* Rodapé da Tabela de Alto Impacto */}
          <div className="border-t border-[#E5E7EB] bg-brand-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-6 group">
            <CheckCircle strokeWidth={2} className="w-10 h-10 text-brand-accent shrink-0 mt-1 sm:mt-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" />
            <p className="text-xl sm:text-2xl font-black leading-tight tracking-tight text-center sm:text-left">
              {lastPoint}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border-[60px] border-white/20 translate-x-1/3 -translate-y-1/3"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LADO ESQUERDO: TEXTO E SOCIAL PROOF */}
          <div className="flex flex-col justify-center">
            <div className="mb-10 lg:mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-6">
                Fale com a WeSimp
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
                Pronto para simplificar o financeiro do seu escritório?
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-[440px]">
                Preencha o formulário e nossa equipe entra em contato para entender sua rotina e apresentar uma proposta personalizada.
              </p>
            </div>

            {/* ESPECIALISTA CONECTADO VISUALMENTE AO FORMULÁRIO */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 sm:p-10 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
                <div className="w-[96px] h-[96px] sm:w-[110px] sm:h-[110px] rounded-full overflow-hidden shrink-0 border-2 border-brand-accent/20 shadow-[0_0_20px_rgba(21,160,168,0.15)] bg-brand-900">
                  <img 
                    src={luizMoraesImg} 
                    alt="Luiz Moraes" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="max-w-[400px]">
                  <p className="text-[18px] sm:text-[19px] leading-[1.6] font-medium text-white mb-6">
                    “Você não precisa perder tempo com o operacional financeiro.<br className="hidden xl:block" />
                    A gente organiza e te dá clareza para decidir.”
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-2">
                    <span className="font-bold text-white tracking-tight text-[17px]">Luiz Moraes</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50 hidden sm:block"></span>
                    <span className="text-brand-accent/90 text-[14px] font-semibold tracking-wide">Contador (1SP338588)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: FORMULÁRIO */}
          <div>
            <div className="bg-white rounded-[24px] p-8 lg:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.4)] max-w-md mx-auto lg:ml-auto lg:mr-0 text-left text-text-primary">
              <h3 className="text-2xl font-bold mb-2 text-center tracking-tight text-brand-900">Fale com a WeSimp</h3>
              <p className="text-neutral-medium text-[15px] mb-8 text-center">Inicie o processo para organizar sua gestão.</p>
              
              <LeadForm variant="footer" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 items-start">
          
          {/* LADO ESQUERDO: LOGO E DESCRIÇÃO */}
          <div>
            <div className="flex items-center mb-8">
              <img src={logoWhiteImg} alt="WeSimp" className="h-10 w-auto opacity-90" />
            </div>
            <p className="text-lg font-bold text-white mb-4 tracking-tight">Sua empresa sem burocracia</p>
            <p className="text-[15px] text-white/70 max-w-sm leading-relaxed">
              Simplificando a gestão financeira do seu escritório para você focar no que realmente importa.
            </p>
          </div>

          {/* MEIO: INSTITUCIONAL E SEGURANÇA */}
          <div>
            <p className="font-bold text-white mb-6 uppercase tracking-widest text-[11px]">Institucional</p>
            <ul className="space-y-4 text-[15px] text-white/70 mb-10">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Sobre a WeSimp</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Política de Privacidade</a></li>
            </ul>

            <p className="font-bold text-white mb-6 uppercase tracking-widest text-[11px]">Segurança</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-white/70">
                <ShieldCheck strokeWidth={1.5} className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-[14px]">Ambiente 100% Seguro</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Lock strokeWidth={1.5} className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-[14px]">Dados Criptografados</span>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: CONTATO */}
          <div>
            <p className="font-bold text-white mb-6 uppercase tracking-widest text-[11px]">Contato</p>
            <ul className="space-y-5 text-[15px] text-white/70">
              <li className="flex items-start gap-4">
                <Clock strokeWidth={1.5} className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>08:30 às 17:30</span>
              </li>
              <li className="flex items-start gap-4">
                <MessageSquare strokeWidth={1.5} className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="mb-0.5">WhatsApp</span>
                  <a href="https://wa.me/5517981260785?text=Ol%C3%A1%2C%20gostaria%20de%20organizar%20a%20gest%C3%A3o%20financeira%20do%20meu%20escrit%C3%B3rio%20com%20a%20WeSimp%21" target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-brand-accent transition-colors">55 17 98126-0785</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MailPlus strokeWidth={1.5} className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="hover:text-white transition-colors duration-200">contato@wesimp.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin strokeWidth={1.5} className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="max-w-[240px]">Av. Milton Terra Verde, 880 Centro - Fernandópolis/SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM: COPYRIGHT */}
        <div className="pt-8 border-t border-white/10 text-[13px] flex flex-col md:flex-row justify-between items-center gap-4 text-white/50">
          <p>© 2026 WeSimp Soluções Contábeis Ltda · CNPJ 55.684.395/0001-80</p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

function WhyWeSimp() {
  const painPoints = [
    "Honorários parcelados",
    "Acordos com datas variáveis",
    "Meses com entradas concentradas",
    "Meses de caixa apertado."
  ];

  return (
    <section id="solucao" className="py-12 lg:py-32 bg-white overflow-hidden border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LADO ESQUERDO: TEXTO */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 leading-tight tracking-tight">
              Por que o BPO Financeiro da WeSimp é ideal para o seu escritório?
            </h2>
            
            <div className="space-y-6">
              <p className="text-[17px] text-neutral-medium leading-relaxed">
                O motivo é simples. Escritórios de advocacia tem uma dinâmica diferente.
              </p>
              <ul className="space-y-3">
                {painPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-sm"></div>
                    <span className="text-[17px] font-bold text-neutral-dark">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[17px] text-neutral-medium leading-relaxed font-bold border-l-4 border-brand-accent/30 pl-4 py-1">
                Um BPO genérico não resolve isso.
              </p>
            </div>

            <p className="text-lg text-neutral-medium leading-relaxed mb-6">
              Na WeSimp, reunimos uma equipe de contadores, uma plataforma de gestão e um analista dedicado ao seu escritório.
            </p>
          </div>
          
          {/* LADO DIREITO: IMAGEM + BOX */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl"></div>
              <img 
                src={whyWesimpImg} 
                alt="Gestão Financeira para Advogados" 
                className="rounded-3xl shadow-2xl relative z-10 border border-neutral-light/60 w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-900 text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-white/10">
                <p className="text-2xl font-bold mb-1">100%</p>
                <p className="text-xs uppercase tracking-widest text-brand-accent font-bold">Focado em Advocacia</p>
              </div>
            </div>

            <div className="bg-brand-accent/5 border-l-4 border-brand-accent p-8 rounded-r-2xl shadow-sm">
              <p className="text-brand-900 text-lg mb-4 leading-relaxed">
                O resultado: você para de perder tempo com o operacional e passa a ter clareza total sobre os seus números.
              </p>
              <p className="font-bold text-brand-900 text-xl tracking-tight leading-tight">
                Toda semana, todo mês, dados reais na tela, em um clique.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center">
          <a href="#contato" className="w-full sm:w-auto btn-primary px-12 py-5 rounded-xl font-black flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap text-[17.2px]">
            QUERO ORGANIZAR O FINANCEIRO
          </a>
          <p className="text-[10px] text-center text-neutral-medium/60 mt-4 uppercase tracking-[0.2em] font-bold">Atendemos advogados de todo o Brasil</p>
        </div>

      </div>
    </section>
  );
}

function Comparison() {
  const withoutWeSimp = [
    "Mistura contas pessoais com o escritório",
    "Perde horas com cobranças e extratos",
    "Não sabe exatamente quanto sobra",
    "Inadimplência dos clientes aumenta",
    "Vive apagando incêndios financeiros"
  ];

  const withWeSimp = [
    "Separação e organização completa",
    "Cobrança ativa e profissional",
    "Clareza total sobre lucro real",
    "Inadimplência reduzida consistentemente",
    "Rotina financeira organizada e previsível"
  ];

  return (
    <section className="py-12 lg:py-32 bg-neutral-light border-t border-neutral-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-accent/10 text-brand-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            Antes e depois
          </span>
          <h2 className="text-[33px] md:text-[39.6px] font-bold text-brand-900 tracking-tight">
            Veja a diferença:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* SEM WESIMP */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-neutral-light shadow-sm transition-all duration-300 ease-out">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                <XCircle strokeWidth={1.5} className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark">Sem o BPO da WeSimp</h3>
            </div>
            <ul className="space-y-4">
              {withoutWeSimp.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-medium/30 mt-2.5 shrink-0"></div>
                  <span className="text-[17px] text-neutral-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* COM WESIMP */}
          <div className="bg-white rounded-3xl pt-16 pb-8 px-8 lg:pt-20 lg:pb-12 lg:px-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-brand-accent/20 relative overflow-hidden transform lg:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out group">
            <div className="absolute top-0 right-0 bg-brand-accent text-white px-6 py-2 text-[11px] font-bold uppercase tracking-widest rounded-bl-xl shadow-sm">
              Ideal para você
            </div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                <CheckCircle2 strokeWidth={1.5} className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold text-brand-900">Com o BPO da WeSimp</h3>
            </div>
            <ul className="space-y-4">
              {withWeSimp.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 strokeWidth={1.5} className="w-5 h-5 text-brand-accent shrink-0 mt-0.5 opacity-80" />
                  <span className="text-[17px] font-bold text-brand-900 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center">
          <a href="#contato" className="w-full sm:w-auto btn-primary px-12 py-5 rounded-xl font-black flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(21,160,168,0.25)] hover:shadow-[0_12px_24px_rgba(21,160,168,0.35)] hover:-translate-y-0.5 transition-all whitespace-nowrap text-[17.2px]">
            QUERO ORGANIZAR O FINANCEIRO
          </a>
          <p className="text-[10px] text-center text-neutral-medium/60 mt-4 uppercase tracking-[0.2em] font-bold">Atendemos advogados de todo o Brasil</p>
        </div>

      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5517981260785?text=Ol%C3%A1%2C%20gostaria%20de%20organizar%20a%20gest%C3%A3o%20financeira%20do%20meu%20escrit%C3%B3rio%20com%20a%20WeSimp%21"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 lg:bottom-10 right-6 lg:right-10 z-[100] rounded-full shadow-[0_8px_30px_rgba(39,208,69,0.3)] hover:scale-110 hover:shadow-[0_12px_40px_rgba(39,208,69,0.5)] transition-all duration-300 flex items-center justify-center group"
      aria-label="Falar conosco no WhatsApp"
    >
      <img src={whatsappImg} alt="WhatsApp" className="w-[60px] h-[60px] md:w-[68px] md:h-[68px] object-contain block" />
      <span className="absolute top-0.5 right-0.5 md:top-1 md:right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-light font-sans text-text-primary">
      <Navbar />
      <Hero />
      <WhyWeSimp />
      <Comparison />
      <Features />
      <TargetAudience />
      <BottomCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
