export default function ProyectoCivilMockup() {
  const services = [
    {
      title: "Estudios y proyectos de infraestructura",
      text: "Planeación, topografía, cartografía, geotecnia, hidráulica, diseño estructural y desarrollo integral de proyectos civiles.",
    },
    {
      title: "Supervisión y control de obra",
      text: "Seguimiento técnico, control topográfico, aseguramiento de calidad, revisión de proyectos y supervisión en sitio.",
    },
    {
      title: "Pavimentos y seguridad vial",
      text: "Auscultación, evaluación, inventario de activos, conservación carretera y programas de seguridad vial con enfoque técnico.",
    },
    {
      title: "Equipos, mantenimiento y servicios",
      text: "Venta, renta, mantenimiento especializado y soporte para equipos dirigidos al sector de ingeniería civil.",
    },
  ];

  const metrics = [
    { value: "+20", label: "años de experiencia" },
    { value: "4", label: "áreas clave" },
    { value: "100%", label: "enfoque técnico" },
    { value: "MX", label: "cobertura nacional" },
  ];

  const process = [
    "Diagnóstico técnico del proyecto",
    "Planeación y propuesta de solución",
    "Ejecución, supervisión y control",
    "Seguimiento y aseguramiento de calidad",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">
              Proyecto Civil Integral
            </div>
            <div className="text-lg font-bold text-slate-900">Ingeniería civil con visión integral</div>
          </div>
          <nav className="hidden gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#servicios" className="transition hover:text-slate-950">Servicios</a>
            <a href="#proceso" className="transition hover:text-slate-950">Proceso</a>
            <a href="#alianzas" className="transition hover:text-slate-950">Alianzas</a>
            <a href="#contacto" className="transition hover:text-slate-950">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div>
            <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200">
              Infraestructura · pavimentos · seguridad vial · supervisión
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Soluciones técnicas para proyectos de infraestructura con una presentación mucho más sólida y actual.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Mockup conceptual para reemplazar la estética antigua del sitio actual por una propuesta visual más premium, clara y corporativa, sin perder el enfoque técnico de la empresa.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contacto" className="rounded-2xl bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5">
                Solicitar cotización
              </a>
              <a href="#servicios" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="grid gap-4 self-end rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Posicionamiento</div>
              <div className="mt-2 text-2xl font-semibold">Empresa consultora mexicana de ingeniería civil</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                El sitio actual sí comunica experiencia, pero no la presenta con el nivel visual que esperan clientes institucionales, industriales o de infraestructura.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                  <div className="text-3xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="servicios">
        <div className="mb-10 max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Servicios principales</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Menos ruido visual, más claridad comercial.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            En lugar de saturar la portada con demasiados bloques y subcategorías, la propuesta agrupa la oferta en cuatro áreas claras y fáciles de entender.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="text-sm font-semibold text-amber-600">0{index + 1}</div>
              <h3 className="mt-4 text-xl font-semibold leading-8 text-slate-950">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50" id="proceso">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Metodología</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              Una narrativa más seria para vender experiencia técnica.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              El sitio anterior mezcla bienvenida, servicios, noticias y accesos secundarios. Esta propuesta reorganiza todo para que el visitante entienda primero el valor de la empresa.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-950">{step}</div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Estructura pensada para dar orden, confianza y una lectura más ejecutiva del servicio.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="alianzas">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white md:px-12">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-400">Alianzas estratégicas</div>
          <div className="mt-3 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Las marcas y socios deben verse como prueba de solidez, no como relleno visual.</h2>
            </div>
            <p className="text-slate-300 leading-8">
              En una versión Astro real, esta sección puede mostrar logotipos, marcas distribuidas y una explicación breve del valor técnico de cada alianza.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Infraestructura", "Pavimentos", "Seguridad vial", "Equipos especializados"].map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-6 text-sm font-medium text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20" id="contacto">
        <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-600">Contacto</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Cierre limpio, claro y mucho más profesional.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              En lugar de un footer saturado con demasiados accesos, se propone un cierre más ejecutivo con datos de contacto, llamada a la acción y formulario corto.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-50 p-8">
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <div className="font-semibold text-slate-950">Teléfono</div>
                <div>(55) 5374 1714 / 1136</div>
              </div>
              <div>
                <div className="font-semibold text-slate-950">Correo</div>
                <div>contacto@proyectocivil.com</div>
              </div>
              <div>
                <div className="font-semibold text-slate-950">Objetivo del rediseño</div>
                <div>Modernizar la imagen sin volver complejo el proyecto ni inflar el presupuesto.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
