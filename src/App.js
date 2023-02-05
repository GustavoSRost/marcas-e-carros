import { ListaCarros } from "./ListaCarros";
import { ListaMarcas } from "./ListaMarcas";
import { ToggleDarkMode } from "./ToggleDarkMode";
import React from "react";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return (
    <main
      className={`h-full w-full mx-auto py-2 transition-all duration-300 ease-in-out font-mono 
    ${darkMode ? "bg-slate-800" : "bg-slate-50"}`}
    >
      <ToggleDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <section className="md:container mx-auto  gap-x-5 grid grid-cols-3 items-center justify-items-center">
        <ListaMarcas />
        <ListaCarros darkMode={darkMode} />
      </section>
    </main>
  );
}
