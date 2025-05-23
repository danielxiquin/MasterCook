import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contactc() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío de formulario
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="bg-light-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-main-text mb-6">
              Contacto
            </h1>
            <div className="w-24 h-px bg-gray-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-secondary-text max-w-2xl mx-auto leading-relaxed">
              ¿Tienes preguntas sobre nuestros talleres? ¿Quieres más información? 
              Estamos aquí para ayudarte en tu aventura culinaria.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-light-background border border-gray-300 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-main-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {item.info}
                  </p>
                  <p className="text-sm text-secondary-text">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12">
            Envíanos un Mensaje
          </h2>
          
          <div className="bg-white border border-gray-300 rounded-xl p-6 md:p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-medium text-main-text mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-secondary-text">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <div onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium text-main-text mb-2">
                      Nombre Completo *
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <div className="block text-sm font-medium text-main-text mb-2">
                      Email *
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="block text-sm font-medium text-main-text mb-2">
                      Teléfono
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <div className="block text-sm font-medium text-main-text mb-2">
                      Asunto *
                    </div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Selecciona un tema</option>
                      <option value="talleres">Información sobre Talleres</option>
                      <option value="inscripcion">Proceso de Inscripción</option>
                      <option value="privados">Talleres Privados</option>
                      <option value="certificacion">Certificaciones</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <div className="block text-sm font-medium text-main-text mb-2">
                    Mensaje *
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12">
            Preguntas Frecuentes
          </h2>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-300 rounded-xl overflow-hidden">
                <div className="p-6 bg-light-background">
                  <h3 className="text-lg md:text-xl font-medium text-main-text mb-3">
                    {item.question}
                  </h3>
                  <p className="text-base text-secondary-text leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12">
            Visítanos
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-medium text-main-text">
                Nuestras Instalaciones
              </h3>
              <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                Ubicados en el corazón de la zona gastronómica de la ciudad, nuestras 
                instalaciones cuentan con cocinas completamente equipadas, tecnología 
                de última generación y un ambiente diseñado para inspirar creatividad culinaria.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-main-text">Dirección</p>
                    <p className="text-secondary-text">123 Culinary Street, Gourmet City, GC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-main-text">Horarios de Visita</p>
                    <p className="text-secondary-text">Lun - Vie: 9:00 AM - 8:00 PM</p>
                    <p className="text-secondary-text">Sáb: 10:00 AM - 6:00 PM</p>
                    <p className="text-secondary-text">Dom: Cerrado</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                >
                  Ver en Google Maps
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-xl h-64 md:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="font-medium">Mapa Interactivo</p>
                <p className="text-sm">123 Culinary Street</p>
                <p className="text-sm">Gourmet City</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}