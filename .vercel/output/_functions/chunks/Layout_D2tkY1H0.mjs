import { c as createComponent, b as createAstro, a as renderTemplate, d as renderSlot, r as renderComponent, e as renderHead, f as defineScriptVars, g as addAttribute } from './astro/server_Cmp3Nnwv.mjs';
import 'kleur/colors';
/* empty css                         */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { X, ShoppingBag, Trash, LogIn, ArrowRight, User, LogOut, Menu } from 'lucide-react';

function Cart({ isOpen, setIsOpen }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (isOpen) {
      loadCart();
      checkAuthentication();
    }
  }, [isOpen]);
  const loadCart = () => {
    const savedCart = localStorage.getItem("salsasCart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      calculateTotals(parsedCart);
    }
  };
  const checkAuthentication = () => {
    const cookies = document.cookie.split(";");
    const authToken = cookies.find((cookie) => cookie.trim().startsWith("auth_token="));
    setIsAuthenticated(!!authToken);
  };
  const calculateTotals = (items) => {
    const itemCount = items.length;
    const price = items.reduce((sum, item) => sum + item.price, 0);
    setTotalItems(itemCount);
    setTotalPrice(price);
  };
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    calculateTotals(updatedCart);
    localStorage.setItem("salsasCart", JSON.stringify(updatedCart));
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const handleCheckoutClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      window.location.href = `/login?redirect=${encodeURIComponent("/checkout")}`;
    } else {
      closeCart();
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-50 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
        onClick: closeCart,
        style: {
          animation: "fadeIn 0.3s ease-out forwards"
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute right-0 top-0 h-full w-full sm:max-w-md bg-[#FAFAFA] shadow-xl overflow-hidden flex flex-col",
        style: {
          animation: "slideIn 0.3s ease-out forwards"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col h-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "border-b border-[#E5E5E5] p-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#333333] m-0", children: "Tu Carrito" }),
              /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm bg-[#D94F4F] text-white px-2 py-0.5 rounded-full w-7 h-7 flex items-center justify-center", children: totalItems })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: closeCart,
                className: "rounded-full hover:bg-[#FFF3E2] p-2 transition-colors",
                children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-[#333333]" })
              }
            )
          ] }),
          cartItems.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center justify-center p-6 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full bg-[#FFF3E2] flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(ShoppingBag, { className: "w-12 h-12 text-[#D94F4F]", strokeWidth: 1.5 }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-[#333333] mb-2", children: "Tu carrito está vacío" }),
            /* @__PURE__ */ jsx("p", { className: "text-[#666666] max-w-xs", children: "Reserva un taller de cocina y vuelve aquí para completar tu compra." }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/talleres",
                onClick: closeCart,
                className: "block py-2 mt-6 bg-[#D94F4F] text-white hover:bg-[#c04545] font-medium rounded-lg px-6 shadow-md transition-all",
                children: "Explorar talleres"
              }
            )
          ] }) : /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto py-4 space-y-4 px-4", children: cartItems.map((item, index) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "group  bg-white p-4 border border-[#E5E5E5] hover:border-[#D94F4F] hover:shadow-md transition-all duration-300",
              style: {
                animation: `fadeInUp 0.3s ease-out forwards ${index * 0.1}s`
              },
              children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden  aspect-square h-20 w-20 bg-[#FFF3E2]", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: item.imageUrl || "/images/placeholder.jpg",
                      alt: item.name,
                      className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    }
                  ),
                  item.discount && item.discount !== 0 && /* @__PURE__ */ jsxs("div", { className: "absolute top-0 right-0 bg-[#D94F4F] text-white text-xs font-bold px-1.5 py-0.5 rounded-bl-md", children: [
                    "-",
                    item.discount,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-[#333333]", children: item.name.length > 24 ? item.name.slice(0, 22) + "..." : item.name }),
                      /* @__PURE__ */ jsxs("p", { className: "text-xs text-[#666666]", children: [
                        item.date,
                        " - ",
                        item.time
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => removeFromCart(item.id),
                        className: "rounded-full hover:bg-[#FFF3E2] text-[#666666] hover:text-[#D94F4F] -mt-1 -mr-1 h-8 w-8 flex items-center justify-center",
                        children: /* @__PURE__ */ jsx(Trash, { className: "h-4 w-4" })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-3 flex items-center justify-end", children: /* @__PURE__ */ jsx("div", { className: "text-right", children: item.discount && item.discount !== 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-xs line-through text-[#666666]", children: [
                      "GTQ ",
                      item.originalPrice.toFixed(2)
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "block text-[#D94F4F] font-medium", children: [
                      "GTQ ",
                      item.price.toFixed(2)
                    ] })
                  ] }) : /* @__PURE__ */ jsxs("span", { className: "text-[#D94F4F] font-medium", children: [
                    "GTQ ",
                    item.price.toFixed(2)
                  ] }) }) })
                ] })
              ] })
            },
            item.id
          )) }),
          cartItems.length > 0 && /* @__PURE__ */ jsx("div", { className: "border-t border-[#E5E5E5] pt-4 pb-6 px-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm text-[#666666] mb-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Subtotal" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "GTQ ",
                  totalPrice.toFixed(2)
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm text-[#666666] mb-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Impuestos" }),
                /* @__PURE__ */ jsx("span", { children: "Incluidos" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "border-t border-[#E5E5E5] my-2" }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold text-[#333333]", children: "Total" }),
                /* @__PURE__ */ jsxs("span", { className: "font-bold text-xl text-[#D94F4F]", children: [
                  "GTQ ",
                  totalPrice.toFixed(2)
                ] })
              ] })
            ] }),
            !isAuthenticated ? /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-[#FFF3E2] text-[#D94F4F] rounded-lg text-sm", children: "Para finalizar tu compra, debes iniciar sesión como miembro de MasterCook Academy." }),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/login?redirect=/checkout",
                  className: "block w-full bg-[#D94F4F] hover:bg-[#c04545] text-white font-bold py-3 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-md",
                  children: [
                    "Iniciar sesión",
                    /* @__PURE__ */ jsx(LogIn, { className: "w-5 h-5" })
                  ]
                }
              )
            ] }) : /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/checkout",
                onClick: handleCheckoutClick,
                className: "block w-full bg-[#D94F4F] hover:bg-[#c04545] text-white font-bold py-3 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-md",
                children: [
                  "Finalizar compra",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 transition-transform group-hover:translate-x-1" })
                ]
              }
            )
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` })
  ] });
}

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  useEffect(() => {
    const checkAuthToken = () => {
      const cookies = document.cookie.split(";");
      let token = null;
      for (const cookie of cookies) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith("auth_token=")) {
          token = trimmedCookie.substring("auth_token=".length);
          break;
        }
      }
      if (token) {
        setAuthToken(token);
        verifyAuthToken(token);
      } else {
        setIsAuthenticated(false);
      }
    };
    checkAuthToken();
    const intervalId = setInterval(checkAuthToken, 5e3);
    return () => clearInterval(intervalId);
  }, []);
  const verifyAuthToken = async (token) => {
    try {
      const response = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/auth/me", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        console.error("Token inválido o expirado");
        removeAuthTokenCookie();
        setAuthToken(null);
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Error al verificar el token:", err);
      removeAuthTokenCookie();
      setAuthToken(null);
      setIsAuthenticated(false);
    }
  };
  const removeAuthTokenCookie = () => {
    document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };
  const openCart = () => {
    setIsCartOpen(true);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLogout = () => {
    removeAuthTokenCookie();
    setAuthToken(null);
    setIsAuthenticated(false);
    setIsUserMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-40 bg-white/30 backdrop-blur-md border-b border-gray-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:grid grid-cols-3 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-stretch", children: [
          /* @__PURE__ */ jsxs("a", { href: "/", className: "group relative overflow-hidden flex items-center h-16 px-6 md:px-10 text-main-text border-r border-gray-300", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-light-background translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" }),
            /* @__PURE__ */ jsx("span", { className: "relative z-10 group-hover:text-primary transition-colors duration-300", children: "Inicio" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/workshops", className: "group relative overflow-hidden flex items-center h-16 px-6 md:px-10 text-main-text border-r border-gray-300", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-light-background translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" }),
            /* @__PURE__ */ jsx("span", { className: "relative z-10 group-hover:text-primary transition-colors duration-300", children: "Talleres" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/about", className: "group relative overflow-hidden flex items-center h-16 px-6 md:px-10 text-main-text border-r border-gray-300", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-light-background translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" }),
            /* @__PURE__ */ jsx("span", { className: "relative z-10 group-hover:text-primary transition-colors duration-300", children: "Sobre Nosotros" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-primary font-bold", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "48", height: "48", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M7 5a5 5 0 0 0-2 9.584v2.666h14v-2.666a5.001 5.001 0 0 0-2.737-9.53a4.502 4.502 0 0 0-8.526 0A5 5 0 0 0 7 5m11.998 13.75H5.002c.01 1.397.081 2.162.584 2.664C6.172 22 7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586c.503-.502.574-1.267.584-2.664" }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-stretch justify-end", children: [
          /* @__PURE__ */ jsxs("a", { href: "/contact", className: "group relative overflow-hidden flex items-center h-16 px-6 md:px-10 text-main-text border-l border-r border-gray-300", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-light-background translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" }),
            /* @__PURE__ */ jsx("span", { className: "relative z-10 group-hover:text-primary transition-colors duration-300", children: "Contacto" })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: openCart,
              className: "group relative overflow-hidden flex items-center h-16 px-6 md:px-10 text-main-text border-l border-r border-gray-300",
              children: [
                /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-light-background translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" }),
                /* @__PURE__ */ jsxs("span", { className: "relative z-10 group-hover:text-primary transition-colors duration-300 flex items-center", children: [
                  /* @__PURE__ */ jsx(ShoppingBag, { className: "w-5 h-5 mr-2" }),
                  "Carrito"
                ] })
              ]
            }
          ),
          isAuthenticated ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: toggleUserMenu,
                className: "group relative overflow-hidden flex items-center h-16 px-6 md:px-10 text-main-text border-r border-gray-300",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-light-background translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" }),
                  /* @__PURE__ */ jsx("span", { className: "relative z-10 group-hover:text-primary transition-colors duration-300", children: "Mi Cuenta" })
                ]
              }
            ),
            isUserMenuOpen && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 w-48 mt-2 py-2 bg-white border border-gray-200 rounded-md shadow-lg z-50", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "/profile",
                  className: "flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100",
                  children: [
                    /* @__PURE__ */ jsx(User, { className: "w-4 h-4 mr-2" }),
                    "Mi Perfil"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: handleLogout,
                  className: "flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100",
                  children: [
                    /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4 mr-2" }),
                    "Cerrar Sesión"
                  ]
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/login",
              className: "group relative overflow-hidden flex items-center h-16 px-6 md:px-10 text-main-text border-r border-gray-300",
              children: [
                /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-light-background translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" }),
                /* @__PURE__ */ jsx("span", { className: "relative z-10 group-hover:text-primary transition-colors duration-300", children: "Usuario" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center px-4 lg:hidden", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleMobileMenu,
            className: "p-2 text-gray-600 focus:outline-none",
            children: isMobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center py-3", children: /* @__PURE__ */ jsx("a", { href: "/", className: "text-primary font-bold", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "40", height: "40", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "currentColor", d: "M7 5a5 5 0 0 0-2 9.584v2.666h14v-2.666a5.001 5.001 0 0 0-2.737-9.53a4.502 4.502 0 0 0-8.526 0A5 5 0 0 0 7 5m11.998 13.75H5.002c.01 1.397.081 2.162.584 2.664C6.172 22 7.114 22 9 22h6c1.886 0 2.828 0 3.414-.586c.503-.502.574-1.267.584-2.664" }) }) }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: openCart,
            className: "p-2 text-gray-600 focus:outline-none",
            children: /* @__PURE__ */ jsx(ShoppingBag, { className: "w-6 h-6" })
          }
        )
      ] }),
      isMobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "lg:hidden bg-white border-t border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("a", { href: "/", className: "py-4 px-6 border-b border-gray-200 text-main-text hover:bg-gray-50", children: "Inicio" }),
        /* @__PURE__ */ jsx("a", { href: "/workshops", className: "py-4 px-6 border-b border-gray-200 text-main-text hover:bg-gray-50", children: "Talleres" }),
        /* @__PURE__ */ jsx("a", { href: "/about", className: "py-4 px-6 border-b border-gray-200 text-main-text hover:bg-gray-50", children: "Sobre Nosotros" }),
        /* @__PURE__ */ jsx("a", { href: "/contact", className: "py-4 px-6 border-b border-gray-200 text-main-text hover:bg-gray-50", children: "Contacto" }),
        isAuthenticated ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("a", { href: "/profile", className: "py-4 px-6 border-b border-gray-200 text-main-text hover:bg-gray-50 flex items-center", children: [
            /* @__PURE__ */ jsx(User, { className: "w-5 h-5 mr-2" }),
            "Mi Perfil"
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleLogout,
              className: "py-4 px-6 border-b border-gray-200 text-main-text hover:bg-gray-50 flex items-center w-full text-left",
              children: [
                /* @__PURE__ */ jsx(LogOut, { className: "w-5 h-5 mr-2" }),
                "Cerrar Sesión"
              ]
            }
          )
        ] }) : /* @__PURE__ */ jsx("a", { href: "/login", className: "py-4 px-6 border-b border-gray-200 text-main-text hover:bg-gray-50", children: "Usuario" })
      ] }) })
    ] }),
    isUserMenuOpen && isAuthenticated && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-30",
        onClick: () => setIsUserMenuOpen(false)
      }
    ),
    isMobileMenuOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 z-30 bg-black/30 lg:hidden",
        onClick: () => setIsMobileMenuOpen(false)
      }
    ),
    /* @__PURE__ */ jsx(Cart, { isOpen: isCartOpen, setIsOpen: setIsCartOpen })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { projectId } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>MasterCook</title><!-- Tracking --><script>(function(){", "\n      (() => {\n        const script = document.createElement('script');\n        script.src = 'http://localhost:4321/api/projects/track-secure';\n        script.dataset.project = projectId;\n        script.defer = true;\n        document.head.appendChild(script);\n      })();\n    })();<\/script>", "</head> <body data-astro-cid-sckkx6r4> ", " <main data-astro-cid-sckkx6r4> ", " </main> <footer data-astro-cid-sckkx6r4></footer> </body></html>"])), addAttribute(Astro2.generator, "content"), defineScriptVars({ projectId }), renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Daniel/MasterCook/src/components/header", "client:component-export": "default", "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]));
}, "D:/Daniel/MasterCook/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
