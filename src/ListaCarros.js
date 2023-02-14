import React from "react";

export const ListaCarros = (props) => {
  const fetchCarros = async () => {
    const response = await fetch("/carros.json");
    const data = await response.json();
    setCarros(data);
  };

  React.useEffect(() => {
    fetchCarros();
  }, []);

  const [carros, setCarros] = React.useState([]);
  const [carrosFiltrados, setCarrosFiltrados] = React.useState([]);

  React.useEffect(() => {
    if (props.marca === "Todas") {
      fetchCarros();
    } else {
      setCarrosFiltrados(carros.filter((item) => item.marca === props.marca));
    }
  }, [props.marca]);
  return (
    <div
      className={`col-span-6 flex items-center order-2 h-full lg:border-l border-zinc-300 w-full ${
        props.darkMode ? " text-zinc-300" : " text-zinc-700"
      }`}
    >
      <ul
        className={`flex flex-col  lg:max-h-[800px] max-w-full overflow-y-auto transition-all appearance-none scrollbar scrollbar-none  scrollbar-w  hover:scroll-smooth`}
      >
        {props.marca === "Todas"
          ? carros.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`block p-5 last:border-0 border-b   transition-all ${
                    props.darkMode
                      ? "hover:bg-zinc-300 hover:text-zinc-700  border-b border-zinc-300"
                      : "hover:bg-zinc-800 hover:text-zinc-300 border-b border-zinc-300"
                  }`}
                >
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      props.handleCarro(item);
                    }}
                  >
                    <ul className="p-2 flex flex-col md:flex-row items-start md:items-center gap-2 lg:h-62 ">
                      <li className="">
                        <img
                          className="max-w-xs"
                          src={item.img}
                          alt={item.model}
                        />
                      </li>
                      <ul>
                        <li className="">
                          Marca:{" "}
                          <span className="font-semibold">{item.marca}</span>
                        </li>
                        <li className="">
                          Modelo:{" "}
                          <span className="font-semibold">{item.model}</span>
                        </li>
                        <li className="">
                          Ano: <span className="font-semibold">{item.ano}</span>
                        </li>
                        <li className="">
                          Tipo:{" "}
                          <span className="font-semibold">{item.tipo}</span>
                        </li>
                        <li className="font-normal">
                          Valor:{" "}
                          <span className="font-semibold">
                            {item.valorAprox.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </span>
                        </li>
                      </ul>
                    </ul>
                  </a>
                </li>
              );
            })
          : carrosFiltrados.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`block p-5 last:border-0 border-b   transition-all ${
                    props.darkMode
                      ? "hover:bg-zinc-300 hover:text-zinc-700  border-b border-zinc-300"
                      : "hover:bg-zinc-800 hover:text-zinc-300 border-b border-zinc-300"
                  }`}
                >
                  <a
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      props.handleCarro(item);
                    }}
                  >
                    <ul className="p-2 flex flex-col md:flex-row items-start md:items-center gap-2 lg:h-62 ">
                      <li className="">
                        <img
                          className="max-w-xs"
                          src={item.img}
                          alt={item.model}
                        />
                      </li>
                      <ul>
                        <li className="">
                          Marca:{" "}
                          <span className="font-semibold">{item.marca}</span>
                        </li>
                        <li className="">
                          Modelo:{" "}
                          <span className="font-semibold">{item.model}</span>
                        </li>
                        <li className="">
                          Ano: <span className="font-semibold">{item.ano}</span>
                        </li>
                        <li className="">
                          Tipo:{" "}
                          <span className="font-semibold">{item.tipo}</span>
                        </li>
                        <li className="font-normal">
                          Valor:{" "}
                          <span className="font-semibold">
                            {item.valorAprox.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </span>
                        </li>
                      </ul>
                    </ul>
                  </a>
                </li>
              );
            })}
        {carrosFiltrados.length === 0 ? (
          <span
            className="mx-auto text-center
        mb-20 lg:ml-5 lg:mb-0"
          >
            Desculpe, não encontramos nenhum carro com essa marca.
          </span>
        ) : null}
      </ul>
    </div>
  );
};
