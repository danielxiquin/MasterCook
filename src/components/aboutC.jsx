export default function AboutUs() {
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

  return (
    <div className="bg-light-background">
      {/* Section Hero */}
      <section className="relative py-12 md:py-20 px-4 md:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start order-2 lg:order-1">
            <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-main-text mb-6">
              Sobre Nosotros
            </h1>
            <div className="w-full max-w-md lg:max-w-none">
              <div className="line h-px bg-gray-400 mb-6"></div>
              <p className="text-base md:text-lg lg:text-xl text-secondary-text text-center lg:text-left leading-relaxed">
                En MasterCook Academy creemos que cocinar es un arte que todos pueden dominar. 
                Desde 2019, hemos formado a más de 2000 estudiantes con técnicas profesionales 
                y pasión genuina por la gastronomía.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center order-1 lg:order-2">
            <img 
              src="https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibul0EGpfM5nEibusH69PMzehYFxCka0yLvVwto" 
              alt="MasterCook Academy equipo" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12">
            Nuestra Historia
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                Todo comenzó con un sueño: democratizar la alta cocina y hacer que técnicas 
                profesionales fueran accesibles para todos. Nuestros fundadores, chefs con 
                experiencia internacional, decidieron crear un espacio donde la pasión por 
                cocinar se combina con el aprendizaje práctico.
              </p>
              <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                Desde nuestros primeros talleres en una pequeña cocina, hasta convertirnos 
                en la academia culinaria de referencia, hemos mantenido nuestro compromiso 
                con la excelencia y la personalización en cada clase.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="https://hd51x5cptm.ufs.sh/f/lhdSxG5nEibuyl3MHoRAsabYELF97nAUxrDB0CiN83WOwfRJ" 
                alt="Primera cocina MasterCook" 
                className="w-full max-w-sm rounded-lg shadow-md" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12">
            Nuestros Logros
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 border border-gray-300 rounded-lg bg-white">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-sm md:text-base text-secondary-text">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-main-text text-center mb-8 md:mb-12">
            Nuestro Equipo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-light-background border border-gray-300 rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-medium text-main-text mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-secondary-text mb-3">
                    {member.experience}
                  </p>
                  <p className="text-sm md:text-base text-secondary-text leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 md:p-8 border border-gray-300 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-main-text">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                Formar cocineros apasionados a través de técnicas profesionales, 
                ingredientes de calidad y un ambiente de aprendizaje colaborativo 
                que inspire creatividad y excelencia culinaria.
              </p>
            </div>
            
            <div className="bg-white p-6 md:p-8 border border-gray-300 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center mr-4">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-main-text">
                  Nuestra Visión
                </h3>
              </div>
              <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                Ser la academia culinaria líder que transforme la manera de cocinar 
                de las personas, creando una comunidad global de amantes de la 
                gastronomía con conocimientos profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-main-text mb-6">
            ¿Listo para comenzar tu aventura culinaria?
          </h2>
          <p className="text-base md:text-lg text-secondary-text mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de más de 2000 estudiantes que ya han transformado 
            su forma de cocinar. Tu próximo nivel culinario te está esperando.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="/workshops" 
              className="group bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center"
            >
              Ver Nuestros Talleres
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/" 
              className="text-primary border border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}