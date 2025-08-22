/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BIQpHMk-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DMUtaIJp.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Mail, Lock, ArrowRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const Decoration = () => {
  return /* @__PURE__ */ jsxs("div", { className: "absolute -z-10 inset-0 overflow-hidden opacity-70 pointer-events-none", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#D94F4F]/20 to-transparent blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-[60%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[#6B8E23]/20 to-transparent blur-3xl" })
  ] });
};
const Loader = () => /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" });
function LoginC() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log("que dio" + data);
      if (!response.ok) {
        throw new Error(data.message || "Error al iniciar sesión");
      }
      const authToken = data.access_token;
      if (data.user) {
        console.log("Usuario guardado:", data.user);
      }
      setSuccess(true);
      setTimeout(() => {
        console.log("Redirigiendo a la página principal...");
      }, 1500);
    } catch (err) {
      setError(err.message || "Ocurrió un error durante el inicio de sesión");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4 pt-16", children: [
    /* @__PURE__ */ jsx(Decoration, {}),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "w-full max-w-md bg-white rounded-xl border border-[#e0dfdf] overflow-hidden my-8",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "px-8 pt-8 pb-6 border-b border-[#E5E5E5]", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-[#333333] mb-2", children: "Inicia sesión" }),
            /* @__PURE__ */ jsx("p", { className: "text-[#666666]", children: "Ingresa tus credenciales para acceder a tu cuenta" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
            error && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                className: "mb-6 p-4 bg-[#D94F4F]/10 border border-[#D94F4F]/20 rounded-lg flex items-center gap-3 text-[#D94F4F]",
                children: [
                  /* @__PURE__ */ jsx(AlertCircle, { size: 18 }),
                  /* @__PURE__ */ jsx("p", { children: error })
                ]
              }
            ),
            success && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                className: "mb-6 p-4 bg-[#6B8E23]/10 border border-[#6B8E23]/20 rounded-lg flex items-center gap-3 text-[#6B8E23]",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
                    /* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                    /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { children: "¡Sesión iniciada correctamente! Redirigiendo..." })
                ] })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-[#333333]", children: "Correo electrónico" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#666666]", children: /* @__PURE__ */ jsx(Mail, { size: 18 }) }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "email",
                      name: "email",
                      type: "email",
                      required: true,
                      value: email,
                      onChange: (e) => setEmail(e.target.value),
                      placeholder: "correo@ejemplo.com",
                      className: "block w-full pl-10 pr-3 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none text-[#333333] placeholder:text-[#999999]",
                      disabled: isLoading || success
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-[#333333]", children: "Contraseña" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#666666]", children: /* @__PURE__ */ jsx(Lock, { size: 18 }) }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "password",
                      name: "password",
                      type: "password",
                      required: true,
                      value: password,
                      onChange: (e) => setPassword(e.target.value),
                      placeholder: "••••••••",
                      className: "block w-full pl-10 pr-3 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none text-[#333333]",
                      disabled: isLoading || success,
                      onKeyDown: (e) => {
                        if (e.key === "Enter") {
                          handleSubmit(e);
                        }
                      }
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "remember_me",
                    name: "remember_me",
                    type: "checkbox",
                    className: "h-4 w-4 text-[#6B8E23] focus:ring-[#6B8E23] border-[#E5E5E5] rounded",
                    disabled: isLoading || success
                  }
                ),
                /* @__PURE__ */ jsx("label", { htmlFor: "remember_me", className: "ml-2 block text-sm text-[#666666]", children: "Recordarme" })
              ] }) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  onClick: handleSubmit,
                  disabled: isLoading || success,
                  className: `w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 ${isLoading || success ? "bg-[#D94F4F]/70 text-white cursor-not-allowed" : "bg-[#D94F4F] text-white hover:bg-[#c04545] shadow-md hover:shadow-lg"}`,
                  children: isLoading ? /* @__PURE__ */ jsx(Loader, {}) : success ? "Sesión iniciada" : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("span", { children: "Iniciar sesión" }),
                    /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-[#666666]", children: [
              "¿No tienes una cuenta?",
              " ",
              /* @__PURE__ */ jsx("a", { href: "/signup", className: "font-medium text-[#6B8E23] hover:text-[#566f1c] transition-colors", children: "Regístrate aquí" })
            ] }) })
          ] })
        ]
      }
    )
  ] });
}

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LoginC", LoginC, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Daniel/MasterCook/src/components/logInC", "client:component-export": "default" })} ` })}`;
}, "D:/Daniel/MasterCook/src/pages/login.astro", void 0);

const $$file = "D:/Daniel/MasterCook/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
