"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Bell,
  CheckCircle2,
  Clock3,
  Cpu,
  Gauge,
  Globe,
  Layers3,
  LogOut,
  MapPinned,
  MoveRight,
  Radar,
  Route,
  Search,
  ShieldCheck,
  ShieldEllipsis,
  Siren,
  Truck,
  UserCircle2,
  Users,
  Wifi,
  WifiOff,
} from "lucide-react";

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const vehiclesSeed = [
  {
    id: "SAT-014",
    name: "Camión 14",
    plate: "CZM-814-K",
    client: "Logística Andina",
    status: "moving",
    speed: 67,
    driver: "Emilio Navarro",
    ignition: true,
    battery: "92%",
    device: "SG-X4 Online",
    lastTx: "Hace 12 seg",
    lat: 19.4326,
    lng: -99.1332,
    address: "Circuito Interior, CDMX",
  },
  {
    id: "SAT-203",
    name: "Unidad Custodia 03",
    plate: "KTP-221-F",
    client: "Custodia Atlas",
    status: "moving",
    speed: 54,
    driver: "Ricardo Sosa",
    ignition: true,
    battery: "88%",
    device: "SG-X4 Online",
    lastTx: "Hace 18 seg",
    lat: 19.4382,
    lng: -99.1544,
    address: "Av. Marina Nacional, CDMX",
  },
  {
    id: "SAT-707",
    name: "Vehículo Ejecutivo 07",
    plate: "NVR-090-J",
    client: "Grupo Novar",
    status: "stopped",
    speed: 0,
    driver: "Paola Ortega",
    ignition: false,
    battery: "95%",
    device: "SG-Mini Online",
    lastTx: "Hace 1 min",
    lat: 19.4204,
    lng: -99.1716,
    address: "Polanco V Sección, CDMX",
  },
  {
    id: "SAT-902",
    name: "Patrulla Operativa 02",
    plate: "OPS-552-R",
    client: "Seguridad Prisma",
    status: "alert",
    speed: 92,
    driver: "Daniel Paredes",
    ignition: true,
    battery: "76%",
    device: "SG-X4 Alerta",
    lastTx: "Hace 9 seg",
    lat: 19.4508,
    lng: -99.1326,
    address: "Insurgentes Norte, CDMX",
  },
  {
    id: "SAT-321",
    name: "Van Refrigerada 11",
    plate: "FRZ-411-T",
    client: "Fríos del Centro",
    status: "offline",
    speed: 0,
    driver: "María Salgado",
    ignition: false,
    battery: "Sin señal",
    device: "SG-Edge Offline",
    lastTx: "Hace 43 min",
    lat: 19.409,
    lng: -99.0992,
    address: "Iztacalco, CDMX",
  },
  {
    id: "SAT-118",
    name: "Unidad Distribución 18",
    plate: "DTR-318-P",
    client: "Distribuciones Norte",
    status: "stopped",
    speed: 0,
    driver: "Iván Mena",
    ignition: true,
    battery: "81%",
    device: "SG-Mini Online",
    lastTx: "Hace 2 min",
    lat: 19.4658,
    lng: -99.2031,
    address: "Naucalpan Centro",
  },
];

const alertsSeed = [
  {
    id: "AL-9912",
    title: "Salida de geocerca no autorizada",
    unit: "Patrulla Operativa 02",
    severity: "Urgente",
    time: "13:24",
    detail: "La unidad cruzó el perímetro de Zona Norte sin evento de cierre validado.",
  },
  {
    id: "AL-9913",
    title: "Exceso de velocidad sostenido",
    unit: "Camión 14",
    severity: "Media",
    time: "13:18",
    detail: "Velocidad > 80 km/h durante 4 minutos en corredor industrial.",
  },
  {
    id: "AL-9914",
    title: "Dispositivo sin transmisión",
    unit: "Van Refrigerada 11",
    severity: "Urgente",
    time: "12:49",
    detail: "El GPS SG-Edge no reporta coordenadas desde hace 43 minutos.",
  },
  {
    id: "AL-9915",
    title: "Motor encendido en detención prolongada",
    unit: "Unidad Distribución 18",
    severity: "Baja",
    time: "12:33",
    detail: "Ignición activa con velocidad cero por más de 20 minutos.",
  },
];

