import React from "react";

export const ListaMarcas = (props) => {
  const listMarcas = [
    {
      index: 1,
      logo: "https://logosmarcas.net/wp-content/uploads/2021/04/Fiat-Logo.png",
      marca: "Fiat",
    },
    {
      index: 2,
      logo: "https://i.pinimg.com/originals/10/62/e6/1062e6ed768e0bfff7d35e1b39717693.png",
      marca: "Volkswagen",
    },
    {
      index: 3,
      logo: "https://logodownload.org/wp-content/uploads/2019/02/jeep-logo-1.png",
      marca: "Jeep",
    },
    {
      index: 4,
      logo: "https://seeklogo.com/images/C/Chevrolet-logo-E01CD324DF-seeklogo.com.png",
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
    {
      index: 7,
      logo: "https://logos-world.net/wp-content/uploads/2021/04/Renault-Logo.png",
      marca: "Renault",
    },
    {
      index: 8,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Honda.svg/2560px-Honda.svg.png",
      marca: "Honda",
    },
    {
      index: 9,
      logo: "https://logodownload.org/wp-content/uploads/2014/04/mercedes-benz-logo-4-1.png",
      marca: "Mercedes-Benz",
    },
    {
      index: 10,
      logo: "https://logodownload.org/wp-content/uploads/2016/11/audi-logo-10.png",
      marca: "Audi",
    },
    {
      index: 11,
      logo: "https://listcarbrands.com/wp-content/uploads/2016/02/Citroen-Logo-tumb.png",
      marca: "Citroën",
    },
    {
      index: 12,
      logo: "https://www.citypng.com/public/uploads/small/11662459625vtiwstv2ysenthwahzrmngzai30jmcv67yl8sy50sj5jdkv9hj0mqc3ytt1ret8c99g1jhozbyucqechoo342eoaqmeqcvbgwbbn.png",
      marca: "Hyundai",
    },
  ];

  return (
    <ul
      id="listaMarcas"
      className="rounded-full p-5 flex flex-row flex-wrap items-center justify-center order-1 gap-16 col-span-6 mb-20 lg:my-0"
    >
      {listMarcas.map((item) => {
        return (
          <li
            className={`max-w-[135px] lg:opacity-50 lg:hover:opacity-100 transition-opacity cursor-pointer ${
              props.marca === item.marca ? "lg:opacity-100" : ""
            }`}
            key={item.index}
            onClick={() => {
              props.handleMarca(item.marca);
            }}
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
  );
};
