import React from "react";

export const ListaMarcas = () => {
  const listMarcas = [
    {
      index: 1,
      logo: "https://fastback.fiat.com.br/content/dam/fiat/nova_home/logos/logo_header_hub_fiat.svg",
      marca: "Fiat",
    },
    {
      index: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png",
      marca: "Volkswagen",
    },
    {
      index: 3,
      logo: "https://logodownload.org/wp-content/uploads/2019/02/jeep-logo-1.png",
      marca: "Jeep",
    },
    {
      index: 4,
      logo: "https://logodownload.org/wp-content/uploads/2014/02/Chevrolet-logo-2.png",
      marca: "Chevrolet",
    },
    {
      index: 5,
      logo: "https://logodownload.org/wp-content/uploads/2014/09/peugeot-logo-1-1.png",
      marca: "Peugeot",
    },
    {
      index: 6,
      logo: "https://logodownload.org/wp-content/uploads/2017/10/volvo-logo-4-1.png",
      marca: "Volvo",
    },
  ];

  return (
    <ul
      id="listaMarcas"
      className="rounded-full p-5 flex flex-col w-56 items-center order-1"
    >
      {listMarcas.map((item) => {
        return (
          <li key={item.index} className="flex flex-col items-center">
            <img className="max-w-full" src={item.logo} alt={item.marca} />
          </li>
        );
      })}
    </ul>
  );
};
