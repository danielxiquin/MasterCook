/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Cmp3Nnwv.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D2tkY1H0.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

function AboutUs() {
  const teamMembers = [
    {
      name: "Chef Isabella Martínez",
      role: "Directora Culinaria",
      experience: "15 años de experiencia internacional",
      image: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuadc4t8BUdWKHfOIM621lGQbSXNs5CArhFxzP",
      description: "Formada en Le Cordon Bleu París, ha trabajado en restaurantes Michelin de Francia e Italia."
    },
    {
      name: "Chef Marco Rosetti",
      role: "Especialista en Cocina Italiana",
      experience: "12 años desde Nápoles",
      image: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuE7uIFunNQ3G5DiXUHsPJjl4xCBKmyotakWeF",
      description: "Experto en pasta fresca y cocina tradicional italiana, directo desde las mejores trattorias de Italia."
    },
    {
      name: "Chef Ana García",
      role: "Maestra en Repostería",
      experience: "10 años en alta pastelería",
      image: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuE5VH1YNQ3G5DiXUHsPJjl4xCBKmyotakWeFZ",
      description: "Especializada en técnicas francesas de repostería y creación de postres de autor únicos."
    }
  ];
  const achievements = [
    { number: "2000+", label: "Estudiantes graduados" },
    { number: "50+", label: "Talleres diferentes" },
    { number: "15+", label: "Chefs instructores" },
    { number: "5", label: "Años de experiencia" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "bg-light-background", children: [
    /* @__PURE__ */ jsx("section", { className: "relative py-12 md:py-20 px-4 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center lg:items-start order-2 lg:order-1", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-center lg:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-main-text mb-6", children: "Sobre Nosotros" }),
        /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md lg:max-w-none", children: [
          /* @__PURE__ */ jsx("div", { className: "line h-px bg-gray-400 mb-6" }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg lg:text-xl text-secondary-text text-center lg:text-left leading-relaxed", children: "En MasterCook Academy creemos que cocinar es un arte que todos pueden dominar. Desde 2019, hemos formado a más de 2000 estudiantes con técnicas profesionales y pasión genuina por la gastronomía." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center order-1 lg:order-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibul0EGpfM5nEibusH69PMzehYFxCka0yLvVwto",
          alt: "MasterCook Academy equipo",
          className: "w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16 px-4 md:px-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12", children: "Nuestra Historia" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-secondary-text leading-relaxed", children: "Todo comenzó con un sueño: democratizar la alta cocina y hacer que técnicas profesionales fueran accesibles para todos. Nuestros fundadores, chefs con experiencia internacional, decidieron crear un espacio donde la pasión por cocinar se combina con el aprendizaje práctico." }),
          /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-secondary-text leading-relaxed", children: "Desde nuestros primeros talleres en una pequeña cocina, hasta convertirnos en la academia culinaria de referencia, hemos mantenido nuestro compromiso con la excelencia y la personalización en cada clase." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuyl3MHoRAsabYELF97nAUxrDB0CiN83WOwfRJ",
            alt: "Primera cocina MasterCook",
            className: "w-full max-w-sm rounded-lg shadow-md"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16 px-4 md:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12", children: "Nuestros Logros" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8", children: achievements.map((achievement, index) => /* @__PURE__ */ jsxs("div", { className: "text-center p-6 border border-gray-300 rounded-lg bg-white", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2", children: achievement.number }),
        /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base text-secondary-text", children: achievement.label })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16 px-4 md:px-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12", children: "Nuestro Equipo" }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10", children: teamMembers.map((member, index) => /* @__PURE__ */ jsxs("div", { className: "bg-light-background border border-gray-300 rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "h-48 md:h-56 lg:h-64 overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: member.image,
            alt: member.name,
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-medium text-main-text mb-2", children: member.name }),
          /* @__PURE__ */ jsx("p", { className: "text-primary font-medium mb-2", children: member.role }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-secondary-text mb-3", children: member.experience }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-secondary-text leading-relaxed", children: member.description })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16 px-4 md:px-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 md:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 md:p-8 border border-gray-300 rounded-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center mr-4", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 md:w-5 md:h-5 text-white", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-medium text-main-text", children: "Nuestra Misión" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-secondary-text leading-relaxed", children: "Formar cocineros apasionados a través de técnicas profesionales, ingredientes de calidad y un ambiente de aprendizaje colaborativo que inspire creatividad y excelencia culinaria." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 md:p-8 border border-gray-300 rounded-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center mr-4", children: /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4 md:w-5 md:h-5 text-white", fill: "currentColor", viewBox: "0 0 20 20", children: [
            /* @__PURE__ */ jsx("path", { d: "M10 12a2 2 0 100-4 2 2 0 000 4z" }),
            /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", clipRule: "evenodd" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-medium text-main-text", children: "Nuestra Visión" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-secondary-text leading-relaxed", children: "Ser la academia culinaria líder que transforme la manera de cocinar de las personas, creando una comunidad global de amantes de la gastronomía con conocimientos profesionales." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16 px-4 md:px-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl text-main-text mb-6", children: "¿Listo para comenzar tu aventura culinaria?" }),
      /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-secondary-text mb-8 max-w-2xl mx-auto", children: "Únete a nuestra comunidad de más de 2000 estudiantes que ya han transformado su forma de cocinar. Tu próximo nivel culinario te está esperando." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/workshops",
            className: "group bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center",
            children: [
              "Ver Nuestros Talleres",
              /* @__PURE__ */ jsx("svg", { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/",
            className: "text-primary border border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200",
            children: "Contactar"
          }
        )
      ] })
    ] }) })
  ] });
}

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "projectId": "440938cc-c1e6-42e0-baa5-ae8afd7ea5d7" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutUs", AboutUs, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/aboutC", "client:component-export": "default" })} ` })}`;
}, "D:/Daniel/MasterCook/src/pages/about.astro", void 0);

const $$file = "D:/Daniel/MasterCook/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
