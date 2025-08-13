/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_BIQpHMk-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DMUtaIJp.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { X, Search, Filter, ChevronUp, ChevronDown, Calendar, Clock, Tag, AlertTriangle } from 'lucide-react';
export { renderers } from '../renderers.mjs';

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
const Dashboard = () => {
  const [authToken, setAuthToken] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [workshops, setWorkshops] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cancelingReservation, setCancelingReservation] = useState(null);
  const [isCanceling, setIsCanceling] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  useEffect(() => {
    getAuthTokenFromCookies();
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (authToken) {
      verifyAuthToken();
    } else {
      setLoading(false);
    }
  }, [authToken]);
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage(null);
      }, 5e3);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);
  const getAuthTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    const authCookie = cookies.find((cookie) => cookie.trim().startsWith("auth_token="));
    if (authCookie) {
      const token = authCookie.trim().substring("auth_token=".length);
      setAuthToken(token);
    } else {
      console.log("No se encontró token de autenticación en cookies");
      setLoading(false);
    }
  };
  const updateReservationStatus = async (reservationId, newStatus, showFeedback = true) => {
    try {
      const response = await fetch(`https://booking-service.mangoflower-5e37f0a4.eastus.azurecontainerapps.io/api/reservations/${reservationId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (!response.ok) {
        throw new Error(`Error al actualizar la reserva: ${response.status}`);
      }
      setReservations(
        (prev) => prev.map(
          (res) => res.id === reservationId ? { ...res, status: newStatus } : res
        )
      );
      if (selectedReservation && selectedReservation.id === reservationId) {
        setSelectedReservation((prev) => ({ ...prev, status: newStatus }));
      }
      if (showFeedback) {
        const statusMessages = {
          "Cancelada": "Reserva cancelada exitosamente",
          "Confirmada": "Reserva confirmada exitosamente",
          "Completada": "Reserva marcada como completada"
        };
        setSuccessMessage(statusMessages[newStatus] || "Estado de reserva actualizado");
      }
      return true;
    } catch (err) {
      console.error("Error updating reservation status:", err);
      setError(`Error al ${"cancelar" } la reserva. Por favor, inténtalo de nuevo.`);
      return false;
    }
  };
  const cancelReservation = async () => {
    if (!cancelingReservation) return;
    setIsCanceling(true);
    const success = await updateReservationStatus(cancelingReservation.id, "Cancelada");
    setIsCanceling(false);
    if (success) {
      setCancelingReservation(null);
    }
  };
  const formatDate = (dateString) => {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", options);
  };
  const formatTime = (timeString) => {
    return timeString;
  };
  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch = reservation.workshop_name.toLowerCase().includes(searchTerm.toLowerCase()) || reservation.status.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || reservation.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });
  const viewReservationDetails = (reservation) => {
    setSelectedReservation(reservation);
  };
  const closeDetails = () => {
    setSelectedReservation(null);
  };
  const ConfirmCancelModal = ({ reservation }) => {
    if (!reservation) return null;
    return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-lg p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4 text-red-600", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { size: 24, className: "mr-2" }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", children: "¿Cancelar reserva?" })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mb-6", children: [
        "¿Estás seguro de que deseas cancelar tu reserva para ",
        /* @__PURE__ */ jsx("strong", { children: reservation.workshop_name }),
        " del ",
        formatDate(reservation.workshop_date),
        "? Esta acción no se puede deshacer."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setCancelingReservation(null),
            className: "px-4 py-2 text-gray-600 hover:text-gray-800",
            disabled: isCanceling,
            children: "Volver"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: cancelReservation,
            className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center",
            disabled: isCanceling,
            children: isCanceling ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("span", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }),
              "Cancelando..."
            ] }) : "Cancelar Reserva"
          }
        )
      ] })
    ] }) });
  };
  const ReservationDetails = ({ reservation }) => {
    if (!reservation) return null;
    const workshopImage = workshopImagesById[reservation.workshop_id] || "/api/placeholder/400/300";
    const today = /* @__PURE__ */ new Date();
    const workshopDate = new Date(reservation.workshop_date);
    const canCancel = workshopDate > today && reservation.status !== "Cancelada" && reservation.status !== "Completada";
    return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg border border-[#e0dfdf] w-full max-w-3xl overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-800", children: "Detalles de la Reserva" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: closeDetails,
            className: "text-gray-500 hover:text-gray-700",
            children: /* @__PURE__ */ jsx(X, { size: 24 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: workshopImage,
            alt: reservation.workshop_name,
            className: "w-full h-64 object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: reservation.workshop_name }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3 mt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "text-gray-500 mr-2", size: 16 }),
              /* @__PURE__ */ jsx("span", { children: formatDate(reservation.workshop_date) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Clock, { className: "text-gray-500 mr-2", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                formatTime(reservation.workshop_start_time),
                " - ",
                formatTime(reservation.workshop_end_time)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(Tag, { className: "text-gray-500 mr-2", size: 16 }),
              /* @__PURE__ */ jsxs("span", { children: [
                "Modalidad: ",
                reservation.workshop_modality
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxs("div", { className: `px-3 py-1 rounded-full text-sm font-medium mr-2 ${reservation.payment_status?.toLowerCase() === "pagado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`, children: [
                "Pago: ",
                reservation.payment_status || "Pendiente"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: `px-3 py-1 rounded-full text-sm font-medium ${reservation.status?.toLowerCase() === "confirmada" ? "bg-blue-100 text-blue-800" : reservation.status?.toLowerCase() === "cancelada" ? "bg-red-100 text-red-800" : reservation.status?.toLowerCase() === "completada" ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"}`, children: [
                "Estado: ",
                reservation.status || "Pendiente"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "Precio:" }),
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-accent-color", children: [
              "$",
              reservation.workshop_price
            ] })
          ] }),
          canCancel && /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                closeDetails();
                setCancelingReservation(reservation);
              },
              className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors",
              children: "Cancelar Reserva"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 border-t pt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
        "Reserva #",
        reservation.id,
        " • Creada el ",
        new Date(reservation.created_at).toLocaleDateString()
      ] }) })
    ] }) }) });
  };
  const statusOptions = [
    { value: "all", label: "Todos los estados" },
    { value: "confirmada", label: "Confirmada" },
    { value: "cancelada", label: "Cancelada" },
    { value: "completada", label: "Completada" }
  ];
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 border-4 border-primary-color border-t-transparent rounded-full animate-spin mx-auto" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-gray-600", children: "Cargando tus reservas..." })
    ] }) });
  }
  if (!isAuthenticated && !loading) {
    return /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 py-8 mt-20", children: /* @__PURE__ */ jsxs("div", { className: "text-center p-8 bg-secondary-color bg-opacity-20 rounded-lg", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-main-text-color mb-4", children: "Sesión no iniciada" }),
      /* @__PURE__ */ jsx("p", { className: "text-secondary-text-color mb-6", children: "Para ver tus reservas, por favor inicia sesión o crea una nueva cuenta." }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 items-center", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/login",
            className: "px-6 py-3 bg-primary-color text-white rounded-lg hover:bg-opacity-90 transition-colors",
            children: "Iniciar Sesión"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/signup",
            className: "px-6 py-3 bg-secondary-color text-main-text-color rounded-lg hover:bg-opacity-80 transition-colors",
            children: "Crear Cuenta"
          }
        )
      ] })
    ] }) });
  }
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 py-8 mt-20", children: /* @__PURE__ */ jsxs("div", { className: "text-center p-8 bg-red-50 rounded-lg", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-red-500 font-semibold text-lg", children: [
        "¡Ups! ",
        error
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-gray-600", children: "Por favor, intenta recargar la página." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            getAuthTokenFromCookies();
            setError(null);
          },
          className: "mt-4 px-4 py-2 bg-primary-color text-white rounded-lg hover:bg-opacity-90 transition-colors",
          children: "Reintentar"
        }
      )
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8 mt-20", children: [
    successMessage && /* @__PURE__ */ jsxs("div", { className: "mb-4 p-4 bg-green-100 text-green-800 rounded-lg flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("p", { children: successMessage }),
      /* @__PURE__ */ jsx("button", { onClick: () => setSuccessMessage(null), children: /* @__PURE__ */ jsx(X, { size: 20 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-main-text-color", children: "Mis Reservas" }),
      /* @__PURE__ */ jsx("p", { className: "text-secondary-text-color mt-2", children: "Gestiona tus talleres de cocina y revisa detalles importantes de tus clases." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1 w-full md:w-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Buscar por nombre o estado...",
            className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-2.5 text-gray-400", size: 18 })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsFilterMenuOpen(!isFilterMenuOpen),
            className: "flex items-center gap-2 px-4 py-2 bg-secondary-color text-main-text-color rounded-lg hover:bg-opacity-80 transition-colors",
            children: [
              /* @__PURE__ */ jsx(Filter, { size: 18 }),
              /* @__PURE__ */ jsx("span", { children: "Filtrar" }),
              isFilterMenuOpen ? /* @__PURE__ */ jsx(ChevronUp, { size: 18 }) : /* @__PURE__ */ jsx(ChevronDown, { size: 18 })
            ]
          }
        ),
        isFilterMenuOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg z-10 border", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-medium mb-3", children: "Estado de Reserva" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: statusOptions.map((option) => /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                id: `status-${option.value}`,
                name: "status",
                value: option.value,
                checked: statusFilter === option.value,
                onChange: () => {
                  setStatusFilter(option.value);
                  setIsFilterMenuOpen(false);
                },
                className: "w-4 h-4 text-primary-color focus:ring-primary-color"
              }
            ),
            /* @__PURE__ */ jsx("label", { htmlFor: `status-${option.value}`, className: "ml-2 text-sm text-gray-700", children: option.label })
          ] }, option.value)) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-4 text-secondary-text-color", children: [
      "Mostrando ",
      filteredReservations.length,
      " de ",
      reservations.length,
      " reservas"
    ] }),
    filteredReservations.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center p-8 bg-secondary-color bg-opacity-20 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-secondary-text-color", children: "No se encontraron reservas con los filtros aplicados." }) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredReservations.map((reservation) => {
      const workshopImage = workshopImagesById[reservation.workshop_id] || "/api/placeholder/400/300";
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white border border-[#e0dfdf] overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer",
          onClick: () => viewReservationDetails(reservation),
          children: [
            /* @__PURE__ */ jsx("div", { className: "h-48 overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: workshopImage,
                alt: reservation.workshop_name,
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-main-text-color mb-2 truncate", children: reservation.workshop_name }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-2", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "text-primary-color mr-2", size: 16 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-secondary-text-color", children: formatDate(reservation.workshop_date) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
                /* @__PURE__ */ jsx(Clock, { className: "text-primary-color mr-2", size: 16 }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm text-secondary-text-color", children: [
                  formatTime(reservation.workshop_start_time),
                  " - ",
                  formatTime(reservation.workshop_end_time)
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: `px-3 py-1 rounded-full text-xs font-medium ${reservation.payment_status?.toLowerCase() === "pagado" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`, children: reservation.payment_status || "Pendiente" }),
                /* @__PURE__ */ jsx("div", { className: `px-3 py-1 rounded-full text-xs font-medium ${reservation.status?.toLowerCase() === "confirmada" ? "bg-blue-100 text-blue-800" : reservation.status?.toLowerCase() === "cancelada" ? "bg-red-100 text-red-800" : reservation.status?.toLowerCase() === "completada" ? "bg-green-100 text-green-800" : "bg-purple-100 text-purple-800"}`, children: reservation.status || "Pendiente" })
              ] })
            ] })
          ]
        },
        reservation.id
      );
    }) }),
    selectedReservation && /* @__PURE__ */ jsx(ReservationDetails, { reservation: selectedReservation }),
    cancelingReservation && /* @__PURE__ */ jsx(ConfirmCancelModal, { reservation: cancelingReservation })
  ] });
};

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Dashboard", Dashboard, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/dashboard", "client:component-export": "default" })} ` })}`;
}, "D:/Daniel/MasterCook/src/pages/profile.astro", void 0);

const $$file = "D:/Daniel/MasterCook/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Profile,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
