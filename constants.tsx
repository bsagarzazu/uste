import React from 'react';
import { Truck, Mail, Building2, Clock, Package, ShieldCheck, Briefcase } from 'lucide-react';

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
      subtitle: "Más de 30 años garantizando la entrega segura y puntual de su documentación, valizas y suministros industriales en Álava.",
      ctaPrimary: "Ver Servicios",
      ctaSecondary: "Contacto Directo"
    },
    services: {
      sectionTitle: "Servicios Especializados",
      sectionSubtitle: "Soluciones logísticas adaptadas a la industria y el comercio de Vitoria.",
      list: [
        {
          title: "Suministros Industriales",
          description: "Servicio diario especializado para empresas líderes (Mercedes-Benz, Michelin, Guardian, DHL) y toda la industria auxiliar en Álava. Cobertura total en polígonos.",
          icon: <Truck className="w-6 h-6" />
        },
        {
          title: "Valizas y Correo Interno",
          description: "Gestión diaria de bolsas de correspondencia (valizas) entre delegaciones, sucursales bancarias y sedes corporativas con máxima confidencialidad.",
          icon: <Briefcase className="w-6 h-6" />
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
          title: "Servicios Urgentes",
          description: "Atención inmediata para envíos 'punto a punto' con máxima prioridad en toda el área metropolitana.",
          icon: <Clock className="w-6 h-6" />
        }
      ]
    },
    zones: {
      title: "Áreas de Operación Diaria",
      subtitle: "Presencia constante en los principales núcleos industriales de Vitoria-Gasteiz.",
      list: ["Jundiz", "Gamarra", "Ali-Gobeo", "Betoño", "Eritza", "Ansoar", "Subillabide"]
    },
    about: {
      badge: "Años de experiencia",
      title: "Su socio logístico local",
      desc: "Operamos con agilidad en toda Vitoria-Gasteiz y sus polígonos industriales más importantes.",
      item1: { title: "Fiabilidad", desc: "Referencia en mensajería para banca y gran industria." },
      item2: { title: "Compromiso", desc: "Conocemos cada ruta y operativa de Álava." },
      item3: { title: "Rapidez", desc: "Respuesta inmediata gracias a nuestra base en el centro de la ciudad." }
    },
    contact: {
      title: "¿Hablamos?",
      subtitle: "Póngase en contacto para presupuestos personalizados o rutas fijas.",
      labelCall: "Teléfonos de contacto",
      labelEmail: "Correo electrónico",
      labelAddress: "Sede Central",
      base: "Base Vitoria-Gasteiz"
    },
    footer: {
      copy: "Todos los derechos reservados.",
      tag: "Especialistas en mensajería industrial y servicios de valizas.",
      tags: ["Servicio Integral", "Mensajería Local", "Logística Industrial", "Gestión de Valizas"]
    }
  },
  eu: {
    nav: { services: "Zerbitzuak", company: "Enpresa", contact: "Kontaktua" },
    hero: {
      title: "Konfiantzazko mezularitza",
      city: "Vitoria-Gasteizen",
      subtitle: "30 urte baino gehiago Arabako zure dokumentazioa, balizak eta industria-hornidura modu seguru eta puntualean entregatzen dela bermatzen.",
      ctaPrimary: "Zerbitzuak Ikusi",
      ctaSecondary: "Zuzeneko Kontaktua"
    },
    services: {
      sectionTitle: "Zerbitzu Espezializatuak",
      sectionSubtitle: "Vitoria-Gasteizko industriara eta merkataritzara egokitutako soluzio logistikoak.",
      list: [
        {
          title: "Industria Hornidurak",
          description: "Eguneroko zerbitzu espezializatua Mercedes-Benz, Michelin, Guardian, DHL eta Arabako industria osagarri osoarentzat. Industrialdeen estaldura osoa.",
          icon: <Truck className="w-6 h-6" />
        },
        {
          title: "Balizak eta Barne Posta",
          description: "Ordezkaritzen, banku-sukurtsalen eta egoitza korporatiboen arteko korrespondentzia-zorroen (balizen) eguneroko kudeaketa, konfidentzialtasun handienarekin.",
          icon: <Briefcase className="w-6 h-6" />
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
          title: "Premiazko Zerbitzuak",
          description: "Berehalako arreta 'puntutik puntura' bidalketetarako, lehentasun osoz metropoli-eremu osoan.",
          icon: <Clock className="w-6 h-6" />
        }
      ]
    },
    about: {
      badge: "Esperientzia urteak",
      title: "Zure tokiko bazkide logistikoa",
      desc: "Vitoria-Gasteiz osoan eta bere industria-industrialde garrantzitsuenetan bizkor ari gara.",
      item1: { title: "Fidagarritasuna", desc: "Banku eta industria handiaren mezularitzan erreferente." },
      item2: { title: "Konpromisoa", desc: "Arabako ibilbide eta operatiba guztiak ezagutzen ditugu." },
      item3: { title: "Azkartasuna", desc: "Berehalako erantzuna hiri erdian dugun egoitzari esker." }
    },
    contact: {
      title: "Hitz egingo dugu?",
      subtitle: "Jarri gurekin harremanetan aurrekontu pertsonalizatuak edo ibilbide finkoak eskatzeko.",
      labelCall: "Kontaktu-telefonoak",
      labelEmail: "Posta elektronikoa",
      labelAddress: "Egoitza Nagusia",
      base: "Vitoria-Gasteizko Egoitza"
    },
    footer: {
      copy: "Eskubide guztiak erreserbatuta.",
      tag: "Industria-mezularitzan eta baliza-zerbitzuetan adituak.",
      tags: ["Zerbitzu Integrala", "Tokiko Mezularitza", "Industria Logistika", "Balizen Kudeaketa"]
    }
  }
};

export const CONTACT_INFO = {
  phones: ["945 06 39 82", "649 66 72 72", "609 46 29 12"],
  email: "uste@uste.es",
  address: "Estrasburgo Pasealekua 7, 01002",
  location: "Vitoria-Gasteiz, Araba"
};