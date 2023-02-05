import React from "react";

export const ListaCarros = (props) => {
  const carros = [
    {
      id: 1,
      img: "https://fastback.fiat.com.br/content/dam/fiat/products/376/a31/0/2023/page/360/743/00.jpg",
      marca: "Fiat",
      model: "Fastback",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 133990,
    },
    {
      id: 2,
      marca: "Volkswagen",
      model: "Polo",
      ano: 2023,
      tipo: "Hatch",
      valorAprox: 133990,
    },
    {
      id: 3,
      marca: "Jeep",
      model: "Compass",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 133990,
    },
    {
      id: 4,
      marca: "Chevrolet",
      model: "Onix",
      linha: "Plus",
      ano: 2023,
      tipo: "Sedan",
      valorAprox: 133990,
    },
    {
      id: 5,
      marca: "Peugeot",
      model: "203",
      linha: "Style",
      ano: 2023,
      tipo: "Hatch",
      valorAprox: 133990,
    },
    {
      id: 6,
      marca: "Volkswagen",
      model: "Taos",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 133990,
    },
    {
      id: 7,
      marca: "Volvo",
      model: "XC60 Recharge",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 133990,
    },
  ];
  return (
    <ul
      className={`rounded-md p-5 col-span-2 flex flex-col order-2 max-h-96 max-w-fit overflow-y-auto transition-all appearance-none ${
        props.darkMode ? "bg-white" : "bg-slate-200"
      } `}
    >
      {carros.map((item) => {
        return (
          <li key={item.id} className="block">
            <ul className="p-2 flex justify-center items-center gap-2 h-56 border-b">
              <li className="">
                <img className="max-w-xs" src={item.img} alt={item.model} />
              </li>
              <ul>
                <li className="">Marca: {item.marca}</li>
                <li className="">Modelo: {item.model}</li>
                <li className="">Ano: {item.ano}</li>
                <li className="">Tipo: {item.tipo}</li>
                <li className="">
                  Valor:{" "}
                  {item.valorAprox.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </li>
              </ul>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
