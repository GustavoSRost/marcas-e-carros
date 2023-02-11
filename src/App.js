import { ListaCarros } from "./ListaCarros";
import { ListaMarcas } from "./ListaMarcas";
import { ToggleDarkMode } from "./ToggleDarkMode";
import { Carro } from "./Carro";

import React from "react";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [marca, setMarca] = React.useState("Todas");
  const [carro, setCarro] = React.useState(false);

  function handleMarca(i) {
    setMarca(i);
  }

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  function handleCarro(i) {
    setCarro(i);
  }
  return (
    <main
      className={`h-full lg:h-screen w-full py-2 transition-all duration-300 ease-in-out overflow-hidden 
    ${darkMode ? "bg-zinc-800" : "bg-zinc-200"}`}
    >
      <ToggleDarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <section className="md:container mx-auto lg:my-10 transition-all gap-x-5 lg:grid lg:grid-cols-12 block items-center justify-items-center">
        {!carro && (
          <ListaMarcas
            darkMode={darkMode}
            handleMarca={handleMarca}
            marca={marca}
          />
        )}
        {!carro && (
          <ListaCarros
            darkMode={darkMode}
            handleCarro={handleCarro}
            marca={marca}
            carro={carro}
          />
        )}
        {carro && <Carro carro={carro} handleCarro={handleCarro} />}
      </section>
    </main>
  );
}
