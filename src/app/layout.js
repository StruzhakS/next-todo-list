import "./globals.css";

export const metadata = {
  title: "TodoApp - Управління задачами",
  description: "Зручний додаток для керування щоденними завданнями.",
  keywords: "todo, задачі, to-do list, управління завданнями",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body>
        {children}
      </body>
    </html>
  );
}
