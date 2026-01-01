import React from 'react';
import { Truck, Mail, Building2, Clock, Package, ShieldCheck, Briefcase } from 'lucide-react';

export const COLORS = {
  primary: '#C41E3A', // USTE Red
  secondary: '#1E3A8A', // USTE Navy Blue
};

export const TRANSLATIONS = {
  es: {
    nav: { services: "Servicios", company: "La empresa", contact: "Contacto" },
    clients: { trust: "Confían en nosotros" },
    hero: {
      title: "Mensajería de confianza en",
      city: "Vitoria-Gasteiz",
      subtitle: "Más de 30 años garantizando la entrega segura y puntual de su documentación, valijas y suministros industriales en Álava.",
      ctaPrimary: "Ver servicios",
      ctaSecondary: "Contacto directo"
    },
    services: {
      sectionTitle: "Servicios especializados",
      sectionSubtitle: "Soluciones logísticas adaptadas a la industria y el comercio de Vitoria-Gasteiz.",
      list: [
        {
          title: "Suministros industriales",
          description: "Servicio diario de recogida y entrega de suministros industriales: Ferretería Marañón, Alevisal, Optimus3d, Suministros Zadorra, Caype, etcétera. Cobertura total en polígonos.",
          icon: <Truck className="w-6 h-6" />
        },
        {
          title: "Valijas y correo interno",
          description: "Gestión diaria de bolsas de correspondencia (valijas) entre delegaciones, sucursales bancarias, personal en teletrabajo y sedes corporativas con máxima confidencialidad.",
          icon: <Briefcase className="w-6 h-6" />
        },
        {
          title: "Documentación y notarías",
          description: "Gestión crítica y segura de documentos para entidades bancarias, notarías, asesorías y gestorías en Vitoria-Gasteiz.",
          icon: <Building2 className="w-6 h-6" />
        },
        {
          title: "Apartado de correos",
          description: "Recogida diaria de su apartado (Correos, DHL, Nacex, etcétera). Garantizamos que su correspondencia esté disponible antes de empezar su jornada.",
          icon: <Mail className="w-6 h-6" />
        },
        {
          title: "Organismos oficiales",
          description: "Tramitación ágil ante la Seguridad Social, la Cámara de Comercio, el Gobierno Vasco, la Diputación Foral de Álava y ayuntamientos.",
          icon: <ShieldCheck className="w-6 h-6" />
        },
        {
          title: "Servicios urgentes",
          description: "Atención inmediata para envíos 'punto a punto' con máxima prioridad en toda el área metropolitana.",
          icon: <Clock className="w-6 h-6" />
        }
      ]
    },
    about: {
      badge: "Años de experiencia",
      title: "Su socio logístico local",
      desc: "Operamos con agilidad en toda Vitoria-Gasteiz y sus polígonos industriales más importantes.",
      item1: { title: "Fiabilidad", desc: "Referencia en mensajería para banca y gran industria." },
      item2: { title: "Compromiso", desc: "Conocemos cada ruta y operativa de Álava." },
      item3: { title: "Rapidez", desc: "Respuesta inmediata en el centro de la ciudad y en los polígonos industriales circundantes." }
    },
    contact: {
      title: "¿Hablamos?",
      subtitle: "USTE le ahorra dinero a su empresa evitando numerosos gastos resultantes de consumo de gasolina, tarjetas de aparcamiento, tiempo personal, posibles multas, etcétera. Póngase en contacto para presupuestos personalizados.",
      labelCall: "Teléfonos de contacto",
      labelEmail: "Correo electrónico",
      labelAddress: "Sede central",
      base: "Actividad en Vitoria-Gasteiz"
    },
    footer: {
      copy: "Todos los derechos reservados.",
      tag: "Especialistas en mensajería industrial y servicios de valijas.",
      tags: ["Servicio integral", "Mensajería local", "Logística industrial", "Gestión de valijas"]
    }
  },
  eu: {
    nav: { services: "Zerbitzuak", company: "Enpresa", contact: "Kontaktua" },
    clients: { trust: "Gugan konfiantza dute" },
    hero: {
      title: "Konfiantzazko mezularitza",
      city: "Vitoria-Gasteizen",
      subtitle: "30 urte baino gehiago Araban zure dokumentazio, barne-posta eta industria-horniduraren entrega seguru eta puntuala bermatzen.",
      ctaPrimary: "Zerbitzuak ikusi",
      ctaSecondary: "Zuzeneko kontaktua"
    },
    services: {
      sectionTitle: "Zerbitzu espezializatuak",
      sectionSubtitle: "Vitoria-Gasteizko industriara eta merkataritzara egokitutako soluzio logistikoak.",
      list: [
        {
          title: "Hornidura industrialak",
          description: "Hornidura industrialak jasotzeko eta entregatzeko eguneroko zerbitzua: Ferretería Marañón, Alevisal, Optimus3d, Suministros Zadorra, Caype, eta abar. Estaldura osoa poligonoetan.",
          icon: <Truck className="w-6 h-6" />
        },
        {
          title: "Barne-posta",
          description: "Ordezkaritzen, banku-sukurtsalen, telelaneko langileen eta egoitza korporatiboen arteko korrespondentzia-poltsen (barne-posta) eguneroko kudeaketa, konfidentzialtasun osoz.",
          icon: <Briefcase className="w-6 h-6" />
        },
        {
          title: "Dokumentazioa eta notaritzak",
          description: "Vitoria-Gasteizko banku, notaritza, aholkularitza eta gestorietarako dokumentuen kudeaketa kritiko eta segurua.",
          icon: <Building2 className="w-6 h-6" />
        },
        {
          title: "Posta-kutxak",
          description: "Zure posta-kutxaren eguneroko bilketa (Correos, DHL, Nacex, eta abar). Zure korrespondentzia zure lanaldia hasi aurretik eskuragarri egongo dela bermatzen dugu.",
          icon: <Mail className="w-6 h-6" />
        },
        {
          title: "Erakunde ofizialak",
          description: "Tramitazio azkarra Gizarte Segurantzan, Merkataritza Ganberan, Eusko Jaurlaritzan, Arabako Foru Aldundian eta udaletan.",
          icon: <ShieldCheck className="w-6 h-6" />
        },
        {
          title: "Premiazko zerbitzuak",
          description: "Gune metropolitar osoan lehentasun handiena duten 'puntuz puntuko' bidalketetarako berehalako arreta.",
          icon: <Clock className="w-6 h-6" />
        }
      ]
    },
    about: {
      badge: "Urteetako esperientzia",
      title: "Zure tokiko bazkide logistikoa",
      desc: "Arintasunez jarduten dugu Vitoria-Gasteiz osoan eta bertako industrialde garrantzitsuenetan.",
      item1: { title: "Fidagarritasuna", desc: "Bankarako eta industria handirako mezularitzan erreferentzia." },
      item2: { title: "Konpromisoa", desc: "Arabako ibilbide eta operatiba guztiak ezagutzen ditugu." },
      item3: { title: "Azkartasuna", desc: "Berehalako erantzuna hiriaren erdigunean eta inguruko industrialdeetan." }
    },
    contact: {
      title: "Hitz egingo al dugu?",
      subtitle: "USTEK dirua aurrezten dio zure enpresari, gasolina, aparkatzeko txartelak, denbora pertsonala, isunak eta abar kontsumitzearen ondorioz sortzen diren gastu ugari saihestuz. Jarri gurekin harremanetan aurrekontu pertsonalizatuak egiteko.",
      labelCall: "Harremanetarako telefonoak",
      labelEmail: "Posta elektronikoa",
      labelAddress: "Egoitza nagusia",
      base: "Vitoria-Gasteizko jarduera"
    },
    footer: {
      copy: "Eskubide guztiak erreserbatuta.",
      tag: "Industria-mezularitzako eta posta-zerbitzuetako adituak.",
      tags: ["Zerbitzu integrala", "Tokiko mezularitza", "Industria-logistika", "Barne-postaren kudeaketa"]
    }
  }
};

export const CONTACT_INFO = {
  phones: ["649 66 72 72", "609 46 29 12", "945 06 39 82"],
  email: "uste@uste.es",
  address: "Estrasburgo Pasealekua 7, 01002",
  location: "Vitoria-Gasteiz, Araba"
};

export const CLIENTS = [
  { name: "Mercedes-Benz" },
  { name: "Michelin" },
  { name: "Guardian Glass" },
  { name: "DHL Logistics" },
  { name: "Gestamp" },
  { name: "Vidrala" },
  { name: "Aernnova" },
  { name: "Snaidero" }
];