const activitySeed = [
  { id: 1, event: "Ruta optimizada aplicada", unit: "Camión 14", time: "Hace 4 min", type: "Ruta" },
  { id: 2, event: "Cliente consultó historial", unit: "Grupo Novar", time: "Hace 9 min", type: "Cliente" },
  { id: 3, event: "Geocerca Patio Central actualizada", unit: "Custodia Atlas", time: "Hace 16 min", type: "Geocerca" },
  { id: 4, event: "Operador autenticado con MFA", unit: "NOC SatGuard", time: "Hace 21 min", type: "Acceso" },
];

const routeHistory = [
  { id: "R-311", unit: "Unidad Custodia 03", distance: "132 km", stops: 4, efficiency: "Alta" },
  { id: "R-312", unit: "Vehículo Ejecutivo 07", distance: "46 km", stops: 2, efficiency: "Media" },
  { id: "R-313", unit: "Camión 14", distance: "188 km", stops: 6, efficiency: "Alta" },
];

function loadGoogleMaps(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.google?.maps) {
      resolve();
      return;
    }

    const existing = document.getElementById("google-maps-script");
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("No se pudo cargar Google Maps")));
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("No se pudo cargar Google Maps"));
    document.head.appendChild(script);
  });
}

function statusClass(status) {
  if (status === "moving") return "bg-emerald-500/15 text-emerald-300 border-emerald-400/25";
  if (status === "stopped") return "bg-amber-500/15 text-amber-300 border-amber-400/25";
  if (status === "alert") return "bg-rose-500/15 text-rose-300 border-rose-400/25";
  return "bg-slate-500/15 text-slate-300 border-slate-400/25";
}

function statusLabel(status) {
  if (status === "moving") return "En movimiento";
  if (status === "stopped") return "Detenida";
  if (status === "alert") return "En alerta";
  return "Sin señal";
}

function alertTone(severity) {
  if (severity === "Urgente") return "border-rose-400/30 bg-rose-500/10 text-rose-200";
  if (severity === "Media") return "border-amber-400/30 bg-amber-500/10 text-amber-100";
  return "border-cyan-400/30 bg-cyan-500/10 text-cyan-100";
}

