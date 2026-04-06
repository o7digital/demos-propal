import "./globals.css";

export const metadata = {
  title: "Demos Propal",
  description: "Demos de propuestas de rediseño web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
