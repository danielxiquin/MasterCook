/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BIQpHMk-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DaMmzM8O.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Check, User, Mail, Lock, ArrowRight } from 'lucide-react';
import Cookies from 'js-cookie';
export { renderers } from '../renderers.mjs';

const Decoration = () => {
  return /* @__PURE__ */ jsxs("div", { className: "absolute -z-10 inset-0 overflow-hidden opacity-70 pointer-events-none", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#D94F4F]/20 to-transparent blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-[60%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[#6B8E23]/20 to-transparent blur-3xl" })
  ] });
};
const Loader = () => /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" });
function SignupC() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const validatePassword = (password2) => {
    let strength = 0;
    if (password2.length >= 8) strength += 1;
    if (/[A-Z]/.test(password2)) strength += 1;
    if (/[0-9]/.test(password2)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password2)) strength += 1;
    setPasswordStrength(strength);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (passwordStrength < 3) {
      setError("La contraseña debe ser más segura");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error al crear la cuenta");
      }
      if (data.token) {
        Cookies.set("auth_token", data.token, { expires: 7, path: "/" });
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      }
      setSuccess(true);
      setTimeout(() => {
        window.location.href = data.token ? "/" : "/login";
      }, 2e3);
    } catch (err) {
      setError(err.message || "Ocurrió un error durante el registro");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FAFAFA] flex items-center justify-center px-4 py-12", children: [
    /* @__PURE__ */ jsx(Decoration, {}),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "w-full max-w-md bg-white rounded-xl border border-[#e0dfdf] overflow-hidden",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "px-8 pt-8 pb-6 border-b border-[#E5E5E5]", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-[#333333] mb-2", children: "Crear cuenta" }),
            /* @__PURE__ */ jsx("p", { className: "text-[#666666]", children: "Regístrate para acceder a todos nuestros servicios" })
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
                  /* @__PURE__ */ jsx(Check, { size: 18 }),
                  /* @__PURE__ */ jsx("p", { children: "¡Cuenta creada correctamente! Redirigiendo..." })
                ] })
              }
            ),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-[#333333]", children: "Nombre completo" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#666666]", children: /* @__PURE__ */ jsx(User, { size: 18 }) }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "name",
                      name: "name",
                      type: "text",
                      required: true,
                      value: name,
                      onChange: (e) => setName(e.target.value),
                      placeholder: "Juan Pérez",
                      className: "block w-full pl-10 pr-3 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none text-[#333333] placeholder:text-[#999999]",
                      disabled: isLoading || success
                    }
                  )
                ] })
              ] }),
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
                      onChange: (e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                      },
                      placeholder: "••••••••",
                      className: "block w-full pl-10 pr-3 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none text-[#333333]",
                      disabled: isLoading || success
                    }
                  )
                ] }),
                password && /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-1", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `h-1 flex-1 rounded-full ${i < passwordStrength ? i < 2 ? "bg-[#D94F4F]" : "bg-[#6B8E23]" : "bg-[#E5E5E5]"}`
                    },
                    i
                  )) }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-[#666666]", children: [
                    passwordStrength === 0 && "Contraseña muy débil",
                    passwordStrength === 1 && "Contraseña débil",
                    passwordStrength === 2 && "Contraseña moderada",
                    passwordStrength === 3 && "Contraseña fuerte",
                    passwordStrength === 4 && "Contraseña muy fuerte"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium text-[#333333]", children: "Confirmar contraseña" }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#666666]", children: /* @__PURE__ */ jsx(Lock, { size: 18 }) }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      id: "confirmPassword",
                      name: "confirmPassword",
                      type: "password",
                      required: true,
                      value: confirmPassword,
                      onChange: (e) => setConfirmPassword(e.target.value),
                      placeholder: "••••••••",
                      className: "block w-full pl-10 pr-3 py-3 border border-[#E5E5E5] rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23] outline-none text-[#333333]",
                      disabled: isLoading || success
                    }
                  )
                ] }),
                confirmPassword && password !== confirmPassword && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-[#D94F4F]", children: "Las contraseñas no coinciden" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "terms",
                    name: "terms",
                    type: "checkbox",
                    required: true,
                    className: "h-4 w-4 text-[#6B8E23] focus:ring-[#6B8E23] border-[#E5E5E5] rounded",
                    disabled: isLoading || success
                  }
                ),
                /* @__PURE__ */ jsxs("label", { htmlFor: "terms", className: "ml-2 block text-sm text-[#666666]", children: [
                  "Acepto los",
                  " ",
                  /* @__PURE__ */ jsx("a", { href: "/terms", className: "text-[#6B8E23] hover:underline", children: "términos y condiciones" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: isLoading || success,
                  className: `w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all duration-300 ${isLoading || success ? "bg-[#D94F4F]/70 text-white cursor-not-allowed" : "bg-[#D94F4F] text-white hover:bg-[#c04545] shadow-md hover:shadow-lg"}`,
                  children: isLoading ? /* @__PURE__ */ jsx(Loader, {}) : success ? "Cuenta creada" : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("span", { children: "Crear cuenta" }),
                    /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-[#666666]", children: [
              "¿Ya tienes una cuenta?",
              " ",
              /* @__PURE__ */ jsx("a", { href: "/login", className: "font-medium text-[#6B8E23] hover:text-[#566f1c] transition-colors", children: "Inicia sesión" })
            ] }) })
          ] })
        ]
      }
    )
  ] });
}

const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignupC", SignupC, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/signUpC", "client:component-export": "default" })} ` })}`;
}, "D:/Daniel/MasterCook/src/pages/signup.astro", void 0);

const $$file = "D:/Daniel/MasterCook/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