function MapPanel({ vehicles, selectedId }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    let mounted = true;

    async function initMap() {
      if (!GOOGLE_MAPS_API_KEY || !mapRef.current) return;

      await loadGoogleMaps(GOOGLE_MAPS_API_KEY);
      if (!mounted || !window.google?.maps) return;

      const selected = vehicles.find((v) => v.id === selectedId) || vehicles[0];
      const google = window.google;

      if (!mapInstance.current) {
        mapInstance.current = new google.maps.Map(mapRef.current, {
          center: { lat: selected.lat, lng: selected.lng },
          zoom: 12,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          styles: [
            { elementType: "geometry", stylers: [{ color: "#091325" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#b6c2d9" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#091325" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#1d2a43" }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#0b1d3d" }] },
            { featureType: "poi", stylers: [{ visibility: "off" }] },
          ],
        });
      }

      markersRef.current.forEach((marker) => marker.setMap(null));

      markersRef.current = vehicles.map((vehicle) => {
        const color =
          vehicle.status === "alert" ? "#fb7185" : vehicle.status === "moving" ? "#34d399" : vehicle.status === "offline" ? "#94a3b8" : "#fbbf24";

        const marker = new google.maps.Marker({
          map: mapInstance.current,
          position: { lat: vehicle.lat, lng: vehicle.lng },
          title: `${vehicle.name} · ${vehicle.plate}`,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: vehicle.id === selectedId ? 8 : 6,
            fillColor: color,
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 1.5,
          },
        });

        const info = new google.maps.InfoWindow({
          content: `<div style="min-width:240px;font-family:Inter,system-ui,sans-serif"><strong>${vehicle.name}</strong><br/>${vehicle.client}<br/>${vehicle.address}<br/><span style="color:#4f46e5">${statusLabel(vehicle.status)}</span> · ${vehicle.speed} km/h</div>`,
        });

        marker.addListener("click", () => info.open({ anchor: marker, map: mapInstance.current }));
        return marker;
      });

      mapInstance.current.panTo({ lat: selected.lat, lng: selected.lng });
    }

    initMap();

    return () => {
      mounted = false;
    };
  }, [vehicles, selectedId]);

  if (!GOOGLE_MAPS_API_KEY) {
    const selected = vehicles.find((v) => v.id === selectedId) || vehicles[0];

    return (
      <div className="relative h-[540px] overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.28),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(37,99,235,0.25),transparent_26%),linear-gradient(145deg,#040b18_0%,#081325_45%,#09162f_100%)]">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="absolute -left-10 top-16 h-56 w-[125%] rotate-6 bg-gradient-to-r from-transparent via-cyan-300/15 to-transparent blur-xl" />
        <div className="absolute left-12 top-20 h-1.5 w-[76%] rounded-full bg-cyan-300/50" />
        <div className="absolute left-24 top-56 h-1.5 w-[64%] rounded-full bg-blue-300/40" />
        <div className="absolute left-10 top-92 h-1.5 w-[80%] rounded-full bg-indigo-300/35" />

        {vehicles.map((v, idx) => (
          <button
            key={v.id}
            className={`absolute h-4 w-4 rounded-full border border-white/70 ${
              v.id === selectedId ? "bg-white shadow-[0_0_0_8px_rgba(56,189,248,0.35)]" : "bg-cyan-300"
            }`}
            style={{ left: `${14 + idx * 14}%`, top: `${20 + (idx % 4) * 16}%` }}
            title={v.name}
          />
        ))}

        <div className="absolute left-6 top-6 rounded-2xl border border-cyan-300/20 bg-slate-950/80 px-4 py-3 text-cyan-100 backdrop-blur">
          <div className="text-[11px] uppercase tracking-[0.25em] text-cyan-300">Satellite Guard Map Engine</div>
          <div className="mt-1 text-sm text-slate-200">Modo visual premium (sin API Key)</div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Unidad enfocada</div>
              <div className="mt-1 text-xl font-semibold text-white">{selected.name}</div>
              <div className="text-sm text-slate-300">{selected.address}</div>
            </div>
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusClass(selected.status)}`}>
              {statusLabel(selected.status)}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="h-[540px] overflow-hidden rounded-3xl border border-white/10" />;
}

function LoginScreen({ onAccess }) {
  const [email, setEmail] = useState("operator@satelliteguard.mx");
  const [password, setPassword] = useState("SatGuard#2026");

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.22),transparent_30%),linear-gradient(155deg,#040814_0%,#050d1d_45%,#02050c_100%)] px-5 py-8 text-white md:px-10 md:py-12">
      <div className="mx-auto grid min-h-[88vh] max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-2xl shadow-cyan-500/10 backdrop-blur md:grid-cols-[1.2fr_0.8fr]">
        <section className="relative hidden p-10 md:block">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(14,165,233,0.16),transparent_45%,rgba(59,130,246,0.14))]" />
          <div className="relative h-full">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-cyan-300/20 bg-cyan-500/10 px-4 py-2">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              <span className="text-xs uppercase tracking-[0.28em] text-cyan-200">Satellite Guard</span>
            </div>

            <h1 className="mt-10 max-w-xl text-5xl font-semibold leading-tight">
              Centro de monitoreo satelital para operación crítica y logística premium.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
              Plataforma diseñada para control de flotillas, geocercas, alertas en tiempo real y trazabilidad completa por cliente.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                ["Cobertura", "GPS + IoT en tiempo real"],
                ["Disponibilidad", "SLA 99.95%"],
                ["Seguridad", "MFA + sesiones auditadas"],
                ["Integración", "API para clientes enterprise"],
              ].map((item) => (
                <div key={item[0]} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">{item[0]}</div>
                  <div className="mt-2 text-sm font-medium text-slate-100">{item[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-7 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="text-xs uppercase tracking-[0.28em] text-cyan-300">Acceso autorizado</div>
            <h2 className="mt-3 text-3xl font-semibold">Ingresar al monitoreo</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Solo personal autorizado. Cada sesión queda registrada en la bitácora de seguridad.
            </p>

            <form
              className="mt-7 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                onAccess();
              }}
            >
              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Correo operativo</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none ring-cyan-300/40 transition focus:border-cyan-300/40 focus:ring"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Clave segura</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 text-sm text-white outline-none ring-cyan-300/40 transition focus:border-cyan-300/40 focus:ring"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Acceder al monitoreo
                <MoveRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 rounded-xl border border-emerald-300/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200">
              Canal seguro activo · Cifrado TLS · MFA habilitado
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function BackendSatelliteGuardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedId, setSelectedId] = useState(vehiclesSeed[0].id);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  const vehicles = vehiclesSeed;
  const alerts = alertsSeed;
  const activity = activitySeed;

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((unit) => {
      const byStatus = statusFilter === "all" ? true : unit.status === statusFilter;
      const q = search.toLowerCase();
      const byQuery =
        unit.name.toLowerCase().includes(q) ||
        unit.plate.toLowerCase().includes(q) ||
        unit.client.toLowerCase().includes(q) ||
        unit.driver.toLowerCase().includes(q);
      return byStatus && byQuery;
    });
  }, [vehicles, statusFilter, search]);

  const selectedVehicle = vehicles.find((v) => v.id === selectedId) || vehicles[0];

  const moving = vehicles.filter((v) => v.status === "moving").length;
  const stopped = vehicles.filter((v) => v.status === "stopped").length;
  const offline = vehicles.filter((v) => v.status === "offline").length;
  const alertUnits = vehicles.filter((v) => v.status === "alert").length;

  const urgentAlerts = alerts.filter((a) => a.severity === "Urgente").length;
  const mediumAlerts = alerts.filter((a) => a.severity === "Media").length;
  const lowAlerts = alerts.filter((a) => a.severity === "Baja").length;

  if (!isAuthenticated) {
    return <LoginScreen onAccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#020712] text-white">
      <div className="grid min-h-screen xl:grid-cols-[290px_1fr]">
        <aside className="border-r border-white/10 bg-[linear-gradient(180deg,#070f1f_0%,#040915_100%)] p-5">
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-4">
            <div className="text-xs uppercase tracking-[0.26em] text-cyan-300">Satellite Guard</div>
            <div className="mt-2 text-lg font-semibold">Control Tower GPS</div>
            <div className="mt-1 text-sm text-slate-300">Monitoreo satelital comercial</div>
          </div>

          <div className="mt-6 space-y-2">
            {[
              ["Panel operativo", Activity],
              ["Flotillas", Truck],
              ["Clientes", Users],
              ["Geocercas", Globe],
              ["Alertas críticas", Siren],
              ["Historial de rutas", Route],
              ["Estado dispositivos", Cpu],
            ].map(([label, Icon]) => (
              <button
                key={label}
                className="flex w-full items-center gap-3 rounded-xl border border-transparent px-3 py-2 text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Estado del sistema</div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span>Motor de geocercas</span>
              <span className="text-emerald-300">Operativo</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>Canal de alertas</span>
              <span className="text-emerald-300">Sin latencia</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>Integración API</span>
              <span className="text-cyan-300">Conectada</span>
            </div>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </button>
        </aside>

        <main className="px-4 py-4 md:px-6 lg:px-8">
          <header className="sticky top-0 z-20 mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur">
            <div>
              <div className="text-xs uppercase tracking-[0.24em] text-cyan-300">Centro de comando</div>
              <h1 className="text-2xl font-semibold">Backend Satellite Guard</h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar unidad, cliente o placa"
                  className="h-10 w-64 rounded-xl border border-white/10 bg-slate-950/80 pl-10 pr-3 text-sm outline-none ring-cyan-300/40 focus:ring"
                />
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
                Sistema estable
              </div>

              <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-400" />
              </button>

              <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
                <UserCircle2 className="h-4 w-4 text-cyan-300" />
                Operador NOC
              </div>
            </div>
          </header>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
            {[
              ["Unidades en movimiento", moving, Truck],
              ["Unidades detenidas", stopped, Clock3],
              ["Sin señal", offline, WifiOff],
              ["Con alerta activa", alertUnits, AlertTriangle],
              ["Clientes conectados", 12, Users],
              ["Geocercas activas", 38, Layers3],
            ].map(([label, value, Icon]) => (
              <article key={label} className="rounded-2xl border border-white/10 bg-[linear-gradient(170deg,rgba(15,23,42,0.95),rgba(10,16,30,0.8))] p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</div>
                  <Icon className="h-4 w-4 text-cyan-300" />
                </div>
                <div className="mt-3 text-3xl font-semibold">{value}</div>
              </article>
            ))}
          </section>

          <section className="mt-5 grid gap-5 xl:grid-cols-[1.45fr_0.85fr]">
            <article className="rounded-3xl border border-white/10 bg-[linear-gradient(165deg,rgba(15,23,42,0.86),rgba(7,13,24,0.9))] p-4 md:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Mapa en tiempo real</div>
                  <h2 className="mt-1 text-xl font-semibold">Monitoreo satelital de flotilla</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">
                  <Radar className="h-4 w-4 text-cyan-300" />
                  Última transmisión: {selectedVehicle.lastTx}
                </div>
              </div>

              <MapPanel vehicles={vehicles} selectedId={selectedId} />
            </article>

            <div className="space-y-5">
              <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Alertas por prioridad</h3>
                  <Siren className="h-4 w-4 text-rose-300" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl border border-rose-400/30 bg-rose-500/10 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-rose-200">Urgente</div>
                    <div className="mt-1 text-2xl font-semibold">{urgentAlerts}</div>
                  </div>
                  <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-amber-100">Media</div>
                    <div className="mt-1 text-2xl font-semibold">{mediumAlerts}</div>
                  </div>
                  <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-cyan-100">Baja</div>
                    <div className="mt-1 text-2xl font-semibold">{lowAlerts}</div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {alerts.map((alert) => (
                    <div key={alert.id} className={`rounded-2xl border p-3 ${alertTone(alert.severity)}`}>
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-semibold">{alert.title}</div>
                        <span className="text-xs">{alert.time}</span>
                      </div>
                      <div className="mt-1 text-xs opacity-85">{alert.unit}</div>
                      <div className="mt-2 text-xs leading-5 opacity-90">{alert.detail}</div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Estado de dispositivos</h3>
                  <Wifi className="h-4 w-4 text-emerald-300" />
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <span>GPS online</span>
                    <span className="text-emerald-300">34</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <span>Con batería baja</span>
                    <span className="text-amber-200">5</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <span>Sin transmisión</span>
                    <span className="text-rose-300">3</span>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="mt-5 grid gap-5 xl:grid-cols-[1.35fr_0.95fr]">
            <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">Flotillas y última transmisión</h3>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="h-10 rounded-xl border border-white/10 bg-slate-950 px-3 text-sm outline-none"
                >
                  <option value="all">Todas</option>
                  <option value="moving">En movimiento</option>
                  <option value="stopped">Detenidas</option>
                  <option value="alert">Con alerta</option>
                  <option value="offline">Sin señal</option>
                </select>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    <tr>
                      <th className="pb-3">Unidad</th>
                      <th className="pb-3">Cliente</th>
                      <th className="pb-3">Estado</th>
                      <th className="pb-3">Velocidad</th>
                      <th className="pb-3">Última transmisión</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVehicles.map((unit) => (
                      <tr
                        key={unit.id}
                        onClick={() => setSelectedId(unit.id)}
                        className={`cursor-pointer border-t border-white/10 transition hover:bg-white/5 ${selectedId === unit.id ? "bg-cyan-500/10" : ""}`}
                      >
                        <td className="py-3">
                          <div className="font-medium">{unit.name}</div>
                          <div className="text-xs text-slate-400">{unit.plate} · {unit.driver}</div>
                        </td>
                        <td className="py-3 text-slate-300">{unit.client}</td>
                        <td className="py-3">
                          <span className={`rounded-full border px-2.5 py-1 text-xs ${statusClass(unit.status)}`}>
                            {statusLabel(unit.status)}
                          </span>
                        </td>
                        <td className="py-3">{unit.speed} km/h</td>
                        <td className="py-3 text-slate-300">{unit.lastTx}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <div className="space-y-5">
              <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Actividad reciente</h3>
                  <MapPinned className="h-4 w-4 text-cyan-300" />
                </div>
                <div className="mt-3 space-y-2">
                  {activity.map((item) => (
                    <div key={item.id} className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-medium">{item.event}</div>
                        <span className="text-xs text-slate-400">{item.time}</span>
                      </div>
                      <div className="mt-1 text-xs text-slate-400">{item.unit} · {item.type}</div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Historial de rutas</h3>
                  <Gauge className="h-4 w-4 text-cyan-300" />
                </div>
                <div className="mt-3 space-y-2">
                  {routeHistory.map((routeItem) => (
                    <div key={routeItem.id} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
                      <div className="font-medium">{routeItem.unit}</div>
                      <div className="mt-1 flex items-center justify-between text-slate-300">
                        <span>{routeItem.distance}</span>
                        <span>{routeItem.stops} paradas</span>
                        <span className="text-cyan-200">{routeItem.efficiency}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
