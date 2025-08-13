/* empty css                                 */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BIQpHMk-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DMUtaIJp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo, useCallback, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative bg-light overflow-hidden min-h-screen flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-6 md:py-8 mt-16 sm:mt-0", children: [
      /* @__PURE__ */ jsx("div", { className: "text-main-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center md:text-left mb-6 md:mb-0", children: "Aprende a cocinar" }),
      /* @__PURE__ */ jsxs("div", { className: "graphic w-full md:w-auto md:flex-1 flex items-center mx-0 md:mx-4 my-6 md:my-0", children: [
        /* @__PURE__ */ jsx("div", { className: "line flex-1 h-px bg-gray-400" }),
        /* @__PURE__ */ jsxs("div", { className: "x-symbol mx-2 sm:mx-4 flex items-center justify-center", children: [
          /* @__PURE__ */ jsxs("svg", { className: "hidden sm:block w-3 h-3 md:w-4 md:h-4", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx("path", { d: "M13 1L1 13", stroke: "#3E3A33", strokeWidth: "1" }),
            /* @__PURE__ */ jsx("path", { d: "M1 1L13 13", stroke: "#3E3A33", strokeWidth: "1" })
          ] }),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibu9qTfNuJycjaDbmvStoldZsnYTkJARN9PHMhX",
              alt: "Plato gourmet",
              className: "object-cover w-full max-w-[180px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[400px]"
            }
          ),
          /* @__PURE__ */ jsxs("svg", { className: "hidden sm:block w-3 h-3 md:w-4 md:h-4", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx("path", { d: "M13 1L1 13", stroke: "#3E3A33", strokeWidth: "1" }),
            /* @__PURE__ */ jsx("path", { d: "M1 1L13 13", stroke: "#3E3A33", strokeWidth: "1" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "line flex-1 h-px bg-gray-400" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-main-text text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-center md:text-right mb-6 md:mb-0", children: "como un profesional" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center items-center mt-0 sm:mt-[-50px] md:mt-[-80px] lg:mt-[-100px] z-20", children: /* @__PURE__ */ jsx("h1", { className: "text-[4rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] 2xl:text-[14rem] text-primary font-normal font-[Anton] leading-none tracking-tighter text-center", children: "MasterCook" }) })
  ] });
}

const categoryMappings = {
  "COCINA INTERNACIONAL": 1,
  "REPOSTERÍA CREATIVA": 2,
  "COCINA SALUDABLE": 3,
  "COCINA VEGETARIANA": 4,
  "COCINA MOLECULAR": 5,
  "COCINA DE TEMPORADA": 6,
  "COCINA DE PRINCIPIANTES": 7,
  "COCINA PARA NIÑOS": 8
};
const categories = [
  {
    id: 1,
    title: "COCINA INTERNACIONAL",
    imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuGp1bZAdST36YIKb4wOqk5Bh18de9pVNuzLxm",
    dataZoom: "livraison"
  },
  {
    id: 2,
    title: "REPOSTERÍA CREATIVA",
    imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuGpftzbdST36YIKb4wOqk5Bh18de9pVNuzLxm",
    dataZoom: "emporter"
  },
  {
    id: 3,
    title: "COCINA SALUDABLE",
    imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuhb7Putj3e1J6DSgYMyaCiBw5LslkPtv9brEj",
    dataZoom: "surplace"
  },
  {
    id: 4,
    title: "COCINA VEGETARIANA",
    imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibu0dMKe8sc6uyP5nLA7TKRrHzZ4CiFfwdqSeGV",
    dataZoom: "shop"
  },
  {
    id: 5,
    title: "COCINA MOLECULAR",
    imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuOGY0Shx71g7WHn3LiTroDRy6zBQO80cAsCxk",
    dataZoom: "pizza"
  },
  {
    id: 6,
    title: "COCINA DE TEMPORADA",
    imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibufqztBjU8QwLP1DhIBuKNojVamz5qcldgyxA7",
    dataZoom: "pasta"
  },
  {
    id: 7,
    title: "COCINA DE PRINCIPIANTES",
    imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuOGFIWwH71g7WHn3LiTroDRy6zBQO80cAsCxk",
    dataZoom: "salad"
  },
  {
    id: 8,
    title: "COCINA PARA NIÑOS",
    imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuKXQbKrlYgniuMETeVqQIDa4XrF5fP7sWRB2w",
    dataZoom: "dessert"
  }
];
function Categories() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isResizing, setIsResizing] = useState(false);
  const totalPages = useMemo(
    () => Math.ceil(categories.length / itemsPerPage),
    [itemsPerPage]
  );
  const handleResize = useCallback(() => {
    if (isResizing) return;
    setIsResizing(true);
    requestAnimationFrame(() => {
      const width = window.innerWidth;
      let newItemsPerPage;
      if (width < 640) {
        newItemsPerPage = 1;
      } else if (width < 1024) {
        newItemsPerPage = 2;
      } else {
        newItemsPerPage = 4;
      }
      setItemsPerPage(newItemsPerPage);
      setIsResizing(false);
    });
  }, [isResizing]);
  useEffect(() => {
    handleResize();
    let timeoutId;
    const throttledResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };
    window.addEventListener("resize", throttledResize);
    return () => {
      window.removeEventListener("resize", throttledResize);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleResize]);
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [totalPages, currentPage]);
  const nextPage = useCallback(() => {
    setCurrentPage((prev) => prev < totalPages - 1 ? prev + 1 : 0);
  }, [totalPages]);
  const prevPage = useCallback(() => {
    setCurrentPage((prev) => prev > 0 ? prev - 1 : totalPages - 1);
  }, [totalPages]);
  const navigateToWorkshops = useCallback((categoryId) => {
    sessionStorage.setItem("selectedCategory", categoryId);
    window.location.href = `/workshops`;
  }, []);
  const visibleCategories = useMemo(() => {
    const startIndex = currentPage * itemsPerPage;
    return categories.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);
  const handleMouseEnter = useCallback((e) => {
    const imgElement = e.currentTarget.parentElement.querySelector("img");
    if (imgElement) {
      imgElement.style.transform = "scale(1.05)";
    }
  }, []);
  const handleMouseLeave = useCallback((e) => {
    const imgElement = e.currentTarget.parentElement.querySelector("img");
    if (imgElement) {
      imgElement.style.transform = "scale(1)";
    }
  }, []);
  const gridClass = useMemo(() => {
    switch (itemsPerPage) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 4:
        return "grid-cols-4";
      default:
        return "grid-cols-4";
    }
  }, [itemsPerPage]);
  return /* @__PURE__ */ jsxs("section", { className: "relative flex flex-col font-medium text-main-text", children: [
    /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-6 md:p-8", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl md:text-4xl", children: "Categorías" }) }),
    /* @__PURE__ */ jsx("div", { className: `grid ${gridClass} gap-0`, children: visibleCategories.map((category) => /* @__PURE__ */ jsx("div", { className: "relative outline outline-2 outline-primary", children: /* @__PURE__ */ jsxs("div", { className: "relative", "data-zoom": category.dataZoom, children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "title-container",
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          children: /* @__PURE__ */ jsx(
            "div",
            {
              onClick: () => navigateToWorkshops(categoryMappings[category.title]),
              className: "block cursor-pointer",
              children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 sm:p-4 lg:p-6 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl bg-[#e58c8c] text-secondary hover:bg-secondary hover:text-[#df6f6f] border-b-2 border-primary transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("h2", { className: "truncate pr-2", children: category.title }),
                /* @__PURE__ */ jsx("div", { className: "w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { width: "100%", height: "100%", viewBox: "0 0 17 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M3.1836 26.0662C6.32574 20.7266 11.2081 16.5218 16.4082 13.2568C11.1598 10.0406 6.48457 5.68956 3.19051 0.447478L0.0552734 0.447478C3.34243 5.52248 7.30636 9.93614 12.1957 13.2568C7.29945 16.6262 3.1836 21.0886 2.47955e-05 26.0662L3.1905 26.0662L3.1836 26.0662Z", fill: "currentColor" }) }) })
              ] })
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-48 sm:h-56 md:h-64 lg:h-[25rem] overflow-hidden cursor-pointer",
          onClick: () => navigateToWorkshops(categoryMappings[category.title]),
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: category.imageUrl,
              alt: `Categoría ${category.title}`,
              className: "w-full h-full object-cover transition-transform duration-300 ease-out will-change-transform",
              "data-zoom": category.dataZoom,
              loading: "lazy",
              decoding: "async"
            }
          )
        }
      )
    ] }) }, category.id)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2 sm:px-4 pointer-events-none", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: prevPage,
          className: "p-2 sm:p-3 rounded-full bg-primary text-secondary pointer-events-auto transform transition-transform hover:scale-105 active:scale-95",
          "aria-label": "Página anterior",
          children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: nextPage,
          className: "p-2 sm:p-3 rounded-full bg-primary text-secondary pointer-events-auto transform transition-transform hover:scale-105 active:scale-95",
          "aria-label": "Página siguiente",
          children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center h-8 sm:h-10 bg-light-background mt-2", children: Array.from({ length: totalPages }).map((_, index) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => setCurrentPage(index),
        className: `h-2 w-2 sm:h-3 sm:w-3 mx-1 rounded-full transition-all duration-200 transform hover:scale-110 ${currentPage === index ? "bg-accent" : "bg-gray-400"}`,
        "aria-label": `Ir a página ${index + 1}`
      },
      index
    )) })
  ] });
}

