import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { Section } from './components/Section';
import { TRANSLATIONS, CONTACT_INFO } from './constants';
import { Phone, Mail, MapPin, ChevronRight, History, Award, Zap} from 'lucide-react';

/**
 * Función para resolver rutas de imágenes en GitHub Pages.
 * Si subes tu imagen a: public/img/foto.jpg
 * Debes llamarla como: getAssetUrl("img/foto.jpg")
 */
const getAssetUrl = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  // Asegura que no haya dobles barras y que incluya el prefijo del repo (/uste/)
  return `${base}${path}`.replace(/\/+/g, '/');
};

const heroImg = getAssetUrl("img/hero-uste.jpg"); 
const aboutImg = getAssetUrl("img/about-uste.jpg");
const footerBgImg = getAssetUrl("img/vitoria-wikipedia.png"); 

const App: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'eu'>('es');
  const t = TRANSLATIONS[lang];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm" aria-label="Navegación principal">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <a href="#" className="hover:opacity-80 transition-opacity" title="Inicio">
            <Logo lang={lang} className="scale-75 md:scale-90 origin-left" />
          </a>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600 uppercase tracking-widest">
              <a href="#servicios" className="hover:text-red-600 transition-colors">{t.nav.services}</a>
              <a href="#empresa" className="hover:text-red-600 transition-colors">{t.nav.company}</a>
              <a href="#contacto" className="hover:text-red-600 transition-colors">{t.nav.contact}</a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-full p-1 border border-slate-200">
              <button 
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'es' ? 'bg-white shadow-sm text-red-600' : 'text-slate-400 hover:text-slate-600'}`}
                aria-label="Cambiar a Castellano"
              >
                ES
              </button>
              <button 
                onClick={() => setLang('eu')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'eu' ? 'bg-white shadow-sm text-red-600' : 'text-slate-400 hover:text-slate-600'}`}
                aria-label="Euskarara aldatu"
              >
                EU
              </button>
            </div>

            <div className="flex md:hidden">
               <a 
                 href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, '')}`} 
                 className="p-2.5 bg-red-600 text-white rounded-full shadow-lg active:scale-95 transition-transform"
                 aria-label="Llamar ahora"
               >
                  <Phone className="w-5 h-5" />
               </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="relative h-[90vh] md:h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Furgonetas de USTE alineadas en frente de la Oficina de Correos de Vitoria-Gasteiz"
            className="w-full h-full object-cover brightness-[0.35]"
            loading="eager"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              {t.hero.title} <span className="text-red-500">{t.hero.city}</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#servicios" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2 group">
                {t.hero.ctaPrimary} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contacto" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-center transition-all">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Section id="servicios" title={t.services.sectionTitle} subtitle={t.services.sectionSubtitle}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.services.list.map((service, index) => (
              <article key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="empresa" light className="overflow-hidden py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img 
                src={aboutImg} 
                alt="Furgoneta de USTE realizando entregas en Vitoria-Gasteiz"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <span className="text-3xl font-bold block">+30</span>
                <span className="text-xs uppercase tracking-widest">{t.about.badge}</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">{t.about.desc}</p>
              <div className="space-y-6">
                <div className="flex gap-4"><Award className="text-red-600 shrink-0" aria-hidden="true" /> <div><h4 className="font-bold">{t.about.item1.title}</h4><p className="text-sm text-slate-600">{t.about.item1.desc}</p></div></div>
                <div className="flex gap-4"><History className="text-red-600 shrink-0" aria-hidden="true" /> <div><h4 className="font-bold">{t.about.item2.title}</h4><p className="text-sm text-slate-600">{t.about.item2.desc}</p></div></div>
                <div className="flex gap-4"><Zap className="text-red-600 shrink-0" aria-hidden="true" /> <div><h4 className="font-bold">{t.about.item3.title}</h4><p className="text-sm text-slate-600">{t.about.item3.desc}</p></div></div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="contacto" className="bg-slate-900 text-white py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
              <p className="text-slate-400 mb-10">{t.contact.subtitle}</p>
              <div className="space-y-8">
                <div className="flex items-start gap-4"><Phone className="text-red-500 mt-1" aria-hidden="true" /> <div><h4 className="text-xs uppercase text-slate-500 font-bold mb-1">{t.contact.labelCall}</h4>{CONTACT_INFO.phones.map((p,i)=><a key={i} href={`tel:${p.replace(/\s/g, '')}`} className="block text-xl font-bold hover:text-red-500">{p}</a>)}</div></div>
                <div className="flex items-start gap-4"><Mail className="text-red-500 mt-1" aria-hidden="true" /> <div><h4 className="text-xs uppercase text-slate-500 font-bold mb-1">{t.contact.labelEmail}</h4><a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold hover:text-red-500">{CONTACT_INFO.email}</a></div></div>
                <div className="flex items-start gap-4"><MapPin className="text-red-500 mt-1" aria-hidden="true" /> <div><h4 className="text-xs uppercase text-slate-500 font-bold mb-1">{t.contact.labelAddress}</h4><p className="text-xl font-bold">{CONTACT_INFO.address}</p><p className="text-slate-400">{CONTACT_INFO.location}</p></div></div>
              </div>
            </div>
            <div className="h-full min-h-[300px] relative rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <img src={footerBgImg} alt="Mapa de Vitoria-Gasteiz y alrededores" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="lazy" />
               <div className="absolute inset-0 flex flex-col items-center justify-center" aria-hidden="true" ><MapPin className="w-10 h-10 text-red-600 animate-bounce" /><p className="font-bold mt-2">{t.contact.base}</p></div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo lang={lang} className="grayscale brightness-200 scale-75 origin-center md:origin-left" />
            <div className="mt-4 flex flex-col items-center md:items-start gap-1">
              <p className="text-xs text-slate-400 font-medium">
                Copyright © {new Date().getFullYear()} USTE Mensajería. {t.footer.copy}
              </p>
              <p className="text-[10px] text-slate-600">
                Vitoria-Gasteiz, Álava. {t.footer.tag}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600" aria-hidden="true">
             {t.footer.tags.map((tag, i) => (
               <React.Fragment key={tag}>
                 <span>{tag}</span>
                 {i < t.footer.tags.length - 1 && <span className="text-slate-800">•</span>}
               </React.Fragment>
             ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
