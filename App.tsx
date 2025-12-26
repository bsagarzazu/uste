
import React from 'react';
import { Logo } from './components/Logo.tsx';
import { Section } from './components/Section.tsx';
import { SERVICES, CONTACT_INFO } from './constants.tsx';
import { Phone, Mail, MapPin, ChevronRight, History, Award, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo className="scale-75 md:scale-90 origin-left" />
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600 uppercase tracking-widest">
            <a href="#servicios" className="hover:text-red-600 transition-colors">Servicios</a>
            <a href="#empresa" className="hover:text-red-600 transition-colors">La Empresa</a>
            <a href="#contacto" className="hover:text-red-600 transition-colors">Contacto</a>
          </div>
          <div className="flex md:hidden">
             <a href="tel:945063982" className="p-2 bg-red-600 text-white rounded-full">
                <Phone className="w-5 h-5" />
             </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad21?auto=format&fit=crop&q=80&w=2000" 
            alt="Logística en ciudad"
            className="w-full h-full object-cover brightness-[0.35]"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Mensajería de confianza en <span className="text-red-500">Vitoria-Gasteiz</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
              Más de 30 años garantizando la entrega segura y puntual de su documentación, paquetes y suministros industriales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#servicios" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2 group"
              >
                Nuestros Servicios
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contacto" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-center transition-all"
              >
                Contacto Directo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section id="servicios" title="Servicios para Empresas" subtitle="Soluciones logísticas a medida, adaptadas a la operativa diaria y al presupuesto de cada cliente.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Us Section */}
      <Section id="empresa" light className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512133911619-dfb3403a740f?auto=format&fit=crop&q=80&w=1200" 
                alt="Furgoneta de reparto en Vitoria"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <span className="text-4xl font-bold block">+30</span>
              <span className="text-sm font-medium uppercase tracking-widest">Años de Servicio</span>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">Su socio logístico local</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              En USTE realizamos servicios personalizados según la demanda de cada empresa. Operamos con agilidad en toda Vitoria-Gasteiz y sus cinturones industriales, optimizando sus procesos de envío.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Award className="text-red-600" />, title: "Fiabilidad Garantizada", text: "Tres décadas de experiencia nos permiten ofrecer un servicio sin errores." },
                { icon: <History className="text-red-600" />, title: "Compromiso Local", text: "Conocemos cada rincón de los polígonos de Álava para entregas más rápidas." },
                { icon: <CheckCircle2 className="text-red-600" />, title: "Eficiencia Económica", text: "Externalice su mensajería y ahorre en costes de personal, combustible y vehículos." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contacto" className="bg-slate-900 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">¿Hablamos?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Contacte con nosotros para solicitar información personalizada y presupuestos ajustados a sus necesidades.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-300 uppercase text-xs tracking-widest mb-1">Teléfonos</h4>
                  <div className="flex flex-col gap-1">
                    {CONTACT_INFO.phones.map((phone, i) => (
                      <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="text-2xl font-bold hover:text-red-500 transition-colors">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-300 uppercase text-xs tracking-widest mb-1">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-2xl font-bold hover:text-red-500 transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-300 uppercase text-xs tracking-widest mb-1">Dirección</h4>
                  <p className="text-2xl font-bold">{CONTACT_INFO.address}</p>
                  <p className="text-slate-400">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-1 rounded-3xl overflow-hidden border border-white/10 h-full min-h-[400px]">
             <div className="w-full h-full bg-slate-800 flex items-center justify-center relative group">
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200" 
                  alt="Vitoria-Gasteiz"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <MapPin className="w-12 h-12 text-red-600 mb-4 animate-pulse" />
                  <p className="text-xl font-bold">Base de Operaciones</p>
                  <p className="text-slate-300">Vitoria-Gasteiz y Polígonos Industriales</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo className="grayscale brightness-200 scale-75 origin-left" />
            <p className="text-sm mt-4">© {new Date().getFullYear()} USTE Mensajería. Todos los derechos reservados.</p>
          </div>
          <div className="flex gap-8 text-xs font-medium uppercase tracking-tighter">
             <span>Servicio de mensajería profesional en Álava</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
