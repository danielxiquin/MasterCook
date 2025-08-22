/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BIQpHMk-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DMUtaIJp.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const Decoration = () => {
  return /* @__PURE__ */ jsxs("div", { className: "absolute -z-10 inset-0 overflow-hidden opacity-70 pointer-events-none", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#D94F4F]/20 to-transparent blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-[60%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[#6B8E23]/20 to-transparent blur-3xl" })
  ] });
};
const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 w-full h-[2px] z-50", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "h-full bg-gradient-to-r from-[#6B8E23] via-[#6B8E23]/70 to-[#FAFAFA]",
      style: { transform: `scaleX(${scrollProgress})`, transformOrigin: "0%" }
    }
  ) });
};
const Loader = () => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 border-4 border-[#D94F4F]/30 border-t-[#D94F4F] rounded-full animate-spin" }) });
const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  useEffect(() => {
    const img = new Image();
    img.src = src || "/images/default-workshop.jpg";
    img.onload = () => {
      setImgSrc(img.src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      setImgSrc("/images/default-workshop.jpg");
      setIsLoaded(true);
    };
  }, [src]);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full aspect-[3/4] overflow-hidden", children: [
    !isLoaded && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-[#333333] z-10 w-full h-full", children: /* @__PURE__ */ jsx("div", { initial: { opacity: 0 }, animate: { opacity: 1 }, children: /* @__PURE__ */ jsx(Loader, {}) }) }),
    imgSrc && /* @__PURE__ */ jsx(
      "img",
      {
        src: imgSrc,
        alt,
        className: `${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500 w-full h-full object-cover`,
        onLoad: () => setIsLoaded(true)
      }
    )
  ] });
};
const CategoryButton = ({ category, isSelected, onClick }) => /* @__PURE__ */ jsxs(
  "button",
  {
    onClick,
    className: `px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 mb-2 w-full text-left flex items-center ${isSelected ? "bg-[#333333] text-[#FAFAFA] shadow-md" : "bg-[#FFFFFE]/90 text-[#333333] hover:bg-[#FFFFFE]"}`,
    children: [
      isSelected && /* @__PURE__ */ jsx("span", { className: "w-1 h-5 bg-[#6B8E23] rounded-full mr-2 inline-block" }),
      category.name
    ]
  }
);
const MobileCategoryDropdown = ({ categories, selectedCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCategoryName = categories.find((c) => String(c.id) === selectedCategory)?.name || "Todos";
  const handleCategorySelect = (categoryId) => {
    onCategoryChange(categoryId);
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full p-3 bg-[#FFFFFE] text-[#333333] rounded-lg border border-[#FFFFE3]/50 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/30 focus:border-[#6B8E23]/50 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "w-1 h-5 bg-[#D94F4F] rounded-full mr-2 inline-block" }),
            selectedCategoryName
          ] }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.2 },
        className: "absolute z-50 w-full mt-2 bg-[#FFFFFE] border border-[#FFFFE3]/50 rounded-lg shadow-lg max-h-64 overflow-y-auto",
        children: categories.map((category) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleCategorySelect(String(category.id)),
            className: `w-full px-4 py-3 text-left text-sm font-medium hover:bg-[#F5F5F5] transition-colors flex items-center ${selectedCategory === String(category.id) ? "bg-[#333333] text-[#FAFAFA]" : "text-[#333333]"}`,
            children: [
              selectedCategory === String(category.id) && /* @__PURE__ */ jsx("span", { className: "w-1 h-4 bg-[#6B8E23] rounded-full mr-2 inline-block" }),
              category.name
            ]
          },
          category.id
        ))
      }
    ) }),
    isOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-40",
        onClick: () => setIsOpen(false)
      }
    )
  ] });
};
const WorkshopCard = ({ workshop, workshopImages, index }) => {
  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  };
  const getFormattedTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: `/workshopsId/${workshop.id}`, className: "block", children: /* @__PURE__ */ jsxs("article", { className: "group relative w-full h-full  overflow-hidden bg-[#FFFFFE] shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFFFE3]/20", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-[#333333]", children: [
      /* @__PURE__ */ jsx(
        OptimizedImage,
        {
          src: workshopImages[workshop.name] || "/images/default-workshop.jpg",
          alt: workshop.name,
          className: "group-hover:scale-110 transition-transform duration-700"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-[#333333] text-[#FAFAFA] px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm",
          children: /* @__PURE__ */ jsx("span", { className: "font-medium", children: workshop.modality === "presencial" ? "PRESENCIAL" : "VIRTUAL" })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm text-[#6B8E23] font-medium tracking-wide mb-1", children: workshop.category_name || "Categoría" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg text-[#333333] font-medium tracking-tight line-clamp-1 group-hover:text-[#D94F4F] transition-colors", children: workshop.name }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#666666] mt-1", children: [
          "Por ",
          workshop.instructor_name
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-[#666666] mt-2", children: [
          getFormattedDate(workshop.date),
          " • ",
          getFormattedTime(workshop.start_time),
          " - ",
          getFormattedTime(workshop.end_time)
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-3 pt-3 border-t border-[#FFFFE3]/30", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-base font-bold text-[#333333]", children: [
          "Q",
          workshop.price.toFixed(2)
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "text-xs bg-[#F5F5F5] px-2 py-1 rounded", children: [
          workshop.available_slots,
          " disponibles"
        ] })
      ] })
    ] })
  ] }) }) });
};
function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredWorkshops, setFilteredWorkshops] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("todo");
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const workshopImages = {
    "Sabores de Italia": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuMuhOjpzB02MisAEvYjHQhPGucaFX54CJrUOn",
    "Pastelería Francesa": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibu7htBM8RilvS4mGda0BVPYjrps1H5Lf6DObNF",
    "Comida Saludable para la Semana": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuBHsdxLPb6lrQWNcyYFdnfEzkeVHJXgoMawmD",
    "Cocina Vegetariana Creativa": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibutFnAGpualz2QAIYZWuOfsk5nxJDdbcVy1pe4",
    "Introducción a la Cocina Molecular": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibutHioByualz2QAIYZWuOfsk5nxJDdbcVy1pe4",
    "Cocina Primaveral": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibumctXQLNrPvHGd1j2UM5sACiWEgXI6atVnYyz",
    "Primeros Pasos en la Cocina": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuuXdUT8fyXR7wfFas8jC0PIStrJ3dMb4ZeBKD",
    "Cocineros Junior": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuInmtowlAyO8kqw0XmJiTH3EQFBVbCG4o2UaS",
    "Cocina Asiática": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuEbSDr1NQ3G5DiXUHsPJjl4xCBKmyotakWeFZ",
    "Decoración de Cupcakes": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibu6VjN9FHvu4jTO7gzRm3dXnqYyJGwxA5VLMkc",
    "Bowls Saludables": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuabLKK2ABUdWKHfOIM621lGQbSXNs5CArhFxz",
    "Proteínas Vegetales": "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibu5F9013ZRtlECNGU1HWj4bcvBhzO65xgwroMF"
  };
  useEffect(() => {
    const storedCategory = window.localStorage?.getItem("selectedCategory");
    if (storedCategory) {
      setSelectedCategory(storedCategory);
      window.localStorage?.removeItem("selectedCategory");
    }
  }, []);
  useEffect(() => {
    async function fetchWorkshops() {
      setIsLoading(true);
      try {
        const response = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/workshops");
        const data = await response.json();
        setWorkshops(data.workshops || []);
      } catch (error) {
        console.error("Error fetching workshops:", error);
        setWorkshops([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchWorkshops();
  }, []);
  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/workshop-categories");
        const data = await response.json();
        const apiCategories = data.categories.map((categoryName, index) => ({
          id: String(index + 1),
          name: categoryName
        }));
        const allCategories = [
          { id: "todo", name: "Todos", description: "Todos los talleres disponibles" },
          ...apiCategories
        ];
        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([{ id: "todo", name: "Todos", description: "Todos los talleres disponibles" }]);
      }
    }
    fetchCategories();
  }, []);
  useEffect(() => {
    let filtered = [...workshops];
    if (selectedCategory.toLowerCase() !== "todo") {
      const categoryId = parseInt(selectedCategory);
      filtered = filtered.filter((workshop) => workshop.category_id === categoryId);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter((workshop) => {
        const name = workshop.name?.toLowerCase() || "";
        const instructor = workshop.instructor_name?.toLowerCase() || "";
        const category = workshop.category_name?.toLowerCase() || "";
        return name.includes(query) || instructor.includes(query) || category.includes(query);
      });
    }
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "date-asc":
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "date-desc":
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }
    setFilteredWorkshops(filtered);
  }, [selectedCategory, workshops, searchQuery, sortBy]);
  const sortOptions = [
    { label: "Predeterminado", value: "default" },
    { label: "Precio: Menor a Mayor", value: "price-asc" },
    { label: "Precio: Mayor a Menor", value: "price-desc" },
    { label: "Fecha: Más cercana", value: "date-asc" },
    { label: "Fecha: Más lejana", value: "date-desc" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScrollIndicator, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative py-8 min-h-screen overflow-hidden bg-[#FAFAFA]", children: [
      /* @__PURE__ */ jsx(Decoration, {}),
      /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 relative", children: [
        /* @__PURE__ */ jsx(
          "header",
          {
            className: "w-full mt-20 md:mt-24 border-b border-b-[#666666]/20 pb-8 overflow-hidden",
            children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxs("span", { className: "text-lg tracking-wide text-[#6B8E23] inline-block relative font-medium", children: [
                "EXPLORA",
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "absolute bottom-0 left-0 w-full h-[2px] bg-[#6B8E23]"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxs(
                "h1",
                {
                  className: "text-[#333333] text-4xl md:text-5xl uppercase font-bold tracking-tight",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "mr-3", children: "Nuestros" }),
                    /* @__PURE__ */ jsxs("span", { className: "relative inline-block", children: [
                      "Talleres",
                      /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-6 w-4 h-4 bg-[#D94F4F] rounded-full" })
                    ] })
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("section", { className: "w-full pt-8 flex flex-col md:flex-row gap-8", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "w-full md:w-64 space-y-6 md:sticky md:top-24 md:self-start",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs text-[#666666] mb-2 uppercase tracking-wider", children: "Buscar" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        placeholder: "Buscar talleres...",
                        value: searchQuery,
                        onChange: (e) => setSearchQuery(e.target.value),
                        className: "w-full p-3 pl-4 bg-[#FFFFFE] text-[#333333] rounded-lg border border-[#FFFFE3]/50 focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/30 focus:border-[#6B8E23]/50 transition-all duration-300"
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-[#666666]", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs text-[#666666] mb-2 uppercase tracking-wider", children: "Ordenar por" }),
                  /* @__PURE__ */ jsx(
                    "select",
                    {
                      value: sortBy,
                      onChange: (e) => setSortBy(e.target.value),
                      className: "w-full p-3 bg-[#FFFFFE] text-[#333333] rounded-lg border border-[#FFFFE3]/50 focus:outline-none focus:ring-2 focus:ring-[#6B8E23]/30 focus:border-[#6B8E23]/50 transition-all duration-300",
                      children: sortOptions.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "md:hidden", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs text-[#666666] mb-2 uppercase tracking-wider", children: "Categorías" }),
                  /* @__PURE__ */ jsx(
                    MobileCategoryDropdown,
                    {
                      categories,
                      selectedCategory,
                      onCategoryChange: setSelectedCategory
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "hidden md:block", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-[#333333] text-lg mb-4 flex tracking-wider uppercase items-center font-medium", children: [
                    /* @__PURE__ */ jsx("span", { className: "w-1 h-5 bg-[#D94F4F] rounded-full mr-2 inline-block" }),
                    "Categorías"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-1 max-h-96 overflow-y-auto pr-2 custom-scrollbar", children: categories.map((category) => /* @__PURE__ */ jsx(
                    CategoryButton,
                    {
                      category,
                      isSelected: selectedCategory === String(category.id),
                      onClick: () => setSelectedCategory(String(category.id))
                    },
                    category.id
                  )) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "w-full flex items-center justify-between bg-[#FFFFFE]/80 backdrop-blur-sm p-4 rounded-lg border border-[#FFFFE3]/50 mb-8",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-[#F5F5F5] px-3 py-1 rounded-full border border-[#FFFFE3]/30", children: /* @__PURE__ */ jsxs("small", { className: "text-sm text-[#333333] font-light tracking-wider uppercase whitespace-nowrap", children: [
                    filteredWorkshops.length,
                    " ",
                    filteredWorkshops.length === 1 ? "TALLER" : "TALLERES"
                  ] }) }),
                  selectedCategory !== "todo" && /* @__PURE__ */ jsxs("div", { className: "text-[#666666] text-sm hidden sm:block", children: [
                    "Categoría: ",
                    /* @__PURE__ */ jsx("span", { className: "font-medium text-[#6B8E23]", children: categories.find((c) => String(c.id) === selectedCategory)?.name || "" })
                  ] })
                ]
              }
            ),
            isLoading ? /* @__PURE__ */ jsx("div", { className: "min-h-[400px] flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
              /* @__PURE__ */ jsx(Loader, {}),
              /* @__PURE__ */ jsx("p", { className: "text-[#666666]", children: "Cargando talleres..." })
            ] }) }) : /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10", children: filteredWorkshops.length > 0 ? filteredWorkshops.map((workshop, index) => /* @__PURE__ */ jsx(
              WorkshopCard,
              {
                workshop,
                workshopImages,
                index
              },
              workshop.id
            )) : /* @__PURE__ */ jsx(
              "div",
              {
                className: "col-span-full h-48 flex items-center justify-center text-center",
                children: /* @__PURE__ */ jsxs("div", { className: "bg-[#FFFFFE] backdrop-blur-md rounded-lg border border-[#FFFFE3]/50 p-8 w-full max-w-md", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl text-[#333333] mb-2", children: "Sin resultados" }),
                  /* @__PURE__ */ jsx("p", { className: "text-[#666666] mb-4", children: "No se encontraron talleres con los filtros seleccionados" }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => {
                        setSelectedCategory("todo");
                        setSearchQuery("");
                        setSortBy("default");
                      },
                      className: "px-4 py-2 bg-[#D94F4F] text-white rounded-full hover:bg-[#D94F4F]/90 transition-colors",
                      children: "Limpiar filtros"
                    }
                  )
                ] })
              }
            ) }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed bottom-5 right-5",
        children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
            className: "bg-[#333333] text-white rounded-full w-12 h-12 p-3 flex items-center justify-center shadow-lg hover:bg-[#333333]/90 transition-all duration-300 hover:transform hover:translate-y-1",
            "aria-label": "Volver arriba",
            children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 19V5M5 12l7-7 7 7" }) })
          }
        )
      }
    )
  ] });
}

const $$Workshops = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WorkshopsComponent", Workshops, { "client:load": true, "initialCategory": "todo", "client:component-hydration": "load", "client:component-path": "D:/Daniel/MasterCook/src/components/workshop.jsx", "client:component-export": "default" })} ` })}`;
}, "D:/Daniel/MasterCook/src/pages/workshops.astro", void 0);

const $$file = "D:/Daniel/MasterCook/src/pages/workshops.astro";
const $$url = "/workshops";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Workshops,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
