/* empty css                                    */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_BIQpHMk-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DMUtaIJp.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, Clock, Users, ShoppingBag } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const Decoration = () => {
  return /* @__PURE__ */ jsxs("div", { className: "absolute -z-10 inset-0 overflow-hidden opacity-70 pointer-events-none", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#D94F4F]/20 to-transparent blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-[60%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[#6B8E23]/20 to-transparent blur-3xl" })
  ] });
};
const Loader = () => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-8 h-8 border-4 border-[#D94F4F]/30 border-t-[#D94F4F] rounded-full animate-spin" }) });
const OptimizedImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  useEffect(() => {
    const img = new window.Image();
    img.src = src || "/api/placeholder/500/300";
    img.onload = () => {
      setImgSrc(img.src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      setImgSrc("/api/placeholder/500/300");
      setIsLoaded(true);
    };
  }, [src]);
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full overflow-hidden", children: [
    !isLoaded && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-[#333333]/10 z-10 w-full h-full", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        children: /* @__PURE__ */ jsx(Loader, {})
      }
    ) }),
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
    motion.div,
    {
      className: "h-full bg-gradient-to-r from-[#6B8E23] via-[#6B8E23]/70 to-[#FAFAFA]",
      style: { scaleX: scrollProgress, transformOrigin: "0%" }
    }
  ) });
};
function WorkshopId({ workshopId }) {
  const [workshop, setWorkshop] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedWorkshops, setRelatedWorkshops] = useState([]);
  const [error, setError] = useState(null);
  const [allWorkshops, setAllWorkshops] = useState([]);
  const [userReservations, setUserReservations] = useState([]);
  const [isAlreadyReserved, setIsAlreadyReserved] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initialLoadCompleted, setInitialLoadCompleted] = useState(false);
  const workshopImagesById = {
    1: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuMuhOjpzB02MisAEvYjHQhPGucaFX54CJrUOn",
    2: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibu7htBM8RilvS4mGda0BVPYjrps1H5Lf6DObNF",
    3: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuBHsdxLPb6lrQWNcyYFdnfEzkeVHJXgoMawmD",
    4: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibutFnAGpualz2QAIYZWuOfsk5nxJDdbcVy1pe4",
    5: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibutHioByualz2QAIYZWuOfsk5nxJDdbcVy1pe4",
    6: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibumctXQLNrPvHGd1j2UM5sACiWEgXI6atVnYyz",
    7: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuuXdUT8fyXR7wfFas8jC0PIStrJ3dMb4ZeBKD",
    8: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuInmtowlAyO8kqw0XmJiTH3EQFBVbCG4o2UaS",
    9: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuEbSDr1NQ3G5DiXUHsPJjl4xCBKmyotakWeFZ",
    10: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibu6VjN9FHvu4jTO7gzRm3dXnqYyJGwxA5VLMkc",
    11: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuabLKK2ABUdWKHfOIM621lGQbSXNs5CArhFxz",
    12: "https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibu5F9013ZRtlECNGU1HWj4bcvBhzO65xgwroMF"
  };
  useEffect(() => {
    initializeComponent();
    window.scrollTo(0, 0);
  }, []);
  const initializeComponent = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getAuthTokenFromCookies();
      if (token) {
        setAuthToken(token);
        const [isValidToken] = await Promise.all([
          verifyAuthToken(token),
          loadWorkshopData(workshopId)
        ]);
        if (isValidToken) {
          setIsAuthenticated(true);
          await loadUserReservations(token);
        }
      } else {
        await loadWorkshopData(workshopId);
      }
    } catch (error2) {
      console.error("Error durante la inicialización:", error2);
      setError("Error al cargar el taller. Por favor, inténtalo de nuevo más tarde.");
    } finally {
      setLoading(false);
      setInitialLoadCompleted(true);
    }
  };
  const getAuthTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    const authCookie = cookies.find((cookie) => cookie.trim().startsWith("auth_token="));
    if (authCookie) {
      return authCookie.trim().substring("auth_token=".length);
    }
    return null;
  };
  const verifyAuthToken = async (token) => {
    try {
      const response = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/auth/me", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.ok) {
        return true;
      } else {
        console.error("Invalid or expired token");
        removeAuthTokenCookie();
        setAuthToken(null);
        setIsAuthenticated(false);
        return false;
      }
    } catch (err) {
      console.error("Error verifying token:", err);
      return false;
    }
  };
  const removeAuthTokenCookie = () => {
    document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  const loadUserReservations = async (token) => {
    if (!token) return;
    try {
      const response = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/reservations", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (!response.ok) {
        if (response.status === 401) {
          removeAuthTokenCookie();
          setAuthToken(null);
          setIsAuthenticated(false);
          console.log("Session expired, please log in again");
          return;
        }
        console.log(`Error loading reservations: ${response.status}`);
        return;
      }
      const data = await response.json();
      if (data && data.reservations) {
        setUserReservations(data.reservations);
        const isReserved = data.reservations.some(
          (reservation) => reservation.workshop_id.toString() === workshopId.toString()
        );
        setIsAlreadyReserved(isReserved);
      }
    } catch (error2) {
      console.error("Error loading user reservations:", error2);
    }
  };
  const loadAllWorkshops = async () => {
    try {
      const response = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/workshops");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.workshops) {
        setAllWorkshops(data.workshops);
        return data.workshops;
      }
      return [];
    } catch (error2) {
      console.error("Error loading all workshops:", error2);
      return [];
    }
  };
  const loadWorkshopData = async (id) => {
    try {
      let allWorkshopsData = allWorkshops;
      if (allWorkshopsData.length === 0) {
        allWorkshopsData = await loadAllWorkshops();
      }
      const response = await fetch(`https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/workshops/${id}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("WORKSHOP_NOT_FOUND");
        }
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      if (data && data.workshop) {
        const processedWorkshop = {
          ...data.workshop,
          instructor: data.workshop.instructor_name,
          time: `${data.workshop.start_time.substring(0, 5)} - ${data.workshop.end_time.substring(0, 5)}`,
          imageUrl: workshopImagesById[data.workshop.id] || "/api/placeholder/500/300",
          availability: data.workshop.available_slots > 5 ? "Alta disponibilidad" : "Pocas plazas",
          stock: data.workshop.available_slots,
          location: "Cocina Central, Zona 10",
          discountedPrice: data.workshop.price,
          discount: 0,
          includes: [
            "Material didáctico",
            "Ingredientes necesarios",
            "Certificado de participación",
            "Degustación de productos"
          ],
          capacity: data.workshop.capacity || 20
        };
        setWorkshop(processedWorkshop);
        if (allWorkshopsData.length > 0) {
          const sameCategory = allWorkshopsData.filter(
            (w) => w.category_id === data.workshop.category_id && w.id !== data.workshop.id
          );
          let related = [...sameCategory];
          if (related.length < 3) {
            const otherWorkshops = allWorkshopsData.filter(
              (w) => w.category_id !== data.workshop.category_id && w.id !== data.workshop.id
            );
            related = [...related, ...otherWorkshops.slice(0, 3 - related.length)];
          }
          setRelatedWorkshops(related.slice(0, 3));
        }
      } else {
        throw new Error("WORKSHOP_NOT_FOUND");
      }
    } catch (error2) {
      console.error("Error al cargar los datos del taller:", error2);
      if (error2.message === "WORKSHOP_NOT_FOUND") {
        setError("WORKSHOP_NOT_FOUND");
      } else {
        throw error2;
      }
    }
  };
  const addToCart = (item) => {
    const existingCart = localStorage.getItem("salsasCart");
    let cart = existingCart ? JSON.parse(existingCart) : [];
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex !== -1) {
      cart[itemIndex].quantity += 1;
    } else {
      cart.push({
        ...item,
        quantity: 1
      });
    }
    localStorage.setItem("salsasCart", JSON.stringify(cart));
    const notification = document.createElement("div");
    notification.className = "fixed top-20 right-4 bg-[#6B8E23] text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-fade-in";
    notification.textContent = `${item.name} ha sido añadido al carrito`;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add("animate-fade-out");
      setTimeout(() => document.body.removeChild(notification), 500);
    }, 3e3);
  };
  const getFormattedDate = (dateString) => {
    if (!dateString) return "";
    if (dateString.includes("de")) return dateString;
    try {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }).format(date);
    } catch (e) {
      return dateString;
    }
  };
  const navigateToCategory = (categoryId) => {
    localStorage.setItem("selectedCategory", categoryId);
    window.location.href = "/workshops";
  };
  if (loading || !initialLoadCompleted) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-[#FAFAFA]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-6", children: [
      /* @__PURE__ */ jsx(Loader, {}),
      /* @__PURE__ */ jsx("p", { className: "text-[#666666] animate-pulse", children: "Cargando información del taller..." })
    ] }) });
  }
  if (error && initialLoadCompleted) {
    const isNotFound = error === "WORKSHOP_NOT_FOUND";
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-[#FAFAFA] text-[#333333]", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: isNotFound ? "Taller no encontrado" : "Error" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6", children: isNotFound ? "El taller que buscas no existe o ha sido eliminado." : "Error al cargar el taller. Por favor, inténtalo de nuevo más tarde." }),
      /* @__PURE__ */ jsx("a", { href: "/workshops", className: "bg-[#D94F4F] text-white px-6 py-3 rounded-lg hover:bg-[#c04545] transition-colors", children: "Ver todos los talleres" })
    ] }) });
  }
  if (!workshop && initialLoadCompleted) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-[#FAFAFA] text-[#333333]", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Taller no encontrado" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6", children: "El taller que buscas no existe o ha sido eliminado." }),
      /* @__PURE__ */ jsx("a", { href: "/workshops", className: "bg-[#D94F4F] text-white px-6 py-3 rounded-lg hover:bg-[#c04545] transition-colors", children: "Ver todos los talleres" })
    ] }) });
  }
  const WorkshopCard = ({ workshop: workshop2, index }) => {
    const formattedDate = getFormattedDate(workshop2.date);
    const workshopImage = workshopImagesById[workshop2.id] || "/api/placeholder/400/300";
    return /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: index * 0.1 },
        whileHover: { y: -5 },
        children: /* @__PURE__ */ jsx("a", { href: `/workshopsId/${workshop2.id}`, className: "block", children: /* @__PURE__ */ jsxs("article", { className: "group relative w-full h-full overflow-hidden bg-[#FFFFFE] shadow-sm hover:shadow-md transition-all duration-300 border border-[#FFFFE3]/20", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden  bg-[#333333] h-40", children: [
            /* @__PURE__ */ jsx(
              OptimizedImage,
              {
                src: workshopImage,
                alt: workshop2.name,
                className: "w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { type: "spring", stiffness: 500, delay: 0.2 },
                className: "bg-[#333333] text-[#FAFAFA] px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm",
                children: /* @__PURE__ */ jsx("span", { className: "font-medium", children: workshop2.modality === "presencial" ? "PRESENCIAL" : "VIRTUAL" })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm text-[#6B8E23] font-medium tracking-wide mb-1", children: workshop2.category_name || "Categoría" }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg text-[#333333] font-medium tracking-tight line-clamp-1 group-hover:text-[#D94F4F] transition-colors", children: workshop2.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#666666] mt-1", children: [
                "Por ",
                workshop2.instructor_name
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-[#666666] mt-2", children: [
                formattedDate,
                " • ",
                workshop2.start_time.substring(0, 5),
                " - ",
                workshop2.end_time.substring(0, 5)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-3 pt-3 border-t border-[#FFFFE3]/30", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-base font-bold text-[#333333]", children: [
                "Q",
                parseFloat(workshop2.price).toFixed(2)
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs bg-[#F5F5F5] px-2 py-1 rounded", children: [
                workshop2.available_slots,
                " disponibles"
              ] })
            ] })
          ] })
        ] }) })
      }
    );
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FAFAFA] pt-14", children: [
    /* @__PURE__ */ jsx(ScrollIndicator, {}),
    /* @__PURE__ */ jsx(Decoration, {}),
    /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 md:px-6 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "relative h-[400px] md:h-[500px] overflow-hidden  bg-[#FFF3E2]",
            children: [
              /* @__PURE__ */ jsxs("a", { href: "/workshops", className: "absolute top-4 left-4 z-30 flex items-center text-[#333333] hover:text-[#D94F4F] transition-colors gap-2 bg-white/90 px-4 py-2 rounded-full shadow-md", children: [
                /* @__PURE__ */ jsx(ChevronLeft, { size: 18 }),
                /* @__PURE__ */ jsx("span", { className: "uppercase text-sm tracking-wide font-medium", children: "Volver" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full h-full relative", children: [
                /* @__PURE__ */ jsx(
                  OptimizedImage,
                  {
                    src: workshop.imageUrl,
                    alt: workshop.name,
                    className: "w-full h-full object-cover"
                  }
                ),
                workshop.discount > 0 && /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 bg-[#D94F4F] text-white text-sm font-bold px-3 py-1 rounded-full", children: [
                  "-",
                  workshop.discount,
                  "% OFF"
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.2 },
            className: "flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    motion.span,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.3 },
                      className: "text-sm tracking-widest text-[#666666] uppercase block mb-1",
                      children: [
                        "Taller ",
                        workshop.modality === "presencial" ? "Presencial" : "Virtual"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.h1,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.4 },
                      className: "text-3xl md:text-4xl font-bold text-[#333333]",
                      children: workshop.name
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.p,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.5 },
                      className: "text-[#666666] mt-2",
                      children: [
                        "Instructor: ",
                        /* @__PURE__ */ jsx("span", { className: "text-[#333333] font-medium", children: workshop.instructor })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.button,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.55 },
                      onClick: () => navigateToCategory(workshop.category_id),
                      className: "text-sm text-[#6B8E23] hover:underline mt-2 inline-flex items-center",
                      children: /* @__PURE__ */ jsxs("span", { children: [
                        "Ver más en ",
                        workshop.category_name
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5 },
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-2 tracking-wide px-3 py-1 bg-[#6B8E23] w-fit text-white text-sm rounded-full", children: workshop.availability }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mt-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#666666]", children: [
                          /* @__PURE__ */ jsx(Calendar, { size: 18, className: "text-[#D94F4F]" }),
                          /* @__PURE__ */ jsx("span", { children: getFormattedDate(workshop.date) })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#666666]", children: [
                          /* @__PURE__ */ jsx(Clock, { size: 18, className: "text-[#D94F4F]" }),
                          /* @__PURE__ */ jsx("span", { children: workshop.time })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#666666]", children: [
                          /* @__PURE__ */ jsx(Users, { size: 18, className: "text-[#D94F4F]" }),
                          /* @__PURE__ */ jsxs("span", { children: [
                            "Máximo ",
                            workshop.capacity,
                            " personas"
                          ] })
                        ] })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.6 },
                    className: "py-4 border-t border-b border-[#E5E5E5]",
                    children: workshop.discount > 0 ? /* @__PURE__ */ jsxs("div", { className: "flex items-baseline space-x-3", children: [
                      /* @__PURE__ */ jsxs("span", { className: "text-xl text-[#666666] line-through", children: [
                        "GTQ ",
                        workshop.price.toFixed(2)
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "text-3xl font-medium text-[#D94F4F]", children: [
                        "GTQ ",
                        workshop.discountedPrice.toFixed(2)
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "ml-2 px-2 py-0.5 bg-[#D94F4F]/20 text-[#D94F4F] text-sm rounded-sm", children: [
                        "-",
                        workshop.discount,
                        "%"
                      ] })
                    ] }) : /* @__PURE__ */ jsxs("span", { className: "text-3xl font-medium text-[#D94F4F]", children: [
                      "GTQ ",
                      workshop.price.toFixed(2)
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.7 },
                    children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-[#333333] mb-2", children: "Descripción" }),
                      /* @__PURE__ */ jsx("p", { className: "text-[#666666] leading-relaxed", children: workshop.description })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.8 },
                    children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-[#333333] mb-2", children: "Incluye" }),
                      /* @__PURE__ */ jsx("ul", { className: "list-disc pl-5 text-[#666666] space-y-1", children: workshop.includes.map((item, index) => /* @__PURE__ */ jsx("li", { children: item }, index)) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.9 },
                    className: "pt-4",
                    children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => addToCart({
                          id: workshop.id,
                          name: workshop.name,
                          price: workshop.discount > 0 ? workshop.discountedPrice : workshop.price,
                          originalPrice: workshop.price,
                          discount: workshop.discount,
                          imageUrl: workshop.imageUrl,
                          type: "workshop",
                          date: getFormattedDate(workshop.date),
                          time: workshop.time
                        }),
                        disabled: workshop.available_slots < 1 || isAlreadyReserved,
                        className: `w-full py-4 flex items-center justify-center gap-3 text-lg tracking-wide transition-all rounded-lg ${workshop.available_slots < 1 ? "bg-[#E5E5E5] text-[#666666] cursor-not-allowed" : isAlreadyReserved ? "bg-[#6B8E23] text-white cursor-not-allowed" : "bg-[#D94F4F] text-white hover:bg-[#c04545] shadow-md hover:shadow-lg"}`,
                        children: [
                          /* @__PURE__ */ jsx(ShoppingBag, { size: 18 }),
                          workshop.available_slots < 1 ? "Agotado" : isAlreadyReserved ? "Ya reservado" : "Reservar mi lugar"
                        ]
                      }
                    )
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 1 },
                  className: "pt-6 mt-6 border-t border-[#E5E5E5]",
                  children: [
                    /* @__PURE__ */ jsxs("p", { className: "text-[#666666] text-sm", children: [
                      "Ubicación: ",
                      /* @__PURE__ */ jsx("span", { className: "text-[#333333]", children: workshop.location })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#666666] text-sm mt-2", children: "* El pago reserva tu lugar. Cupos limitados, ¡no te lo pierdas!" })
                  ]
                }
              )
            ]
          }
        )
      ] }),
      relatedWorkshops.length > 0 && /* @__PURE__ */ jsxs(
        motion.section,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1.1, duration: 0.6 },
          className: "mt-16 pt-8 border-t border-[#E5E5E5]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#333333]", children: /* @__PURE__ */ jsxs("span", { className: "relative", children: [
                "Talleres relacionados",
                /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-1/3 h-1 bg-[#D94F4F] rounded-full" })
              ] }) }),
              /* @__PURE__ */ jsx("a", { href: "/workshops", className: "text-[#6B8E23] hover:text-[#6B8E23]/80 text-sm font-medium transition-colors", children: "Ver todos los talleres" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: relatedWorkshops.map((relatedWorkshop, index) => /* @__PURE__ */ jsx(WorkshopCard, { workshop: relatedWorkshop, index }, relatedWorkshop.id)) })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "fixed bottom-5 right-5",
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: 1.5 },
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
    ] })
  ] });
}

const $$Astro = createAstro();
async function getStaticPaths() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id) => ({
    params: { id: id.toString() },
    props: { id }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Taller #${id} - Salsas Artesanales` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WorkshopId", WorkshopId, { "workshopId": id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Daniel/MasterCook/src/components/workshopid", "client:component-export": "default" })} ` })}`;
}, "D:/Daniel/MasterCook/src/pages/workshopsId/[id].astro", void 0);

const $$file = "D:/Daniel/MasterCook/src/pages/workshopsId/[id].astro";
const $$url = "/workshopsId/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
