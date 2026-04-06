"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Bell, Car, MapPin, ShieldAlert, Route, Search, Activity, Gauge, Clock3, Radio } from 'lucide-react';

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function Card({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('border bg-white', className)} {...props} />;
}

function CardHeader({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('p-6 pb-3', className)} {...props} />;
}

function CardTitle({ className, ...props }: React.ComponentPropsWithoutRef<'h3'>) {
  return <h3 className={cn('text-lg font-semibold', className)} {...props} />;
}

function CardContent({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

function Button({ className, variant, ...props }: React.ComponentPropsWithoutRef<'button'> & { variant?: 'outline' }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition',
        variant === 'outline' ? 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50' : 'bg-slate-900 text-white hover:bg-slate-800',
        className,
      )}
      {...props}
    />
  );
}

function Input({ className, ...props }: React.ComponentPropsWithoutRef<'input'>) {
  return <input className={cn('h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm', className)} {...props} />;
}

function Badge({ className, variant, ...props }: React.ComponentPropsWithoutRef<'span'> & { variant?: 'outline' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium',
        variant === 'outline' ? 'border-slate-300 text-slate-700' : '',
        className,
      )}
      {...props}
    />
  );
}

type TabsContextType = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

function Tabs({ defaultValue, children }: { defaultValue: string; children: React.ReactNode }) {
  const [value, setValue] = useState(defaultValue);
  return <TabsContext.Provider value={{ value, setValue }}>{children}</TabsContext.Provider>;
}

function TabsList({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('inline-flex gap-1 rounded-xl bg-slate-100 p-1', className)} {...props} />;
}

function TabsTrigger({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext);
  if (!ctx) return null;
  const active = ctx.value === value;
  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={cn('rounded-lg px-3 py-1.5 text-sm transition', active ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900', className)}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, className, children }: { value: string; className?: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext);
  if (!ctx || ctx.value !== value) return null;
  return <div className={className}>{children}</div>;
}

function ScrollArea({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('overflow-auto', className)} {...props} />;
}

// Demo de backend/admin para Satellite Guard
// - Incluye mapa Google Maps si existe NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
// - Si no existe la key, muestra un modo demo visual
// - Los datos son falsos y sirven para presentar el concepto al cliente

const GOOGLE_MAPS_API_KEY = (globalThis as any)?.process?.env?.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

type Vehicle = {
  id: string;
  name: string;
  plate: string;
  status: 'online' | 'idle' | 'offline' | 'alert';
  speed: number;
  ignition: boolean;
  driver: string;
  lastUpdate: string;
  lat: number;
  lng: number;
  address: string;
  battery: string;
};

type AlertItem = {
  id: string;
  type: string;
  vehicle: string;
  severity: 'Alta' | 'Media' | 'Baja';
  time: string;
  detail: string;
};

const vehiclesSeed: Vehicle[] = [
  {
    id: 'SG-001',
    name: 'Unidad 01',
    plate: 'JAR-401-A',
    status: 'online',
    speed: 58,
    ignition: true,
    driver: 'Luis Mendoza',
    lastUpdate: 'Hace 10 seg',
    lat: 19.4326,
    lng: -99.1332,
    address: 'Centro, Ciudad de México',
    battery: '94%',
  },
  {
    id: 'SG-002',
    name: 'Unidad 02',
    plate: 'JAR-517-B',
    status: 'idle',
    speed: 0,
    ignition: true,
    driver: 'Carlos Romero',
    lastUpdate: 'Hace 1 min',
    lat: 19.427,
    lng: -99.127,
    address: 'Doctores, Ciudad de México',
    battery: '87%',
  },
  {
    id: 'SG-003',
    name: 'Unidad 03',
    plate: 'JAR-620-C',
    status: 'alert',
    speed: 82,
    ignition: true,
    driver: 'José Herrera',
    lastUpdate: 'Hace 22 seg',
    lat: 19.44,
    lng: -99.145,
    address: 'Reforma, Ciudad de México',
    battery: '72%',
  },
  {
    id: 'SG-004',
    name: 'Unidad 04',
    plate: 'JAR-735-D',
    status: 'offline',
    speed: 0,
    ignition: false,
    driver: 'Sin asignar',
    lastUpdate: 'Hace 39 min',
    lat: 19.418,
    lng: -99.156,
    address: 'Roma Sur, Ciudad de México',
    battery: 'Sin señal',
  },
];

const alertsSeed: AlertItem[] = [
  {
    id: 'AL-1001',
    type: 'Movimiento no autorizado',
    vehicle: 'Unidad 03',
    severity: 'Alta',
    time: '13:12',
    detail: 'La unidad registró actividad fuera del horario permitido.',
  },
  {
    id: 'AL-1002',
    type: 'Exceso de velocidad',
    vehicle: 'Unidad 01',
    severity: 'Media',
    time: '12:58',
    detail: 'Velocidad detectada arriba del umbral configurado.',
  },
  {
    id: 'AL-1003',
    type: 'Equipo sin conexión',
    vehicle: 'Unidad 04',
    severity: 'Alta',
    time: '12:31',
    detail: 'No se recibe señal del dispositivo desde hace más de 30 minutos.',
  },
];

function statusClasses(status: Vehicle['status']) {
  switch (status) {
    case 'online':
      return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    case 'idle':
      return 'bg-amber-100 text-amber-700 border-amber-200';
    case 'alert':
      return 'bg-rose-100 text-rose-700 border-rose-200';
    default:
      return 'bg-slate-100 text-slate-600 border-slate-200';
  }
}

function loadGoogleMaps(apiKey: string) {
  return new Promise<void>((resolve, reject) => {
    if ((window as any).google?.maps) {
      resolve();
      return;
    }
    const existing = document.getElementById('google-maps-script');
    if (existing) {
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error('No se pudo cargar Google Maps')));
      return;
    }
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('No se pudo cargar Google Maps'));
    document.head.appendChild(script);
  });
}

