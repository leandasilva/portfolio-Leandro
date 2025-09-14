export default function CgpCorrientesLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
          Contaduría General de la Provincia de Corrientes
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Participé en el desarrollo fullstack del sitio utilizando Angular, Angular Material,  Node.js, Express y PL/SQL.
          Implementé diseño responsivo con TailwindCSS, autenticación segura y gestión de sesiones.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://www.cgpcorrientes.gob.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Ver Proyecto
          </a>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-8">Vista previa del sitio</h2>
        <iframe
          src="https://www.cgpcorrientes.gob.ar/"
          className="w-full h-[500px] border-0"
          title="Contaduría Corrientes Preview"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Características principales</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Portal de Expedientes</h3>
            <p className="text-gray-400">
              Permite consultar el estado de un trámite administrativo vinculado a los gastos de la provincia.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Certificados Digitales</h3>
            <p className="text-gray-400">
              Incluye la descarga del certificado de firmas digitales, que permite firmar documentos con validez legal.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Seguridad y Escalabilidad</h3>
            <p className="text-gray-400">
              Autenticación segura, gestión de sesiones y arquitectura lista para crecer con nuevas funcionalidades.
            </p>
          </div>
        </div>
      </section>

      {/* Tecnologías utilizadas */}
    {/* Buenas prácticas con Angular */}
      {/* Buenas prácticas con Angular */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Buenas prácticas con Angular</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Uso de Angular CLI para escalabilidad",
            "RxJS y Observables para manejo de datos reactivos",
            "Lazy Loading de módulos para mejorar performance",
            "Formularios reactivos con validaciones dinámicas",
            "Guards e Interceptors para seguridad y API",
            "Testing unitario con Jasmine/Karma y Jest"
          ].map((practice) => (
            <div key={practice} className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-300 font-medium">{practice}</p>
            </div>
          ))}
        </div>
      </section>



      {/* About / Valor Agregado */}
      <section className="py-20 px-6 bg-gray-50 text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">Sobre el Proyecto</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          Participé en el desarrollo completo del sitio, integrando el frontend en Angular
          con el backend en Node.js/Express y PL/SQL. Implementé funcionalidades críticas como
          gestión de usuarios, reportes financieros y autenticación segura, asegurando rendimiento
          y alta disponibilidad. El sistema sigue en mantenimiento, ampliando módulos y garantizando
          la estabilidad del portal de expedientes y certificados digitales.
        </p>
      </section>

      {/* Metodología y trabajo en equipo */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Metodología y Trabajo en Equipo</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300">
          El desarrollo se realizó en equipo utilizando metodologías ágiles como 
          <span className="font-semibold"> Kanban</span> y <span className="font-semibold"> Scrum</span>, 
          fomentando la colaboración, la priorización de tareas y la entrega continua de valor.
          Se implementaron herramientas como <span className="font-semibold">Jira</span> para la gestión de proyectos 
          y <span className="font-semibold">Confluence</span> para la documentación técnica y funcional del sistema.
        </p>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Explorá el portal de la Contaduría</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.cgpcorrientes.gob.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
          >
            🚀 Ver Proyecto
          </a>
        </div>
      </section>

    </div>
  );
}
