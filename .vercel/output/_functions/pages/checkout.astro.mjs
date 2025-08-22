/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_Cmp3Nnwv.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_D2tkY1H0.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { ChevronLeft, ShoppingBag, Calendar, Clock, ArrowRight, AlertCircle, CreditCard, Lock, Check } from 'lucide-react';
export { renderers } from '../renderers.mjs';

function CheckoutC() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("Débito");
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({});
  const [reservationId, setReservationId] = useState(null);
  const [existingReservations, setExistingReservations] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [paymentError, setPaymentError] = useState(null);
  useEffect(() => {
    loadCart();
    getAuthTokenFromCookies();
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (step === 3) {
      window.scrollTo(0, 0);
    }
  }, [step]);
  useEffect(() => {
    if (authToken) {
      fetchExistingReservations();
    }
  }, [authToken]);
  const getAuthTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    const authCookie = cookies.find((cookie) => cookie.trim().startsWith("auth_token="));
    if (authCookie) {
      const token = authCookie.trim().substring("auth_token=".length);
      setAuthToken(token);
    } else {
      console.error("Auth token not found in cookies");
      setErrors({
        ...errors,
        auth: "No se encontró token de autenticación. Por favor, inicia sesión nuevamente."
      });
    }
  };
  const fetchExistingReservations = async () => {
    try {
      const reservationsResponse = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/reservations", {
        headers: {
          "Authorization": `Bearer ${authToken}`
        }
      });
      if (!reservationsResponse.ok) {
        if (reservationsResponse.status === 401) {
          throw new Error("Sesión expirada. Por favor, inicia sesión nuevamente.");
        }
        throw new Error(`Error al cargar las reservas: ${reservationsResponse.status}`);
      }
      const reservationsData = await reservationsResponse.json();
      setExistingReservations(reservationsData.reservations || []);
    } catch (error) {
      console.error("Error al cargar reservaciones existentes:", error);
    }
  };
  const loadCart = () => {
    const savedCart = localStorage.getItem("salsasCart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      calculateTotal(parsedCart);
    }
  };
  const calculateTotal = (items) => {
    const price = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    setTotalPrice(price);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentError(null);
    if (name === "cardNumber") {
      const formatted = value.replace(/\s/g, "").replace(/(\d{4})(?=\d)/g, "$1 ").trim();
      setFormData({ ...formData, [name]: formatted.substring(0, 19) });
    } else if (name === "expiryDate") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned.length <= 2) {
        setFormData({ ...formData, [name]: cleaned });
      } else {
        setFormData({ ...formData, [name]: `${cleaned.substring(0, 2)}/${cleaned.substring(2, 4)}` });
      }
    } else if (name === "cvv") {
      const cleaned = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: cleaned.substring(0, 4) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const validateContactInfo = () => {
    const newErrors = {};
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Por favor, ingresa un email válido";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Por favor, ingresa un teléfono de contacto";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const validatePaymentForm = () => {
    const newErrors = {};
    if (!formData.cardHolder.trim()) {
      newErrors.cardHolder = "Por favor, ingresa el nombre del titular";
    }
    if (!formData.cardNumber.trim() || formData.cardNumber.replace(/\s/g, "").length < 16) {
      newErrors.cardNumber = "Por favor, ingresa un número de tarjeta válido";
    }
    if (!formData.expiryDate.trim() || !formData.expiryDate.includes("/")) {
      newErrors.expiryDate = "Formato inválido (MM/YY)";
    } else {
      const [month, year] = formData.expiryDate.split("/");
      const currentDate = /* @__PURE__ */ new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;
      if (parseInt(year) < currentYear || parseInt(year) === currentYear && parseInt(month) < currentMonth) {
        newErrors.expiryDate = "La tarjeta ha expirado";
      }
    }
    if (!formData.cvv.trim() || formData.cvv.length < 3) {
      newErrors.cvv = "CVV inválido";
    }
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };
  const handleNextStep = () => {
    if (step === 1) {
      if (validateContactInfo()) {
        setStep(2);
        window.scrollTo(0, 0);
      }
    } else if (step === 2) {
      const contactInfoValid = validateContactInfo();
      const paymentFormValid = validatePaymentForm();
      if (contactInfoValid && paymentFormValid) {
        if (reservationId) {
          processPaymentOnly();
        } else {
          createReservationAndProcessPayment();
        }
      }
    }
  };
  const clearCart = () => {
    localStorage.removeItem("salsasCart");
    setCartItems([]);
    setTotalPrice(0);
  };
  const checkExistingReservation = () => {
    const workshopId = cartItems[0]?.id;
    if (!workshopId) return null;
    const existingReservation = existingReservations.find(
      (res) => res.workshop_id === workshopId && !res.payment_completed
    );
    return existingReservation?.id || null;
  };
  const createReservationAndProcessPayment = async () => {
    setIsLoading(true);
    setPaymentError(null);
    if (!authToken) {
      setErrors({
        ...errors,
        auth: "No se encontró token de autenticación. Por favor, inicia sesión nuevamente."
      });
      setIsLoading(false);
      return;
    }
    try {
      const workshopId = cartItems[0]?.id;
      if (!workshopId) {
        throw new Error("No workshop selected");
      }
      const existingReservationId = checkExistingReservation();
      if (existingReservationId) {
        console.log("Usando reserva existente con ID:", existingReservationId);
        setReservationId(existingReservationId);
        await processPayment(existingReservationId);
        return;
      }
      console.log("Enviando solicitud de reserva con workshop_ids:", [workshopId]);
      const reservationResponse = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({
          workshop_ids: [workshopId]
        })
      });
      if (!reservationResponse.ok) {
        const errorData = await reservationResponse.json();
        console.error("Error de respuesta:", errorData);
        throw new Error(`Error al crear la reserva: ${errorData.error || "Error desconocido"}`);
      }
      const reservationData = await reservationResponse.json();
      console.log("Respuesta de reserva:", reservationData);
      let createdReservationId;
      if (reservationData.reservations && reservationData.reservations.length > 0) {
        createdReservationId = reservationData.reservations[0].id;
      } else if (reservationData.reservation) {
        createdReservationId = reservationData.reservation.id;
      } else {
        throw new Error("No se pudo obtener el ID de reserva de la respuesta");
      }
      setReservationId(createdReservationId);
      await processPayment(createdReservationId);
    } catch (error) {
      console.error("Error en el proceso de reserva:", error);
      setErrors({
        ...errors,
        payment: `Error: ${error.message}`
      });
      setIsLoading(false);
    }
  };
  const processPaymentOnly = async () => {
    setIsLoading(true);
    setPaymentError(null);
    try {
      await processPayment(reservationId);
    } catch (error) {
      console.error("Error al procesar el pago:", error);
      setErrors({
        ...errors,
        payment: `Error: ${error.message}`
      });
      setIsLoading(false);
    }
  };
  const processPayment = async (reservationId2) => {
    try {
      const card = formData.cardNumber.replace(/\s/g, "");
      const cvc = formData.cvv;
      const expiryParts = formData.expiryDate.split("/");
      const expiryMonth = expiryParts[0];
      const expiryYear = expiryParts.length > 1 ? `20${expiryParts[1]}` : "";
      console.log("Procesando pago para reserva:", reservationId2);
      const paymentResponse = await fetch("https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/payments/verify-card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({
          card_number: card,
          exp_month: expiryMonth,
          exp_year: expiryYear,
          cvc,
          reservation_ids: [reservationId2]
        })
      });
      const paymentData = await paymentResponse.json();
      console.log("Respuesta de pago:", paymentData);
      if (!paymentResponse.ok || paymentData.is_valid === false) {
        setPaymentError(paymentData.message || "Error al procesar el pago");
        throw new Error(paymentData.error || "Error al procesar el pago");
      }
      setPaymentStatus(paymentData.status || "Procesado");
      clearCart();
      setStep(3);
    } catch (error) {
      console.error("Error en el proceso de pago:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  const formatCreditCard = (cardNumber) => {
    if (!cardNumber) return "";
    const last4 = cardNumber.replace(/\s/g, "").slice(-4);
    return `•••• •••• •••• ${last4}`;
  };
  const Decoration = () => {
    return /* @__PURE__ */ jsxs("div", { className: "absolute -z-10 inset-0 overflow-hidden opacity-70 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#D94F4F]/20 to-transparent blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-[60%] -right-[10%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-[#6B8E23]/20 to-transparent blur-3xl" })
    ] });
  };
  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Resumen de compra";
      case 2:
        return "Información de pago";
      case 3:
        return "Confirmación de compra";
      default:
        return "Checkout";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#FAFAFA] pt-16", children: [
    /* @__PURE__ */ jsx(Decoration, {}),
    /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 md:px-6 py-8 max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: step === 1 ? "/workshops" : "#",
            onClick: (e) => {
              if (step !== 1) {
                e.preventDefault();
                setStep(step - 1);
              }
            },
            className: "text-[#333333] hover:text-[#D94F4F] transition-colors flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(ChevronLeft, { size: 20 }),
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: step === 1 ? "Continuar comprando" : "Volver" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: `w-3 h-3 rounded-full ${step >= 1 ? "bg-[#D94F4F]" : "bg-[#E5E5E5]"}` }),
          /* @__PURE__ */ jsx("span", { className: `w-3 h-3 rounded-full ${step >= 2 ? "bg-[#D94F4F]" : "bg-[#E5E5E5]"}` }),
          /* @__PURE__ */ jsx("span", { className: `w-3 h-3 rounded-full ${step >= 3 ? "bg-[#D94F4F]" : "bg-[#E5E5E5]"}` })
        ] })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-[#333333] mb-8", children: getStepTitle() }),
      step === 1 && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white  border border-[#E5E5E5] p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium text-[#333333] mb-4", children: "Talleres seleccionados" }),
            cartItems.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-8", children: [
              /* @__PURE__ */ jsx(ShoppingBag, { className: "w-12 h-12 mx-auto text-[#E5E5E5] mb-4" }),
              /* @__PURE__ */ jsx("p", { className: "text-[#666666]", children: "No hay talleres en tu carrito" }),
              /* @__PURE__ */ jsx("a", { href: "/workshops", className: "mt-4 inline-block text-[#D94F4F] hover:underline", children: "Explorar talleres disponibles" })
            ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: cartItems.map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 py-4 border-b border-[#E5E5E5] last:border-b-0", children: [
              /* @__PURE__ */ jsx("div", { className: "h-24 w-24 bg-[#F5F5F5] overflow-hidden", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: item.imageUrl || "/api/placeholder/100/100",
                  alt: item.name,
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-medium text-[#333333]", children: item.name }),
                /* @__PURE__ */ jsxs("div", { className: "mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#666666]", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Calendar, { size: 14, className: "text-[#D94F4F]" }),
                    /* @__PURE__ */ jsx("span", { children: item.date })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-[#D94F4F]" }),
                    /* @__PURE__ */ jsx("span", { children: item.time })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxs("span", { className: "font-medium text-[#D94F4F]", children: [
                "GTQ ",
                parseFloat(item.price).toFixed(2)
              ] }) })
            ] }, item.id)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white  border border-[#E5E5E5] p-6", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium text-[#333333] mb-4", children: "Información de contacto" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-[#666666] mb-1", children: "Correo electrónico" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "email",
                    id: "email",
                    name: "email",
                    value: formData.email,
                    onChange: handleInputChange,
                    className: `w-full p-3 border ${errors.email ? "border-red-500" : "border-[#E5E5E5]"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D94F4F]/50`,
                    placeholder: "tu@email.com"
                  }
                ),
                errors.email && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.email })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-[#666666] mb-1", children: "Teléfono de contacto" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "tel",
                    id: "phone",
                    name: "phone",
                    value: formData.phone,
                    onChange: handleInputChange,
                    className: `w-full p-3 border ${errors.phone ? "border-red-500" : "border-[#E5E5E5]"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D94F4F]/50`,
                    placeholder: "(+502) 1234-5678"
                  }
                ),
                errors.phone && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.phone })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#E5E5E5] p-6 sticky top-24", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium text-[#333333] mb-4", children: "Resumen" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#666666]", children: "Subtotal" }),
              /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                "GTQ ",
                totalPrice.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#666666]", children: "Impuestos" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#666666]", children: "Incluidos" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border-t border-[#E5E5E5] my-2 pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-[#333333]", children: "Total" }),
              /* @__PURE__ */ jsxs("span", { className: "font-bold text-xl text-[#D94F4F]", children: [
                "GTQ ",
                totalPrice.toFixed(2)
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleNextStep,
                disabled: cartItems.length === 0,
                className: `w-full mt-6 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all ${cartItems.length === 0 ? "bg-[#E5E5E5] text-[#999999] cursor-not-allowed" : "bg-[#D94F4F] text-white hover:bg-[#c04545] shadow-md"}`,
                children: [
                  "Continuar al pago",
                  /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
                ]
              }
            ),
            (errors.email || errors.phone) && /* @__PURE__ */ jsx("div", { className: "mt-3 p-3 bg-red-50 text-red-600 rounded-lg text-sm", children: "Por favor completa todos los campos requeridos." }),
            errors.payment && /* @__PURE__ */ jsx("div", { className: "mt-3 p-3 bg-red-50 text-red-600 rounded-lg text-sm", children: errors.payment })
          ] })
        ] }) })
      ] }),
      step === 2 && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#E5E5E5] p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium text-[#333333] mb-4", children: "Método de pago" }),
          paymentError && /* @__PURE__ */ jsxs("div", { className: "mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(AlertCircle, { size: 20, className: "text-red-500 mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-red-700", children: "Error de pago" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600", children: paymentError })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mb-6", children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handlePaymentMethodChange("Débito"),
                className: `flex-1 min-w-[120px] p-3 rounded-lg border ${paymentMethod === "Débito" ? "border-[#D94F4F] bg-[#FFF3E2] text-[#D94F4F]" : "border-[#E5E5E5] text-[#666666]"} transition-all flex items-center justify-center gap-2`,
                children: [
                  /* @__PURE__ */ jsx(CreditCard, { size: 18 }),
                  /* @__PURE__ */ jsx("span", { children: "Débito" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handlePaymentMethodChange("Crédito"),
                className: `flex-1 min-w-[120px] p-3 rounded-lg border ${paymentMethod === "Crédito" ? "border-[#D94F4F] bg-[#FFF3E2] text-[#D94F4F]" : "border-[#E5E5E5] text-[#666666]"} transition-all flex items-center justify-center gap-2`,
                children: [
                  /* @__PURE__ */ jsx(CreditCard, { size: 18 }),
                  /* @__PURE__ */ jsx("span", { children: "Crédito" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "cardHolder", className: "block text-sm font-medium text-[#666666] mb-1", children: "Nombre del titular" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "cardHolder",
                  name: "cardHolder",
                  value: formData.cardHolder,
                  onChange: handleInputChange,
                  className: `w-full p-3 border ${errors.cardHolder ? "border-red-500" : "border-[#E5E5E5]"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D94F4F]/50`,
                  placeholder: "Nombre como aparece en la tarjeta"
                }
              ),
              errors.cardHolder && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.cardHolder })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "cardNumber", className: "block text-sm font-medium text-[#666666] mb-1", children: "Número de tarjeta" }),
              /* @__PURE__ */ jsxs("div", { className: `flex items-center w-full p-3 border ${errors.cardNumber ? "border-red-500" : "border-[#E5E5E5]"} rounded-lg focus-within:ring-2 focus-within:ring-[#D94F4F]/50`, children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "cardNumber",
                    name: "cardNumber",
                    value: formData.cardNumber,
                    onChange: handleInputChange,
                    className: "flex-1 focus:outline-none",
                    placeholder: "1234 5678 9012 3456",
                    maxLength: "19"
                  }
                ),
                /* @__PURE__ */ jsx(CreditCard, { size: 18, className: "text-[#666666]" })
              ] }),
              errors.cardNumber && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.cardNumber })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "expiryDate", className: "block text-sm font-medium text-[#666666] mb-1", children: "Fecha de expiración" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "expiryDate",
                    name: "expiryDate",
                    value: formData.expiryDate,
                    onChange: handleInputChange,
                    className: `w-full p-3 border ${errors.expiryDate ? "border-red-500" : "border-[#E5E5E5]"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D94F4F]/50`,
                    placeholder: "MM/YY",
                    maxLength: "5"
                  }
                ),
                errors.expiryDate && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.expiryDate })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "cvv", className: "block text-sm font-medium text-[#666666] mb-1", children: "CVV/CVC" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    id: "cvv",
                    name: "cvv",
                    value: formData.cvv,
                    onChange: handleInputChange,
                    className: `w-full p-3 border ${errors.cvv ? "border-red-500" : "border-[#E5E5E5]"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D94F4F]/50`,
                    placeholder: "123",
                    maxLength: "4"
                  }
                ),
                errors.cvv && /* @__PURE__ */ jsx("p", { className: "text-red-500 text-xs mt-1", children: errors.cvv })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-[#E5E5E5] p-6 sticky top-24", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-medium text-[#333333] mb-4", children: "Resumen" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            cartItems.length > 0 && /* @__PURE__ */ jsxs("div", { className: "text-sm text-[#666666]", children: [
              /* @__PURE__ */ jsxs("p", { children: [
                cartItems.length,
                " ",
                cartItems.length === 1 ? "taller" : "talleres",
                " seleccionados"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "font-medium text-[#333333] line-clamp-1 mt-1", children: [
                cartItems[0]?.name,
                cartItems.length > 1 && ` y ${cartItems.length - 1} más`
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#666666]", children: "Subtotal" }),
              /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                "GTQ ",
                totalPrice.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#666666]", children: "Impuestos" }),
              /* @__PURE__ */ jsx("span", { className: "text-[#666666]", children: "Incluidos" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border-t border-[#E5E5E5] my-2 pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-[#333333]", children: "Total" }),
              /* @__PURE__ */ jsxs("span", { className: "font-bold text-xl text-[#D94F4F]", children: [
                "GTQ ",
                totalPrice.toFixed(2)
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-xs text-[#666666] gap-2 py-2", children: [
              /* @__PURE__ */ jsx(Lock, { size: 14 }),
              /* @__PURE__ */ jsx("span", { children: "Pago seguro. Tus datos están protegidos." })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleNextStep,
                disabled: isLoading,
                className: `w-full mt-4 py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-all ${isLoading ? "bg-[#E5E5E5] text-[#999999] cursor-not-allowed" : "bg-[#D94F4F] text-white hover:bg-[#c04545] shadow-md"}`,
                children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-t-white border-white/30 rounded-full animate-spin" }),
                  /* @__PURE__ */ jsx("span", { children: "Procesando..." })
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { children: "Realizar pago" }),
                  /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
                ] })
              }
            ),
            errors.payment && /* @__PURE__ */ jsx("div", { className: "mt-3 p-3 bg-red-50 text-red-600 rounded-lg text-sm", children: errors.payment })
          ] })
        ] }) })
      ] }),
      step === 3 && /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm border border-[#E5E5E5] p-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-[#6B8E23]/20 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Check, { size: 40, className: "text-[#6B8E23]" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#333333] mb-2", children: "¡Pago completado con éxito!" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#666666] mb-6", children: "Tu reservación para el taller ha sido confirmada. Hemos enviado los detalles a tu correo electrónico." }),
        /* @__PURE__ */ jsx("div", { className: "bg-[#F5F5F5] rounded-lg p-6 mb-8", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 text-left", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[#666666]", children: "Número de reservación:" }),
            /* @__PURE__ */ jsxs("p", { className: "font-medium text-[#333333]", children: [
              "#",
              reservationId
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[#666666]", children: "Estado:" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium text-[#333333]", children: "Confirmada" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[#666666]", children: "Fecha:" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium text-[#333333]", children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[#666666]", children: "Método de pago:" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium text-[#333333]", children: paymentMethod })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[#666666]", children: "Número de tarjeta:" }),
            /* @__PURE__ */ jsx("p", { className: "font-medium text-[#333333]", children: formatCreditCard(formData.cardNumber) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/",
              className: "px-6 py-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg text-[#333333] hover:bg-[#F5F5F5] transition-colors",
              children: "Volver al inicio"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "/workshops",
              className: "px-6 py-3 bg-[#D94F4F] text-white rounded-lg hover:bg-[#c04545] transition-colors",
              children: "Explorar más talleres"
            }
          )
        ] })
      ] }) })
    ] })
  ] });
}

const $$Checkout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "projectId": "440938cc-c1e6-42e0-baa5-ae8afd7ea5d7" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CheckoutC", CheckoutC, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Daniel/MasterCook/src/components/checkoutC", "client:component-export": "default" })} ` })}`;
}, "D:/Daniel/MasterCook/src/pages/checkout.astro", void 0);

const $$file = "D:/Daniel/MasterCook/src/pages/checkout.astro";
const $$url = "/checkout";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Checkout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