function ResponsiveFeatured() {
  const words = [
    { name: "DESCUBRE", imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuadc4t8BUdWKHfOIM621lGQbSXNs5CArhFxzP" },
    { name: "NUESTROS", imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuE7uIFunNQ3G5DiXUHsPJjl4xCBKmyotakWeF" },
    { name: "TALLERES", imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuE5VH1YNQ3G5DiXUHsPJjl4xCBKmyotakWeFZ" },
    { name: "ESTRELLA", imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuyl3MHoRAsabYELF97nAUxrDB0CiN83WOwfRJ" },
    { name: "DEL", imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuUSfmULWcIwjqbxDBoXO9VQtFgSlpMK64yH35" },
    { name: "MES.", imageUrl: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibursc6VD106UMnlq97hFP5WBS8o4GATz1XcRHd" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "w-full overflow-hidden bg-gray-50 py-4", children: [
    /* @__PURE__ */ jsx("div", { className: "w-full flex items-center justify-center px-4 md:px-8 mb-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col md:flex-row items-start md:items-center justify-between", children: [
      /* @__PURE__ */ jsx(NavLink, { text: "¡Inscríbete ya!", className: "mb-2 md:mb-0" }),
      /* @__PURE__ */ jsx(NavLink, { text: "Nuevos talleres", className: "mb-2 md:mb-0" }),
      /* @__PURE__ */ jsx(NavLink, { text: "Chefs invitados", className: "mb-2 md:mb-0" }),
      /* @__PURE__ */ jsx(NavLink, { text: "Sorteos" })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "marquee-container", children: [
      /* @__PURE__ */ jsx("div", { className: "marquee-content", children: words.map((item, index) => /* @__PURE__ */ jsx(MarqueeItem, { item }, `item1-${index}`)) }),
      /* @__PURE__ */ jsx("div", { className: "marquee-content", children: words.map((item, index) => /* @__PURE__ */ jsx(MarqueeItem, { item }, `item2-${index}`)) })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          white-space: nowrap;
        }
        
        .marquee-content {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      ` })
  ] });
}
function NavLink({ text, className = "" }) {
  return /* @__PURE__ */ jsxs("a", { href: "/", className: `flex flex-row gap-1 items-center ${className}`, children: [
    /* @__PURE__ */ jsx("h2", { className: "text-gray-700 font-medium text-base md:text-lg lg:text-xl", children: text }),
    /* @__PURE__ */ jsx("div", { className: "text-gray-700", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 17 27", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M3.1836 26.0662C6.32574 20.7266 11.2081 16.5218 16.4082 13.2568C11.1598 10.0406 6.48457 5.68956 3.19051 0.447478L0.0552734 0.447478C3.34243 5.52248 7.30636 9.93614 12.1957 13.2568C7.29945 16.6262 3.1836 21.0886 2.47955e-05 26.0662L3.1905 26.0662L3.1836 26.0662Z", fill: "currentColor" }) }) })
  ] });
}
function MarqueeItem({ item }) {
  return /* @__PURE__ */ jsxs("div", { className: "marquee-item flex items-center", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: item.imageUrl,
        alt: item.name,
        className: "h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 object-cover"
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900 mx-2 md:mx-6 lg:mx-10", children: item.name })
  ] });
}

function FeaturedCards() {
  return /* @__PURE__ */ jsx("section", { className: "p-4 md:p-8 bg-light-background", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col border border-gray-400 rounded-xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:grid lg:grid-cols-3 w-full border-b border-gray-400", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:col-span-1 flex text-main-text items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-400 py-6 text-6xl md:text-8xl lg:text-[165px]", children: "01" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 flex flex-col items-center justify-center p-4 md:p-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-6xl text-main-text text-center mb-2", children: "Repostería Francesa" }),
        /* @__PURE__ */ jsx("p", { className: "text-base lg:text-lg text-secondary-text max-w-[40em] text-center lg:text-justify", children: "Este mes lidera en inscripciones y reseñas positivas. Nuestros alumnos están fascinados con la técnica de macarons y los postres de vitrina. ¡Incluye acceso a recetario exclusivo por tiempo limitado!" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:grid lg:grid-cols-3 w-full border-b border-gray-400", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:col-span-1 flex text-main-text items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-400 py-6 text-6xl md:text-8xl lg:text-[165px]", children: "02" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 flex flex-col items-center justify-center p-4 md:p-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-6xl text-main-text text-center mb-2", children: "Italiana desde Cero" }),
        /* @__PURE__ */ jsx("p", { className: "text-base lg:text-lg text-secondary-text max-w-[40em] text-center lg:text-justify", children: "Taller más esperado del mes por su chef internacional. Directo desde Nápoles, nuestro chef invitado comparte secretos auténticos de la pasta fresca. ¡Inscripciones abiertas solo esta semana!" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:grid lg:grid-cols-3 w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full lg:col-span-1 flex text-main-text items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-400 py-6 text-6xl md:text-8xl lg:text-[165px]", children: "03" }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 flex flex-col items-center justify-center p-4 md:p-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-6xl text-main-text text-center mb-2", children: "Saludable para el Día a Día" }),
        /* @__PURE__ */ jsx("p", { className: "text-base lg:text-lg text-secondary-text max-w-[40em] text-center lg:text-justify", children: "Se destacó por su utilidad y resultados inmediatos. Pensado para quienes quieren comer mejor sin perder tiempo. Más de 60 personas ya mejoraron su rutina alimentaria con este taller." })
      ] })
    ] })
  ] }) });
}

function Benefits() {
  return /* @__PURE__ */ jsx("section", { className: "p-4 md:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center lg:items-start order-1", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibul0EGpfM5nEibusH69PMzehYFxCka0yLvVwto",
          alt: "MasterCook Academy",
          className: "w-full max-w-xs md:max-w-md"
        }
      ) }),
      /* @__PURE__ */ jsx("h1", { className: "text-center lg:text-start text-2xl md:text-3xl lg:text-4xl font-medium text-main-text mt-4", children: "Por qué elegir MasterCook Academy" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 md:gap-8 lg:gap-10 items-center lg:items-start justify-center order-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 items-start md:items-center", children: [
        /* @__PURE__ */ jsx("img", { src: "/Icon-1.webp", alt: "", className: "w-8 md:w-10 mt-1 md:mt-0" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg lg:text-xl text-secondary-text", children: [
          /* @__PURE__ */ jsx("i", { className: "text-sm md:text-base text-main-text font-medium block mb-1", children: "Instructores con experiencia internacional" }),
          "Nuestros chefs han trabajado en cocinas de renombre y están listos para enseñarte con pasión y técnica."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 items-start md:items-center", children: [
        /* @__PURE__ */ jsx("img", { src: "/Icon-2.webp", alt: "", className: "w-8 md:w-10 mt-1 md:mt-0" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg lg:text-xl text-secondary-text", children: [
          /* @__PURE__ */ jsx("i", { className: "text-sm md:text-base text-main-text font-medium block mb-1", children: "Talleres prácticos y actualizados" }),
          "Contenidos diseñados para aprender haciendo, con recetas modernas y aplicables desde el primer día."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-4 items-start md:items-center", children: [
        /* @__PURE__ */ jsx("img", { src: "/Icon-3.webp", alt: "", className: "w-8 md:w-10 mt-1 md:mt-0" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg lg:text-xl text-secondary-text", children: [
          /* @__PURE__ */ jsx("i", { className: "text-sm md:text-base text-main-text font-medium block mb-1", children: "Certificación y acompañamiento personalizado" }),
          "Al finalizar, obtén un diploma digital y recibe feedback directo de tu instructor para seguir mejorando."
        ] }) })
      ] })
    ] })
  ] }) });
}

function Testimonials() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const testimonials = [
    {
      id: 1,
      name: "Luis Fernández",
      title: "Aprender cocina nunca fue tan accesible y divertido.",
      quote: "Tenía miedo de no entender porque no soy chef, pero el formato práctico y el acompañamiento hicieron que cada clase fuera clara y útil. ¡Hasta mis amigos notaron el cambio en mis platillos!",
      image: "/Person-1.jpg"
    },
    {
      id: 2,
      name: "Mariana Gómez",
      title: "Un antes y un después en mi pasión por la cocina",
      quote: "Gracias a MasterCook Academy pude descubrir técnicas que antes solo veía en televisión. Ahora preparo platillos profesionales desde casa y estoy pensando en emprender mi propio servicio de catering.",
      image: "/Person-2.jpg"
    },
    {
      id: 3,
      name: "Alejandro Villatoro",
      title: "Más que un taller, fue una experiencia transformadora.",
      quote: "Desde el primer día sentí que estaba en el lugar correcto. Los chefs son cercanos y explican con claridad. ¡Aprendí más en un mes que en años de práctica autodidacta!",
      image: "/Person-3.jpg"
    },
    {
      id: 4,
      name: "Ricardo Guevara",
      title: "Cocinar ya no es una rutina, es mi pasión diaria.",
      quote: "Me inscribí por curiosidad y terminé enamorada de la repostería. Hoy preparo postres por encargo y cada día aplico lo aprendido en los talleres. ¡Totalmente recomendado!",
      image: "/Person-4.jpg"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col justify-center p-4 md:p-8 gap-4", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-start text-3xl md:text-4xl text-main-text font-medium", children: "Testimonios" }),
    /* @__PURE__ */ jsx("div", { className: "w-full border-b border-gray-400" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-8", children: testimonials.map((testimonial) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-2 sm:mb-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: testimonial.image,
            alt: testimonial.name,
            className: "rounded-full object-cover w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl text-main-text", children: testimonial.name }),
          /* @__PURE__ */ jsx("p", { className: "text-secondary-text", children: testimonial.title })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-2 md:gap-3 mt-2 md:mt-0", children: [
        /* @__PURE__ */ jsx("div", { className: "text-6xl md:text-7xl lg:text-9xl text-main-text self-start", children: '"' }),
        /* @__PURE__ */ jsx("p", { className: "text-justify text-secondary-text text-sm md:text-base", children: testimonial.quote })
      ] })
    ] }, testimonial.id)) })
  ] });
}

function Subscribe() {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col items-center justify-center min-h-[15rem] sm:min-h-[20rem] md:min-h-[25rem] lg:min-h-[30rem] p-4 gap-2 sm:gap-3 md:gap-4 text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-main-text text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold", children: "INSCRIBETE" }),
    /* @__PURE__ */ jsx("p", { className: "text-secondary-text text-base sm:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg", children: "Lorem ipsum dolor sit amet consectetur adipisicing elit" }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/signup",
        className: "bg-secondary w-32 sm:w-36 md:w-40 h-8 sm:h-9 md:h-10 hover:bg-[#fce6c7] mt-2 sm:mt-3 md:mt-4 flex items-center justify-center text-center",
        children: "Ir a inscripción"
      }
    )
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", Hero, {})} ${renderComponent($$result2, "Categories", Categories, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Daniel/MasterCook/src/components/categories", "client:component-export": "default" })} ${renderComponent($$result2, "Featured", ResponsiveFeatured, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Daniel/MasterCook/src/components/featured", "client:component-export": "default" })} ${renderComponent($$result2, "FeaturedCards", FeaturedCards, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Daniel/MasterCook/src/components/featuredCards", "client:component-export": "default" })} ${renderComponent($$result2, "Benefits", Benefits, {})} ${renderComponent($$result2, "Testimonials", Testimonials, {})} ${renderComponent($$result2, "Suscribe", Subscribe, {})} ` })}`;
}, "D:/Daniel/MasterCook/src/pages/index.astro", void 0);

const $$file = "D:/Daniel/MasterCook/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
