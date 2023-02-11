import React from "react";

export const ListaCarros = (props) => {
  let carrosList = [
    {
      id: 1,
      img: "https://www.webmotors.com.br/imagens/prod/349155/FIAT_FASTBACK_1.0_TURBO_200_FLEX_AUDACE_CVT_34915512104713691.webp?s=fill&w=130&h=97&q=70&t=true)",
      marca: "Fiat",
      model: "FASTBACK IMPETUS TURBO 200 FLEX AT",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 146780,
    },

    {
      id: 6,
      img: "https://ofertas.vw.com.br/wp-content/uploads/2022/02/Taos_Highline_250_tsi_my22_34_frente_my22_preto_551x301px.png",
      marca: "Volkswagen",
      model: "Taos Highline 250 TSI",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 209190,
    },
    {
      id: 3,
      img: "https://www.webmotors.com.br/imagens/prod/348653/JEEP_COMPASS_1.3_T270_TURBO_FLEX_LONGITUDE_AT6_34865317121063494.webp?s=fill&w=130&h=97&q=70&t=true)",
      marca: "Jeep",
      model: "COMPASS SERIE S T270",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 230990,
    },
    {
      id: 5,
      img: "https://www.peugeot.com.br/content/dam/peugeot/products/1ppa/a5d4i5gc2pb/4/2023/page/profile.png",
      marca: "Peugeot",
      model: "203 Style",
      ano: 2023,
      tipo: "Hatch",
      valorAprox: 84990,
    },
    {
      id: 2,
      img: "https://www.comautovw.com/assets/uploads/nt_veiculos_cores/76747-Cor-Cinza-490-x-356.png?v=1.0",
      marca: "Volkswagen",
      model: "Polo MPI",
      ano: 2023,
      tipo: "Hatch",
      valorAprox: 84490,
    },
    {
      id: 4,
      img: "https://production.autoforce.com/uploads/version/profile_image/6956/comprar-1-0-turbo-at-pacote-pcm_ee6897a7e3.png",
      marca: "Chevrolet",
      model: "Onix",
      linha: "Plus",
      ano: 2023,
      tipo: "Sedan",
      valorAprox: 90590,
    },

    {
      id: 7,
      img: "https://www.webmotors.com.br/imagens/prod/348860/VOLVO_XC60_2.0_T8_RECHARGE_POLESTAR_ENGINEERED_AWD_GEARTRONIC_34886015411979630.webp?s=fill&w=130&h=97&q=70&t=true)",
      marca: "Volvo",
      model: "T8 PLUS XC60",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 399950,
    },
    {
      id: 8,
      img: "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtle9tsd2HtcUfp8qXGEubSJ0l3IrOB2NW5bApjtwI5ux5xQC30CQkzNBP6m7jAyvhKV5XN%25vq4t9yLRgLFYaxPoqrH1entn8wYzyoiZB5pM4FAK2Tg95Yn6PDCIDSeWHmStsd8Y%25cUfiM1XGE4JYJ0lgCVOB2PzFbApETRI5uK6MQC3vT6khQOZ9wmJSeW0h%25tXSNFUcJtAerXGEi9SJ0l8o1OB2GQnbApFUkI5uC4JQC3zg7kzN7t6m7jK2IhKUWP3IrZxD%25WLfsQVvVS%25qjuaa1frEROqEyJlfDADSjSiNsG8u4NLwaEQqE&imgt=P27&bkgnd=9&pov=BE040&uni=c&im=Crop,rect=(0,-25,1370,770),gravity=Center;Resize,width=300",
      marca: "Mercedes-Benz",
      model: "GLB SUV",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 348900,
    },
    {
      id: 9,
      img: "https://cometahyundai.com.br/assets/uploads/nt_veiculos_cores/23768-branco.png?v=1.0",
      marca: "Hyundai",
      model: "HB20",
      ano: 2023,
      tipo: "Hatch",
      valorAprox: 82790,
    },
    {
      id: 10,
      img: "https://www.citroen.com.br/content/dam/citroen/products/1csb/suh4i5gc9wb/0/2023/page/gallery/00.png",
      marca: "Citroën",
      model: "C3 FEEL 1.0 MT",
      ano: 2023,
      tipo: "Hatch",
      valorAprox: 82490,
    },
    {
      id: 11,
      img: "https://kaizenrs.com.br/storage/app/uploads/public/630/680/3b8/6306803b8ac31265294271.png",
      marca: "Honda",
      model: "New HR-V Touring",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 190900,
    },
    {
      id: 12,
      img: "https://www.peugeot.com.br/content/dam/peugeot/products/1pp8/syqp1mgc9sf/0/2023/page/gallery/gallery-02.png",
      marca: "Peugeot",
      model: "3008 GRIFFE THP AT",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 237990,
    },
    {
      id: 13,
      img: "https://primestoneautos.com.br/wp-content/uploads/2021/06/91206-Imagem-topo.png",
      marca: "Volkswagen",
      model: "T-Cross 200 TSI",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 165990,
    },
    {
      id: 14,
      img: "https://production.autoforce.com/uploads/version/profile_image/7627/model_middle_webp_comprar-at-1-0-turbo-pacote-rfa_b0b2cb75c7.png.webp",
      marca: "Chevrolet",
      model: "Tracker Premier",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 120990,
    },
    {
      id: 15,
      img: "https://pulse.fiat.com.br/content/dam/fiat/products/363/a1l/0/2023/page/hero.png",
      marca: "Fiat",
      model: "PULSE DRIVE 1.3 MT FLEX 4P",
      ano: 2023,
      tipo: "Hatch",
      valorAprox: 98990,
    },
    {
      id: 16,
      img: "https://argo.fiat.com.br/content/dam/fiat/products/358/atv/1/2023/page/hero-png/hero-806.png",
      marca: "Fiat",
      model: "ARGO DRIVE 1.3 MT FLEX 5P",
      ano: 2023,
      tipo: "Hatch",
      valorAprox: 85470,
    },
    {
      id: 17,
      img: "https://production.autoforce.com/uploads/version/profile_image/8287/comprar-prestige-45-tfsi-tiptronic_9d4e14f8a9.png",
      marca: "Audi",
      model: "Q3 Prestige 1.4",
      ano: 2023,
      tipo: "SUV",
      valorAprox: 238990,
    },
  ];
  const [carros, setCarros] = React.useState(carrosList);
  React.useEffect(() => {
    if (props.marca === "Todas") {
      setCarros(carrosList);
    } else {
      setCarros(carrosList.filter((item) => item.marca === props.marca));
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
        {carros.length ? (
          carros.map((item) => {
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
                        Tipo: <span className="font-semibold">{item.tipo}</span>
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
        ) : (
          <span
            className="mx-auto text-center
          mb-20 lg:ml-5 lg:mb-0"
          >
            Desculpe, não encontramos nenhum carro com essa marca.
          </span>
        )}
      </ul>
    </div>
  );
};
