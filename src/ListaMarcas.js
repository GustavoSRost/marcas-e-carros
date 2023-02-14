import React from "react";

export const ListaMarcas = (props) => {
  const fetchMarca = async () => {
    const response = await fetch("/marcas.json");
    const data = await response.json();
    setListMarcas(data);
  };
  React.useEffect(() => {
    fetchMarca();
  }, []);
  const [listMarcas, setListMarcas] = React.useState([]);
  return (
    <div className="col-span-6">
      <h1
        className={`text-2xl text-center ${props.darkMode ? "text-white" : ""}`}
      >
        Filtre por marca:
      </h1>
      <ul
        id="listaMarcas"
        className="rounded-full p-5 flex flex-row flex-wrap items-center justify-center order-1 gap-16  mb-20 lg:my-0"
      >
        {listMarcas.map((item) => {
          return (
            <li
              className={`max-w-[135px] lg:opacity-50 lg:hover:opacity-100 transition-opacity cursor-pointer ${
                props.marca === item.marca ? "lg:opacity-100" : ""
              }`}
              key={item.index}
              onClick={() => props.handleMarca(item.marca)}
            >
              <img
                value={item.marca}
                className={`max-w-full ${
                  props.darkMode && item.index !== 9
                    ? "invert transition-all"
                    : ""
                }`}
                src={item.logo}
                alt={item.marca}
              />
            </li>
          );
        })}
        <span
          value="Todas"
          className={` cursor-pointer ${props.darkMode ? "text-white" : ""}`}
          onClick={() => props.handleMarca("Todas")}
        >
          Todas as marcas
        </span>
      </ul>
    </div>
  );
};