function GoogleMapPanel({ vehicles, selectedId }: { vehicles: Vehicle[]; selectedId: string }) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    let mounted = true;
    async function init() {
      if (!GOOGLE_MAPS_API_KEY || !mapRef.current) return;
      await loadGoogleMaps(GOOGLE_MAPS_API_KEY);
      if (!mounted || !(window as any).google?.maps) return;
      const google = (window as any).google;
      const selected = vehicles.find((v) => v.id === selectedId) || vehicles[0];

      if (!mapInstance.current) {
        mapInstance.current = new google.maps.Map(mapRef.current, {
          center: { lat: selected.lat, lng: selected.lng },
          zoom: 12,
          disableDefaultUI: false,
        });
      }

      markersRef.current.forEach((m) => m.setMap(null));
      markersRef.current = vehicles.map((vehicle) => {
        const marker = new google.maps.Marker({
          position: { lat: vehicle.lat, lng: vehicle.lng },
          map: mapInstance.current,
          title: `${vehicle.name} · ${vehicle.plate}`,
        });
        const info = new google.maps.InfoWindow({
          content: `<div style="min-width:220px"><strong>${vehicle.name}</strong><br/>${vehicle.plate}<br/>Estado: ${vehicle.status}<br/>Velocidad: ${vehicle.speed} km/h</div>`,
        });
        marker.addListener('click', () => info.open({ map: mapInstance.current, anchor: marker }));
        return marker;
      });

      mapInstance.current.panTo({ lat: selected.lat, lng: selected.lng });
    }
    init();
    return () => {
      mounted = false;
    };
  }, [vehicles, selectedId]);

  if (!GOOGLE_MAPS_API_KEY) {
    const selected = vehicles.find((v) => v.id === selectedId) || vehicles[0];
    return (
      <div className="relative h-[460px] w-full overflow-hidden rounded-2xl border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.18) 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }} />
        {vehicles.map((v, idx) => (
          <div
            key={v.id}
            className={`absolute flex h-4 w-4 items-center justify-center rounded-full ring-4 ${v.id === selected.id ? 'bg-white ring-cyan-400/40' : 'bg-cyan-400 ring-cyan-400/20'}`}
            style={{ left: `${18 + idx * 17}%`, top: `${22 + idx * 13}%` }}
            title={v.name}
          >
            <span className="sr-only">{v.name}</span>
          </div>
        ))}
        <div className="absolute left-5 top-5 rounded-xl bg-white/95 px-4 py-3 shadow-lg">
          <div className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">Modo demo</div>
          <div className="mt-1 text-lg font-semibold text-slate-900">Mapa GPS</div>
          <div className="text-sm text-slate-600">Activa la API key de Google Maps para el mapa real.</div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 shadow-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm text-slate-500">Unidad seleccionada</div>
              <div className="text-xl font-semibold text-slate-900">{selected.name}</div>
              <div className="text-sm text-slate-600">{selected.address}</div>
            </div>
            <Badge className={statusClasses(selected.status)}>{selected.status}</Badge>
          </div>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="h-[460px] w-full overflow-hidden rounded-2xl border" />;
}

export default function GPSGuardAdminDemo() {
  const [vehicles] = useState<Vehicle[]>(vehiclesSeed);
  const [alerts] = useState<AlertItem[]>(alertsSeed);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedId, setSelectedId] = useState('SG-001');

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesSearch =
        vehicle.name.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.plate.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.driver.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'all' ? true : vehicle.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [vehicles, search, statusFilter]);

  const selectedVehicle = vehicles.find((v) => v.id === selectedId) || vehicles[0];
  const onlineCount = vehicles.filter((v) => v.status === 'online').length;
  const alertCount = vehicles.filter((v) => v.status === 'alert').length;
  const offlineCount = vehicles.filter((v) => v.status === 'offline').length;
  const navItems: Array<{ label: string; Icon: React.ComponentType<{ className?: string }> }> = [
    { label: 'Resumen general', Icon: Activity },
    { label: 'Mapa en tiempo real', Icon: MapPin },
    { label: 'Unidades', Icon: Car },
    { label: 'Alertas', Icon: Bell },
    { label: 'Rutas', Icon: Route },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r bg-slate-950 text-white">
          <div className="p-6">
            <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">Satellite Guard</div>
            <h1 className="mt-2 text-2xl font-semibold">Admin GPS Demo</h1>
            <p className="mt-2 text-sm text-slate-300">
              Concepto visual para monitoreo de unidades, alertas y operación de flotillas.
            </p>
          </div>

          <div className="px-4 pb-6">
            <div className="space-y-3">
              {navItems.map(({ label, Icon }) => (
                <button
                  key={label}
                  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm text-slate-200 transition hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mx-4 mb-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-slate-300">Integración prevista</div>
            <div className="mt-2 text-sm leading-6 text-slate-200">
              IOPGPS / API externa<br />
              Google Maps<br />
              Reportes y alertas
            </div>
          </div>
        </aside>

        <main className="p-4 md:p-6 lg:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-slate-500">Backend visual</div>
              <h2 className="text-3xl font-semibold">Monitoreo operativo en tiempo real</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl">Exportar reporte</Button>
              <Button variant="outline" className="rounded-2xl">Configurar geocercas</Button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <div className="text-sm text-slate-500">Unidades activas</div>
                  <div className="mt-1 text-3xl font-semibold">{onlineCount}</div>
                </div>
                <Radio className="h-8 w-8 text-slate-500" />
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <div className="text-sm text-slate-500">Alertas críticas</div>
                  <div className="mt-1 text-3xl font-semibold">{alertCount}</div>
                </div>
                <ShieldAlert className="h-8 w-8 text-slate-500" />
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <div className="text-sm text-slate-500">Unidades fuera de línea</div>
                  <div className="mt-1 text-3xl font-semibold">{offlineCount}</div>
                </div>
                <Clock3 className="h-8 w-8 text-slate-500" />
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="flex items-center justify-between p-5">
                <div>
                  <div className="text-sm text-slate-500">Velocidad promedio</div>
                  <div className="mt-1 text-3xl font-semibold">47 km/h</div>
                </div>
                <Gauge className="h-8 w-8 text-slate-500" />
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_.9fr]">
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle>Mapa GPS</CardTitle>
              </CardHeader>
              <CardContent>
                <GoogleMapPanel vehicles={vehicles} selectedId={selectedId} />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle>Filtros y búsqueda</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                      value={search}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                      placeholder="Buscar por unidad, placa o conductor"
                      className="rounded-2xl pl-10"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="h-10 w-full rounded-2xl border border-slate-300 bg-white px-3 text-sm"
                  >
                    <option value="all">Todos</option>
                    <option value="online">En línea</option>
                    <option value="idle">En ralentí</option>
                    <option value="alert">Con alerta</option>
                    <option value="offline">Sin conexión</option>
                  </select>
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-sm">
                <CardHeader>
                  <CardTitle>Unidad seleccionada</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Unidad</span>
                    <span className="font-medium">{selectedVehicle.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Placa</span>
                    <span className="font-medium">{selectedVehicle.plate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Conductor</span>
                    <span className="font-medium">{selectedVehicle.driver}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Velocidad</span>
                    <span className="font-medium">{selectedVehicle.speed} km/h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Última actualización</span>
                    <span className="font-medium">{selectedVehicle.lastUpdate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Batería / estado</span>
                    <span className="font-medium">{selectedVehicle.battery}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_.9fr]">
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle>Unidades monitoreadas</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="units">
                  <TabsList className="rounded-2xl">
                    <TabsTrigger value="units">Listado</TabsTrigger>
                    <TabsTrigger value="routes">Rutas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="units" className="mt-4">
                    <ScrollArea className="h-[360px] pr-4">
                      <div className="space-y-3">
                        {filteredVehicles.map((vehicle) => (
                          <button
                            key={vehicle.id}
                            onClick={() => setSelectedId(vehicle.id)}
                            className={`w-full rounded-2xl border p-4 text-left transition hover:shadow-md ${selectedId === vehicle.id ? 'border-slate-900 bg-slate-50' : 'bg-white'}`}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                              <div>
                                <div className="font-semibold">{vehicle.name}</div>
                                <div className="text-sm text-slate-500">{vehicle.plate} · {vehicle.driver}</div>
                              </div>
                              <Badge className={statusClasses(vehicle.status)}>{vehicle.status}</Badge>
                            </div>
                            <div className="mt-3 grid gap-2 text-sm text-slate-600 md:grid-cols-3">
                              <div>Velocidad: <span className="font-medium text-slate-900">{vehicle.speed} km/h</span></div>
                              <div>Ignición: <span className="font-medium text-slate-900">{vehicle.ignition ? 'Encendida' : 'Apagada'}</span></div>
                              <div>Actualización: <span className="font-medium text-slate-900">{vehicle.lastUpdate}</span></div>
                            </div>
                            <div className="mt-2 text-sm text-slate-500">{vehicle.address}</div>
                          </button>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>
                  <TabsContent value="routes" className="mt-4">
                    <div className="rounded-2xl border border-dashed p-6 text-sm text-slate-600">
                      Aquí se puede mostrar el histórico de rutas, reproducción de trayectos, tiempo detenido y puntos de interés.
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle>Alertas recientes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className="rounded-2xl border p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-semibold">{alert.type}</div>
                        <div className="text-sm text-slate-500">{alert.vehicle}</div>
                      </div>
                      <Badge variant="outline" className="rounded-xl">{alert.severity}</Badge>
                    </div>
                    <div className="mt-3 text-sm text-slate-600">{alert.detail}</div>
                    <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{alert.time}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
