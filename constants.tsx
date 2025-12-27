import React from 'react';
import { Truck, Mail, Building2, Clock, Package, ShieldCheck } from 'lucide-react';

export const COLORS = {
  primary: '#C41E3A', // USTE Red
  secondary: '#1E3A8A', // USTE Navy Blue
};

export const TRANSLATIONS = {
  es: {
    nav: { services: "Servicios", company: "La Empresa", contact: "Contacto" },
    hero: {
      title: "Mensajería de confianza en",
      city: "Vitoria-Gasteiz",
      subtitle: "Más de 30 años garantizando la entrega segura y puntual de su documentación y suministros industriales en Álava.",
      ctaPrimary: "Ver Servicios",
      ctaSecondary: "Contacto Directo"
    },
    services: {
      sectionTitle: "Servicios para Empresas",
      sectionSubtitle: "Soluciones logísticas adaptadas a la industria de Vitoria.",
      list: [
        {
          title: "Suministros Industriales",
          description: "Servicio diario especializado para empresas líderes en Álava. Cobertura extensiva en Jundiz, Gamarra, Ali-Gobeo y Betoño.",
          icon: <Truck className="w-6 h-6" />
        },
        {
          title: "Documentación y Notarías",
          description: "Gestión crítica y segura de documentos para entidades bancarias, notarías, asesorías y gestorías en Vitoria.",
          icon: <Building2 className="w-6 h-6" />
        },
        {
          title: "Apartado de Correos",
          description: "Recogida diaria de su apartado. Garantizamos que su correspondencia esté disponible antes de empezar su jornada.",
          icon: <Mail className="w-6 h-6" />
        },
        {
          title: "Organismos Oficiales",
          description: "Tramitación ágil ante Seguridad Social, Gobierno Vasco, Diputación Foral de Álava y Ayuntamientos.",
          icon: <ShieldCheck className="w-6 h-6" />
        },
        {
          title: "Paquetería y Pedidos",
          description: "Recogida de pedidos locales y entrega express para comercios, farmacias y sedes corporativas.",
          icon: <Package className="w-6 h-6" />
        },
        {
          title: "Servicios Urgentes",
          description: "Atención inmediata para envíos 'punto a punto' con máxima prioridad en toda el área metropolitana.",
          icon: <Clock className="w-6 h-6" />
        }
      ]
    },
    about: {
      badge: "Años de experiencia",
      title: "Su socio logístico local",
      desc: "Operamos con agilidad en toda Vitoria-Gasteiz y sus polígonos: Jundiz, Gamarra, Ali-Gobeo y Betoño.",
      item1: { title: "Fiabilidad", desc: "Referencia en mensajería para empresas." },
      item2: { title: "Compromiso", desc: "Conocemos cada operativa de Álava." }
    },
    contact: {
      title: "¿Hablamos?",
      subtitle: "Póngase en contacto para presupuestos o rutas fijas.",
      labelCall: "Llámanos",
      labelEmail: "Email",
      labelAddress: "Sede",
      base: "Base Vitoria-Gasteiz"
    },
    footer: {
      copy: "Todos los derechos reservados.",
      tag: "Especialistas en mensajería industrial.",
      tags: ["Servicio Integral", "Mensajería Local", "Logística Industrial"]
    }
  },
  eu: {
    nav: { services: "Zerbitzuak", company: "Enpresa", contact: "Kontaktua" },
    hero: {
      title: "Konfiantzazko mezularitza",
      city: "Gasteizen",
      subtitle: "30 urte baino gehiago Arabako zure dokumentazioa eta industria-hornidura modu seguru eta puntualean entregatzen dela bermatzen.",
      ctaPrimary: "Zerbitzuak Ikusi",
      ctaSecondary: "Zuzeneko Kontaktua"
    },
    services: {
      sectionTitle: "Enpresentzako Zerbitzuak",
      sectionSubtitle: "Gasteizko industriara egokitutako soluzio logistikoak.",
      list: [
        {
          title: "Industria Hornidurak",
          description: "Arabako enpresa garrantzitsuentzako zerbitzu berezitua. Estaldura zabala Jundiz, Gamarra, Ali-Gobeo eta Betoñon.",
          icon: <Truck className="w-6 h-6" />
        },
        {
          title: "Dokumentazioa eta Notaritzak",
          description: "Dokumentuen kudeaketa kritiko eta segurua bankuentzat, notaritzentzat, aholkularitzentzat eta gestorientzat.",
          icon: <Building2 className="w-6 h-6" />
        },
        {
          title: "Posta-kutxak",
          description: "Zure kutxaren eguneroko bilketa. Zure korrespondentzia lanaldia hasi baino lehen prest egongo dela bermatzen dugu.",
          icon: <Mail className="w-6 h-6" />
        },
        {
          title: "Erakunde Ofizialak",
          description: "Gizarte Segurantzan, Eusko Jaurlaritzan, Arabako Foru Aldundian eta Udaletan kudeaketa azkarra.",
          icon: <ShieldCheck className="w-6 h-6" />
        },
        {
          title: "Paketeria eta Eskaerak",
          description: "Tokiko eskaeren bilketa eta bidalketa azkarra saltokientzat, farmazientzat eta egoitza korporatiboentzat.",
          icon: <Package className="w-6 h-6" />
        },
        {
          title: "Premiazko Zerbitzuak",
          description: "Berehalako arreta 'puntutik puntura' bidalketetarako, lehentasun osoz metropoli-eremu osoan.",
          icon: <Clock className="w-6 h-6" />
        }
      ]
    },
    about: {
      badge: "Esperientzia urteak",
      title: "Zure tokiko bazkide logistikoa",
      desc: "Gasteiz osoan eta bere industrialdeetan bizkor ari gara: Jundiz, Gamarra, Ali-Gobeo eta Betoño.",
      item1: { title: "Fidagarritasuna", desc: "Erreferentzia enpresentzako mezularitzan." },
      item2: { title: "Konpromisoa", desc: "Arabako operatiba guztiak ezagutzen ditugu." }
    },
    contact: {
      title: "Hitz egingo dugu?",
      subtitle: "Jarri gurekin harremanetan aurrekontuak edo ibilbide finkoak eskatzeko.",
      labelCall: "Deitu",
      labelEmail: "Emaila",
      labelAddress: "Egoitza",
      base: "Gasteizko Egoitza"
    },
    footer: {
      copy: "Eskubide guztiak erreserbatuta.",
      tag: "Industria-mezularitzan adituak.",
      tags: ["Zerbitzu Integrala", "Tokiko Mezularitza", "Industria Logistika"]
    }
  }
};

export const CONTACT_INFO = {
  phones: ["945 06 39 82", "649 66 72 72"],
  email: "uste@uste.es",
  address: "Estrasburgo Pasealekua 7, 01002",
  location: "Vitoria-Gasteiz, Araba"
};
