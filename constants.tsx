
import React from 'react';
import { Truck, Mail, Building2, Clock, Briefcase, Package, ShieldCheck } from 'lucide-react';

export const COLORS = {
  primary: '#C41E3A', // USTE Red
  secondary: '#1E3A8A', // USTE Navy Blue
};

export const SERVICES = [
  {
    title: "Suministros Industriales",
    description: "Servicio diario especializado para empresas líderes como Ferretería Marañón, Optimus3D, Suministros Gasteiz, Hepyc, Elmubas, Gasteiz Suministros Industriales, y suministros de automoción. Cobertura extensiva en Jundiz, Gamarra, Ali-Gobeo y Betoño.",
    icon: <Truck className="w-6 h-6" />
  },
  {
    title: "Documentación Bancaria y Notarías",
    description: "Gestión crítica y segura de documentos para entidades bancarias, notarías, asesorías legales, gestorías y agencias de viajes en el centro de Vitoria.",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: "Apartado de Correos",
    description: "Recogida y entrega diaria del apartado de correos de su empresa. Garantizamos que su correspondencia esté en su mesa antes del inicio de la jornada.",
    icon: <Mail className="w-6 h-6" />
  },
  {
    title: "Organismos Oficiales",
    description: "Tramitación ágil de documentos ante la Seguridad Social, Gobierno Vasco, Diputación Foral de Álava, Ayuntamientos y registros oficiales.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Paquetería y Pedidos",
    description: "Recogida de pedidos locales y entrega de paquetería express para comercios, farmacias y sedes corporativas con seguimiento inmediato.",
    icon: <Package className="w-6 h-6" />
  },
  {
    title: "Servicios Urgentes",
    description: "Atención inmediata para envíos 'punto a punto' que no pueden esperar. Rapidez y seguridad en toda el área metropolitana de Vitoria.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Valijas Internas",
    description: "Intercambio programado de valijas entre diferentes sedes de una misma empresa o entregas especiales para empleados en teletrabajo.",
    icon: <Briefcase className="w-6 h-6" />
  }
];

export const CONTACT_INFO = {
  phones: ["945 06 39 82", "649 66 72 72", "685 70 87 02"],
  email: "uste@uste.es",
  address: "Paseo de Estrasburgo 7, 01002",
  location: "Vitoria-Gasteiz, Álava"
};
