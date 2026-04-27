/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MapPin, Phone, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans flex flex-col relative selection:bg-gold/30 selection:text-white">
      {/* Background Texture Overlay */}
      <div 
        className="fixed inset-0 opacity-10 pointer-events-none z-0" 
        style={{ backgroundImage: 'radial-gradient(var(--color-gold) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
      ></div>

      {/* Top Navigation */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-8 z-10 border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0">
        <div className="text-2xl tracking-[0.3em] font-light uppercase text-gold flex items-center gap-4">
          <img src="/logo.jpg.png" alt="Amitti Logo" className="w-16 h-16 object-contain" />
          AMITTI
        </div>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
          <a href="#inicio" className="text-gold">Início</a>
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre Nós</a>
          <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
          <a href="#projetos" className="hover:text-gold transition-colors">Projetos</a>
          <a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a>
          <a href="#showroom" className="hover:text-gold transition-colors">Showroom</a>
        </div>
      </nav>

      <main className="flex-1 flex flex-col z-10">
        {/* Hero Section */}
        <section id="inicio" className="flex flex-col md:flex-row px-6 md:px-16 pt-8 pb-20 md:pt-12 md:pb-32 items-center gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-10">
            <div className="space-y-4">
              <p className="text-[12px] uppercase tracking-[0.5em] text-gold font-semibold flex items-center gap-3">
                <span className="w-8 h-px bg-gold/50 inline-block"></span>
                Exclusividade
              </p>
              <h1 className="text-6xl md:text-8xl font-serif leading-[1.1] italic text-white font-light">
                Elegante <br/> 
                <span className="not-italic text-gold font-normal">Exclusivo</span> <br/>
                Planejado
              </h1>
            </div>
            
            <p className="text-lg text-white/60 max-w-md font-light leading-relaxed">
              Mais de <span className="text-white font-medium">10 anos</span> de experiência no seguimento moveleiro. Criando espaços que inspiram e refletem a sua essência.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a href="https://wa.me/5547992373755" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gold text-black text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-gold-hover transition-all flex items-center gap-2">
                Fale com a Amitti
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <div className="flex flex-col border-l border-white/10 pl-8">
                <span className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Revendedor Oficial</span>
                <a href="https://instagram.com/inusitta" target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium tracking-wide hover:text-gold transition-colors flex items-center gap-2">
                  <Instagram size={14} />
                  @inusitta
                </a>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 h-[500px] md:h-[650px] relative mt-10 md:mt-0">
            <div className="absolute inset-0 bg-[#121212] rounded-lg shadow-2xl overflow-hidden border border-white/10 group">
              <img 
                src="/imagem-fachada.png" 
                alt="Fachada Amitti" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 w-1/2 h-[1px] bg-gold/30"></div>
              
              <div className="absolute top-10 right-10 p-6 backdrop-blur-md bg-black/40 border border-white/10 rounded-lg">
                <div className="w-16 h-16 border border-gold/40 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-[10px] text-gold font-serif italic text-center leading-tight">Design<br/>Assinado</span>
                </div>
              </div>
            </div>
            
            {/* Floating Merit Badge */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-[#0a0a0a] p-8 md:p-10 border border-white/10 rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.8)] z-20">
              <div className="text-5xl md:text-6xl font-serif text-gold">10+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60 mt-2">Anos de<br/>Experiência</div>
            </div>
          </div>
        </section>

        {/* Sobre Nós Section */}
        <section id="sobre" className="px-6 md:px-16 py-24 bg-[#0a0a0a] border-t border-white/5 relative z-10 flex flex-col items-center">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-8">
              <div className="space-y-4">
                <p className="text-[12px] uppercase tracking-[0.5em] text-gold font-semibold flex items-center gap-3">
                  <span className="w-8 h-px bg-gold/50 inline-block"></span>
                  Quem Somos
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                  Tradição e <span className="italic text-gold">Excelência</span> em Cada Detalhe
                </h2>
              </div>
              <div className="space-y-6 text-white/60 font-light leading-relaxed">
                <p>
                  A Amitti atua há mais de 10 anos no segmento moveleiro de alto padrão em Balneário Camboriú, entregando projetos que unem sofisticação, funcionalidade e design exclusivo.
                </p>
                <p>
                  Como revenda oficial <strong className="text-white font-medium">@inusitta</strong>, garantimos a mais alta qualidade em materiais e acabamentos, transformando o seu espaço com a precisão de quem entende o valor de um ambiente bem planejado.
                </p>
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-serif text-gold">A</span>
                  </div>
                  <div>
                    <p className="text-white font-medium uppercase tracking-widest text-[11px]">Amitti</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Móveis Planejados</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] bg-[#121212] overflow-hidden border border-white/5 relative z-10">
                <img 
                  src="/imagem1.jpg" 
                  alt="Quem Somos Amitti" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-gold/5 blur-3xl -z-10 translate-x-8 translate-y-8"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-gold/20 -z-10 bg-transparent rotate-12"></div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="px-6 md:px-16 py-24 bg-[#121212] border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <p className="text-[12px] uppercase tracking-[0.5em] text-gold font-semibold flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-gold/50 inline-block"></span>
                Serviços
                <span className="w-8 h-px bg-gold/50 inline-block"></span>
              </p>
              <h2 className="text-4xl font-serif text-white">Nossas <span className="italic text-gold">Soluções</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Projetos Residenciais', desc: 'Móveis planejados para toda a sua casa, do home theater à cozinha gourmet. Ambientes integrados com harmonia e elegância.' },
                { title: 'Espaços Corporativos', desc: 'Soluções ergonômicas e sofisticadas para escritórios, consultórios e lojas. Ambientes que refletem o profissionalismo da sua marca.' },
                { title: 'Consultoria Especializada', desc: 'Acompanhamento do projeto desde a medição no local até a finalização da montagem, garantindo que tudo seja executado com perfeição.' }
              ].map((servico, i) => (
                <div key={i} className="p-10 border border-white/5 bg-[#0a0a0a] group hover:border-gold/30 transition-colors">
                  <div className="text-gold font-serif text-5xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                  <h3 className="text-xl font-medium text-white mb-4">{servico.title}</h3>
                  <p className="text-white/50 text-sm font-light leading-relaxed">{servico.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="projetos" className="px-6 md:px-16 py-24 bg-[#0a0a0a] border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-serif text-white">Nosso <span className="italic text-gold">Trabalho</span></h2>
              <p className="text-white/50 text-sm tracking-widest uppercase">Elegância em cada detalhe</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "/instagram4.png",
                "/instagram3.png",
                "/instagram2.png",
              ].map((img, i) => (
                <div key={i} className="aspect-[4/5] relative overflow-hidden group border border-white/5 bg-[#1a1a1a]">
                  <img src={img} alt="Projeto Amitti" className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-gold font-serif italic text-lg">Projeto Residencial</p>
                    <p className="text-xs uppercase tracking-widest text-white/70 mt-1">Balneário Camboriú</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section id="depoimentos" className="px-6 md:px-16 py-24 bg-[#121212] border-t border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <p className="text-[12px] uppercase tracking-[0.5em] text-gold font-semibold flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-gold/50 inline-block"></span>
                Depoimentos
                <span className="w-8 h-px bg-gold/50 inline-block"></span>
              </p>
              <h2 className="text-4xl font-serif text-white">O que <span className="italic text-gold">Dizem</span> Sobre Nós</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Julio Cesar Freitas', text: 'Tivemos um ótimo atendimento desde o início. A loja cumpriu o prazo de entrega e a montagem foi muito bem executada. Equipe atenciosa e profissional. Indico com certeza!' },
                { name: 'Sete & Freitas Consultoria Ltda.', text: 'Ótimo atendimento e entrega dentro do prazo combinado. Profissionais altamente capacitados, sempre orientando e auxiliando no desenvolvimento do projeto. Montagem impecável.' },
                { name: 'Elizangela Rocha', text: 'Muito feliz com meus móveis planejados da Amitti . Entrega rápida e no prazo, zero problemas. A projetista, aos montadores muito atenciosos a cada detalhe do que foi solicitado. Montagem e material de ótima qualidade. Ficou muito lindo!! PARABÉNS E SUCESSO!!' },
                { name: 'Sabrina Dal Farra', text: 'a Amitti Móveis Planejados fez um trabalho incrível! Desde o atendimento, compra até a instalação… tudo foi perfeito. O acabamento dos móveis é de primeira, e a montagem foi mais rápida do que eu esperava. Vale muito a pena!' },
                { name: 'Priscilla Souza', text: '"Muito feliz com a escolha da Amitti! Os móveis são de altíssima qualidade e o processo de montagem foi rápido e organizado. A loja cumpre exatamente o que promete: qualidade e eficiência. Super recomendo!"' },
                { name: 'Vittória Norcio', text: 'Comprei móveis planejados na Amitti e não poderia estar mais feliz. A equipe é extremamente competente, a montagem ficou impecável e a qualidade do produto é inigualável. Vale cada centavo' }
              ].map((depoimento, i) => (
                <div key={i} className="p-8 border border-white/5 bg-[#0a0a0a] group hover:border-gold/30 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((_, starIndex) => (
                        <Star key={starIndex} size={14} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <div className="text-gold font-serif text-4xl mb-4 opacity-50 absolute -mt-4 opacity-10">"</div>
                    <p className="text-white/60 text-sm font-light leading-relaxed mb-8 italic relative z-10">{depoimento.text}</p>
                  </div>
                  <div>
                    <div className="w-8 h-px bg-gold/30 mb-4 group-hover:w-16 transition-all duration-500"></div>
                    <p className="text-white font-medium text-sm tracking-wide">{depoimento.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Contact Bar */}
      <footer id="showroom" className="bg-black px-6 md:px-16 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0 border-t border-white/5 z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-4 mb-4">
              <img src="/logo.jpg.png" alt="Amitti Logo" className="w-16 h-16 object-contain opacity-70" />
              <div className="text-2xl tracking-[0.3em] font-light uppercase text-gold opacity-70">AMITTI</div>
            </div>
            <p className="text-sm text-white/50 max-w-xs font-light">
              Móveis planejados com excelência, exclusividade e elegância.
            </p>
          </div>
          
          <div className="hidden md:block h-20 w-[1px] bg-white/10"></div>
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold mb-3">
              <MapPin size={12} />
              Showroom
            </span>
            <span className="text-sm text-white/80 font-light leading-relaxed">
              Rua 3160, 440, Centro<br/>
              <span className="italic text-white/60">Balneário Camboriú, SC - 88330-284</span>
            </span>
          </div>

          <div className="hidden md:block h-20 w-[1px] bg-white/10"></div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold mb-3">
              <Phone size={12} />
              Contato / WhatsApp
            </span>
            <a href="https://wa.me/5547992373755" target="_blank" rel="noopener noreferrer" className="text-sm text-white font-medium tracking-wider hover:text-gold transition-colors">
              (47) 99237-3755
            </a>
          </div>
        </div>
        
        <div className="flex gap-4">
          <a href="https://www.instagram.com/amittimoveis/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-colors">
            <Instagram size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
