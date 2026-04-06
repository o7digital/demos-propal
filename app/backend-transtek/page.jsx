"use client";

import {
  Activity,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  Clock3,
  FileBarChart2,
  FileText,
  Filter,
  Gauge,
  LockKeyhole,
  MapPinned,
  ScanLine,
  Search,
  Shield,
  ShieldAlert,
  Siren,
  UserCircle2,
  Users,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export default function TransteckBackendSecurityMockup() {
  const loginStats = [
    { label: "Usuarios conectados", value: "18" },
    { label: "Sesiones seguras MFA", value: "96%" },
    { label: "Reportes emitidos", value: "128" },
  ];

  const overviewCards = [
    {
      label: "KPI Global",
      value: "88/100",
      delta: "+4.2%",
      tone: "from-emerald-500/20 to-emerald-400/5 border-emerald-400/20",
      icon: Gauge,
    },
    {
      label: "Alertas activas",
      value: "07",
      delta: "2 críticas",
      tone: "from-red-500/20 to-red-400/5 border-red-400/20",
      icon: Siren,
    },
    {
      label: "Incidentes hoy",
      value: "14",
      delta: "+2 vs ayer",
      tone: "from-amber-500/20 to-amber-400/5 border-amber-400/20",
      icon: CircleAlert,
    },
    {
      label: "Rondines",
      value: "92%",
      delta: "+3 pts",
      tone: "from-sky-500/20 to-sky-400/5 border-sky-400/20",
      icon: Shield,
    },
  ];

  const trendData = [
    { name: "00h", incidentes: 4, accesos: 22 },
    { name: "04h", incidentes: 3, accesos: 18 },
    { name: "08h", incidentes: 7, accesos: 32 },
    { name: "12h", incidentes: 5, accesos: 28 },
    { name: "16h", incidentes: 9, accesos: 36 },
    { name: "20h", incidentes: 6, accesos: 30 },
  ];

  const sites = [
    {
      name: "CAYAC",
      subtitle: "Instalación operativa",
      risk: "Zona crítica nivel 1",
      status: "Rojo controlado",
      statusTone: "bg-red-500/15 text-red-300 border-red-400/20",
      metrics: ["Laboratorios", "Almacén", "Trámites / Ventanilla", "CCTV + Sensores 24/7"],
    },
    {
      name: "Oklahoma",
      subtitle: "Sede administrativa",
      risk: "Riesgo medio",
      status: "Ámbar",
      statusTone: "bg-amber-500/15 text-amber-300 border-amber-400/20",
      metrics: ["Recepción / Visitantes", "Finanzas / RH", "Servidores / TI", "Control perimetral"],
    },
  ];

  const kpis = [
    { title: "MTTD", value: "04:32", subtitle: "Tiempo de detección" },
    { title: "MTTR", value: "09:18", subtitle: "Tiempo de respuesta" },
    { title: "% Rondines", value: "92%", subtitle: "Completados / programados" },
    { title: "Accesos", value: "1,284", subtitle: "Autorizados vs anomalías" },
  ];

  const activity = [
    {
      title: "Acceso no autorizado detectado",
      location: "CAYAC · Laboratorios",
      time: "Hace 4 min",
      severity: "Crítico",
      tone: "bg-red-500/15 text-red-300 border-red-400/20",
    },
    {
      title: "Rondín completado fuera de ruta",
      location: "Oklahoma · Planta baja",
      time: "Hace 11 min",
      severity: "Medio",
      tone: "bg-amber-500/15 text-amber-300 border-amber-400/20",
    },
    {
      title: "Sensor perimetral restablecido",
      location: "Oklahoma · Norte",
      time: "Hace 18 min",
      severity: "Bajo",
      tone: "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
    },
    {
      title: "Revisión manual de almacén",
      location: "CAYAC · Almacén",
      time: "Hace 26 min",
      severity: "Alto",
      tone: "bg-orange-500/15 text-orange-300 border-orange-400/20",
    },
  ];

  const workflow = [
    { step: "01", title: "Captura", text: "Registro por turno de accesos, rondines, novedades y alertas." },
    { step: "02", title: "Clasificación", text: "Tipificación por categoría y criticidad para evitar ruido operativo." },
    { step: "03", title: "Análisis", text: "Cruce entre sedes para detectar patrones, tendencias y fallas." },
    { step: "04", title: "Dashboard", text: "Vista ejecutiva con KPIs, semáforo y eventos priorizados." },
    { step: "05", title: "Decisión", text: "Acción correctiva, escalamiento y reporte a dirección." },
  ];

  const evaluation = [
    { label: "Diario", text: "Bitácora de turno, alertas activas y cobertura de rondines CUSAEM." },
    { label: "Semanal", text: "Reporte comparativo CAYAC / Oklahoma con desviaciones KPI." },
    { label: "Mensual", text: "Dashboard ejecutivo con tendencias y acciones correctivas." },
    { label: "Trimestral", text: "Informe estratégico para Dirección General y Consejo." },
  ];

  const incidentBreakdown = [
    { name: "Crítico", value: 4, color: "#ef4444" },
    { name: "Alto", value: 6, color: "#f97316" },
    { name: "Medio", value: 9, color: "#f59e0b" },
    { name: "Bajo", value: 5, color: "#22c55e" },
  ];

  const guardShiftData = [
    { name: "CAYAC", guardias: 12 },
    { name: "Oklahoma", guardias: 8 },
    { name: "Móvil", guardias: 4 },
    { name: "Backup", guardias: 3 },
  ];

  const reports = [
    { title: "Reporte ejecutivo semanal", type: "PDF", status: "Generado", time: "Hace 12 min" },
    { title: "Bitácora consolidada de turno", type: "PDF", status: "Listo", time: "Hace 28 min" },
    { title: "Incidentes críticos trimestrales", type: "XLS", status: "En revisión", time: "Hace 1 h" },
  ];

  const guardias = [
    { name: "Carlos Mendoza", post: "CAYAC · Laboratorios", shift: "Nocturno", state: "En ruta" },
    { name: "Ana Lucía Torres", post: "Oklahoma · Recepción", shift: "Mixto", state: "Activo" },
    { name: "Javier Santos", post: "CAYAC · Almacén", shift: "Nocturno", state: "Incidencia" },
    { name: "Mónica Pérez", post: "Oklahoma · TI", shift: "Diurno", state: "Activo" },
  ];

  const stateTone = {
    "En ruta": "bg-sky-500/15 text-sky-300 border-sky-400/20",
    Activo: "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
    Incidencia: "bg-red-500/15 text-red-300 border-red-400/20",
  };

  const reportTone = {
    Generado: "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
    Listo: "bg-cyan-500/15 text-cyan-300 border-cyan-400/20",
    "En revisión": "bg-amber-500/15 text-amber-300 border-amber-400/20",
  };

  return (
    <div className="min-h-screen bg-[#050c18] text-white">
      <div className="grid min-h-screen xl:grid-cols-[380px_1fr]">
        <aside className="relative hidden overflow-hidden border-r border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_32%),linear-gradient(180deg,#08101c_0%,#050c18_100%)] xl:block">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_35%,transparent_60%,rgba(255,255,255,0.02))]" />
          <div className="relative flex h-full flex-col justify-between p-10">
            <div>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                  <ShieldAlert className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Transteck</div>
                  <div className="text-lg font-semibold">Security Command Suite</div>
                </div>
              </div>

              <div className="mt-12 max-w-sm">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-slate-300">
                  Version 3 · Enterprise
                </div>
                <h1 className="mt-6 text-4xl font-bold leading-tight">
                  Plataforma de mando, monitoreo y respuesta operativa.
                </h1>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  Demo premium con acceso seguro, monitoreo en vivo, control de guardias,
                  detalle de incidentes y módulo de reportes ejecutivos.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
                {loginStats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <div className="text-sm text-slate-400">{item.label}</div>
                    <div className="mt-2 text-3xl font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold">Acceso protegido</div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                MFA, bitácora de sesiones, perfiles por rol y acceso segmentado para coordinación,
                dirección y supervisión operativa.
              </p>
              <div className="mt-5 flex items-center gap-3 text-sm text-cyan-300">
                <LockKeyhole className="h-4 w-4" />
                Seguridad reforzada activa
              </div>
            </div>
          </div>
        </aside>

        <div className="min-h-screen overflow-y-auto">
          <div className="border-b border-white/10 bg-[#07111f]/90 px-4 py-4 backdrop-blur md:px-8 xl:hidden">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm text-slate-400">Transteck</div>
                <div className="font-semibold">Security Command Suite</div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
            <div className="space-y-6">
              <section className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Login seguro</div>
                      <h2 className="mt-3 text-2xl font-bold md:text-3xl">Acceso al centro de mando</h2>
                      <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                        Ingreso para coordinador, dirección y supervisión con verificación reforzada.
                      </p>
                    </div>
                    <div className="hidden rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-4 md:block">
                      <LockKeyhole className="h-6 w-6 text-cyan-300" />
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-[#0a1526] px-4 py-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Usuario</div>
                      <div className="mt-2 text-sm text-slate-200">coordinacion@transteck-secure.mx</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#0a1526] px-4 py-4">
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Contraseña</div>
                      <div className="mt-2 text-sm text-slate-200">••••••••••••••••</div>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-xs uppercase tracking-[0.2em] text-emerald-300">MFA</div>
                          <div className="mt-2 text-sm text-emerald-200">Código dinámico validado</div>
                        </div>
                        <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
                      Ingresar al dashboard
                    </button>
                    <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200">
                      Recuperar acceso
                    </button>
                  </div>
                </div>

                <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur md:p-6">
                  <div className="flex items-center justify-between gap-4 pb-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Monitor en vivo</div>
                      <h2 className="mt-3 text-2xl font-bold md:text-3xl">Panel operativo premium</h2>
                    </div>
                    <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
                      2 críticas activas
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl border border-white/10 bg-[#0a1526] p-5 md:col-span-2">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm text-slate-400">Vista principal</div>
                          <div className="mt-1 text-xl font-semibold">Monitoreo general de sedes</div>
                        </div>
                        <Activity className="h-5 w-5 text-cyan-300" />
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-red-300">CAYAC</div>
                          <div className="mt-2 text-2xl font-bold">Rojo controlado</div>
                          <div className="mt-2 text-sm text-red-200">Laboratorios / almacén</div>
                        </div>
                        <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-amber-300">Oklahoma</div>
                          <div className="mt-2 text-2xl font-bold">Ámbar</div>
                          <div className="mt-2 text-sm text-amber-200">Recepción / TI</div>
                        </div>
                        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-emerald-300">Rondines</div>
                          <div className="mt-2 text-2xl font-bold">92%</div>
                          <div className="mt-2 text-sm text-emerald-200">Cobertura programada</div>
                        </div>
                        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
                          <div className="text-xs uppercase tracking-[0.2em] text-cyan-300">CCTV</div>
                          <div className="mt-2 text-2xl font-bold">36</div>
                          <div className="mt-2 text-sm text-cyan-200">Cámaras operativas</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-[#0a1526] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-slate-400">Detalle incidente</div>
                          <div className="mt-1 text-lg font-semibold">Acceso no autorizado</div>
                        </div>
                        <ScanLine className="h-5 w-5 text-red-300" />
                      </div>
                      <div className="mt-5 space-y-3 text-sm text-slate-300">
                        <div className="rounded-2xl bg-white/5 p-3">Ubicación: CAYAC · Laboratorios</div>
                        <div className="rounded-2xl bg-white/5 p-3">Hora: 07:42 · Prioridad: Crítica</div>
                        <div className="rounded-2xl bg-white/5 p-3">Acción: bloqueo de acceso + aviso a coordinación</div>
                      </div>
                      <button className="mt-5 w-full rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300">
                        Abrir ficha completa
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <header className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur md:p-6">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-cyan-300">
                      Centro de mando
                    </div>
                    <h1 className="mt-4 text-3xl font-bold md:text-4xl">
                      Dashboard ejecutivo de seguridad integral
                    </h1>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                      Versión 3 orientada a backend enterprise con acceso seguro, monitoreo en vivo,
                      control operativo, análisis, reportes y exportación ejecutiva.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0a1526] px-4 py-3 text-sm text-slate-300">
                      <Search className="h-4 w-4" />
                      Buscar evento, área o turno
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-[#0a1526] px-4 py-3 text-sm text-slate-300">
                      <Filter className="h-4 w-4" />
                      Hoy
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div className="relative rounded-2xl border border-white/10 bg-[#0a1526] p-3">
                      <Bell className="h-5 w-5 text-slate-300" />
                      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-400" />
                    </div>
                  </div>
                </div>
              </header>

              <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {overviewCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.label}
                      className={`rounded-[28px] border bg-gradient-to-br p-5 shadow-xl backdrop-blur ${card.tone}`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-sm text-slate-300">{card.label}</div>
                          <div className="mt-3 text-4xl font-bold">{card.value}</div>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-slate-300">{card.delta}</div>
                    </div>
                  );
                })}
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold md:text-2xl">Actividad operativa</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Tendencia de incidentes y accesos monitoreados en tiempo real.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                      En línea
                    </div>
                  </div>

                  <div className="mt-6 h-80 rounded-[24px] border border-white/10 bg-[#091322] p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={trendData}>
                        <defs>
                          <linearGradient id="incidentesFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.45} />
                            <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.04} />
                          </linearGradient>
                          <linearGradient id="accesosFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.28} />
                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0.03} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                        <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                        <Tooltip
                          contentStyle={{
                            background: "#0f172a",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 16,
                            color: "white",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="incidentes"
                          stroke="#38bdf8"
                          fill="url(#incidentesFill)"
                          strokeWidth={3}
                        />
                        <Area
                          type="monotone"
                          dataKey="accesos"
                          stroke="#22c55e"
                          fill="url(#accesosFill)"
                          strokeWidth={3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold md:text-2xl">KPIs clave</h2>
                      <p className="mt-1 text-sm text-slate-400">Indicadores priorizados del sistema.</p>
                    </div>
                    <Clock3 className="h-5 w-5 text-slate-400" />
                  </div>

                  <div className="mt-5 space-y-3">
                    {kpis.map((kpi) => (
                      <div
                        key={kpi.title}
                        className="rounded-2xl border border-white/10 bg-[#0a1526] px-4 py-4"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <div className="text-sm text-slate-400">{kpi.title}</div>
                            <div className="mt-1 text-2xl font-bold">{kpi.value}</div>
                          </div>
                          <div className="text-xs text-slate-500">Live</div>
                        </div>
                        <p className="mt-2 text-sm text-slate-400">{kpi.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl md:p-6">
                  <h2 className="text-xl font-semibold md:text-2xl">Instalaciones</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Perfiles distintos de riesgo con un solo punto de mando.
                  </p>

                  <div className="mt-5 space-y-4">
                    {sites.map((site) => (
                      <div key={site.name} className="rounded-3xl border border-white/10 bg-[#0a1526] p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <MapPinned className="h-4 w-4 text-cyan-300" />
                              <h3 className="text-lg font-semibold">{site.name}</h3>
                            </div>
                            <p className="mt-1 text-sm text-slate-400">{site.subtitle}</p>
                          </div>
                          <span className={`rounded-full border px-3 py-1 text-xs ${site.statusTone}`}>
                            {site.status}
                          </span>
                        </div>
                        <div className="mt-4 rounded-2xl bg-white/5 px-4 py-3 text-sm text-slate-300">
                          {site.risk}
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
                          {site.metrics.map((item) => (
                            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold md:text-2xl">Feed de eventos</h2>
                      <p className="mt-1 text-sm text-slate-400">
                        Eventos clasificados por criticidad para acción inmediata.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#0a1526] px-4 py-2 text-sm text-slate-300">
                      24 registros
                    </div>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-[#0a1526] text-slate-400">
                        <tr>
                          <th className="px-4 py-4 font-medium">Evento</th>
                          <th className="px-4 py-4 font-medium">Ubicación</th>
                          <th className="px-4 py-4 font-medium">Severidad</th>
                          <th className="px-4 py-4 font-medium">Tiempo</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activity.map((item) => (
                          <tr key={item.title} className="border-t border-white/10 bg-white/5">
                            <td className="px-4 py-4 font-medium text-white">{item.title}</td>
                            <td className="px-4 py-4 text-slate-300">{item.location}</td>
                            <td className="px-4 py-4">
                              <span className={`rounded-full border px-3 py-1 text-xs ${item.tone}`}>
                                {item.severity}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-slate-400">{item.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl md:p-6">
                  <h2 className="text-xl font-semibold md:text-2xl">Workflow operativo</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Flujo de trabajo desde captura hasta decisión ejecutiva.
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                    {workflow.map((item) => (
                      <div key={item.step} className="rounded-3xl border border-white/10 bg-[#0a1526] p-4">
                        <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">{item.step}</div>
                        <div className="mt-3 text-lg font-semibold">{item.title}</div>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl md:p-6">
                  <h2 className="text-xl font-semibold md:text-2xl">Evaluación periódica</h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Ciclos definidos para escalar información y corregir desviaciones.
                  </p>

                  <div className="mt-6 space-y-4">
                    {evaluation.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-4 rounded-3xl border border-white/10 bg-[#0a1526] p-4"
                      >
                        <div className="min-w-24 rounded-2xl bg-cyan-500/15 px-4 py-3 text-center text-sm font-semibold text-cyan-300">
                          {item.label}
                        </div>
                        <p className="pt-1 text-sm leading-6 text-slate-300">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold md:text-2xl">Guardias y rondines</h2>
                      <p className="mt-1 text-sm text-slate-400">Seguimiento del personal operativo por sede y estado.</p>
                    </div>
                    <Users className="h-5 w-5 text-slate-400" />
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="h-72 rounded-[24px] border border-white/10 bg-[#091322] p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={guardShiftData}>
                          <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                          <XAxis dataKey="name" stroke="#94a3b8" tickLine={false} axisLine={false} />
                          <Tooltip
                            contentStyle={{
                              background: "#0f172a",
                              border: "1px solid rgba(255,255,255,0.08)",
                              borderRadius: 16,
                              color: "white",
                            }}
                          />
                          <Bar dataKey="guardias" fill="#22d3ee" radius={[10, 10, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="space-y-3">
                      {guardias.map((item) => (
                        <div key={item.name} className="rounded-3xl border border-white/10 bg-[#0a1526] p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <UserCircle2 className="h-4 w-4 text-cyan-300" />
                                <div className="font-medium">{item.name}</div>
                              </div>
                              <div className="mt-2 text-sm text-slate-400">{item.post}</div>
                              <div className="mt-1 text-sm text-slate-500">Turno: {item.shift}</div>
                            </div>
                            <span className={`rounded-full border px-3 py-1 text-xs ${stateTone[item.state]}`}>
                              {item.state}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-xl md:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold md:text-2xl">Reportes y exportación</h2>
                      <p className="mt-1 text-sm text-slate-400">Módulo para generar PDFs ejecutivos y consolidar evidencia.</p>
                    </div>
                    <FileBarChart2 className="h-5 w-5 text-slate-400" />
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
                    <div className="h-72 rounded-[24px] border border-white/10 bg-[#091322] p-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={incidentBreakdown} dataKey="value" nameKey="name" innerRadius={60} outerRadius={92} paddingAngle={4}>
                            {incidentBreakdown.map((entry) => (
                              <Cell key={entry.name} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              background: "#0f172a",
                              border: "1px solid rgba(255,255,255,0.08)",
                              borderRadius: 16,
                              color: "white",
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="space-y-3">
                      {reports.map((item) => (
                        <div key={item.title} className="rounded-3xl border border-white/10 bg-[#0a1526] p-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-cyan-300" />
                                <div className="font-medium">{item.title}</div>
                              </div>
                              <div className="mt-2 text-sm text-slate-400">Formato: {item.type}</div>
                              <div className="mt-1 text-sm text-slate-500">{item.time}</div>
                            </div>
                            <span className={`rounded-full border px-3 py-1 text-xs ${reportTone[item.status]}`}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                      ))}

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <button className="rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950">
                          Exportar PDF
                        </button>
                        <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200">
                          Descargar XLS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
