/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Cmp3Nnwv.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D2tkY1H0.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
export { renderers } from '../renderers.mjs';

function Contactc() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+1 (555) 123-4567",
      description: "Lunes a Viernes, 9:00 AM - 6:00 PM"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@mastercookacademy.com",
      description: "Respuesta en menos de 24 horas"
    },
    {
      icon: MapPin,
      title: "Dirección",
      info: "123 Culinary Street, Gourmet City",
      description: "Zona gastronómica del centro"
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lun - Vie: 9:00 AM - 8:00 PM",
      description: "Sáb: 10:00 AM - 6:00 PM"
    }
  ];
  const faqItems = [
    {
      question: "¿Necesito experiencia previa para tomar los talleres?",
      answer: "No, nuestros talleres están diseñados para todos los niveles. Tenemos desde cursos para principiantes hasta técnicas avanzadas para chefs experimentados."
    },
    {
      question: "¿Qué incluye cada taller?",
      answer: "Cada taller incluye todos los ingredientes, herramientas de cocina, recetario digital, certificado de participación y degustación de los platos preparados."
    },
    {
      question: "¿Puedo reprogramar mi taller si no puedo asistir?",
      answer: "Sí, puedes reprogramar tu taller hasta 48 horas antes de la fecha programada sin costo adicional, sujeto a disponibilidad."
    },
    {
      question: "¿Ofrecen talleres privados o para grupos?",
      answer: "Sí, ofrecemos talleres privados para grupos de 6 personas o más. Contactanos para cotizaciones especiales y fechas disponibles."
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "bg-light-background", children: [
    /* @__PURE__ */ jsx("section", { className: "relative py-12 md:py-20 px-4 md:px-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-main-text mb-6", children: "Contacto" }),
      /* @__PURE__ */ jsx("div", { className: "w-24 h-px bg-gray-400 mx-auto mb-6" }),
      /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg lg:text-xl text-secondary-text max-w-2xl mx-auto leading-relaxed", children: "¿Tienes preguntas sobre nuestros talleres? ¿Quieres más información? Estamos aquí para ayudarte en tu aventura culinaria." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16 px-4 md:px-8 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8", children: contactInfo.map((item, index) => {
      const IconComponent = item.icon;
      return /* @__PURE__ */ jsxs("div", { className: "bg-light-background border border-gray-300 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6 text-white" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-medium text-main-text mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-2", children: item.info }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-secondary-text", children: item.description })
      ] }, index);
    }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16 px-4 md:px-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12", children: "Preguntas Frecuentes" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: faqItems.map((item, index) => /* @__PURE__ */ jsx("div", { className: "border border-gray-300 rounded-xl overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-light-background", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg md:text-xl font-medium text-main-text mb-3", children: item.question }),
        /* @__PURE__ */ jsx("p", { className: "text-base text-secondary-text leading-relaxed", children: item.answer })
      ] }) }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16 px-4 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12", children: "Visítanos" }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 md:gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-medium text-main-text", children: "Nuestras Instalaciones" }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-secondary-text leading-relaxed", children: "Ubicados en el corazón de la zona gastronómica de la ciudad, nuestras instalaciones cuentan con cocinas completamente equipadas, tecnología de última generación y un ambiente diseñado para inspirar creatividad culinaria." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-main-text", children: "Dirección" }),
                /* @__PURE__ */ jsx("p", { className: "text-secondary-text", children: "123 Culinary Street, Gourmet City, GC 12345" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium text-main-text", children: "Horarios de Visita" }),
                /* @__PURE__ */ jsx("p", { className: "text-secondary-text", children: "Lun - Vie: 9:00 AM - 8:00 PM" }),
                /* @__PURE__ */ jsx("p", { className: "text-secondary-text", children: "Sáb: 10:00 AM - 6:00 PM" }),
                /* @__PURE__ */ jsx("p", { className: "text-secondary-text", children: "Dom: Cerrado" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://maps.google.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200",
              children: [
                "Ver en Google Maps",
                /* @__PURE__ */ jsx("svg", { className: "ml-2 w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" }) })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-gray-200 rounded-xl h-64 md:h-80 lg:h-96 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center text-gray-500", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-12 h-12 mx-auto mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Mapa Interactivo" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "123 Culinary Street" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Gourmet City" })
        ] }) })
      ] })
    ] }) })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "projectId": "440938cc-c1e6-42e0-baa5-ae8afd7ea5d7" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Contactc", Contactc, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/contactC", "client:component-export": "default" })} ` })}`;
}, "D:/Daniel/MasterCook/src/pages/contact.astro", void 0);

const $$file = "D:/Daniel/MasterCook/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
