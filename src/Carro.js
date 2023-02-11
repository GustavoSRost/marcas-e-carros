import React from "react";

export const Carro = ({ carro, handleCarro }) => {
  return (
    <div className="col-span-full container mx-auto">
      <a
        href="/"
        className="cursor absolute left-10 top-5"
        onClick={() => handleCarro(false)}
      >
        Voltar
      </a>

      <h1 className="text-[3rem] pl-[20px] w-full text-left  ">
        {carro.model}
      </h1>
      <div className="grid lg:grid-cols-6 overflow-hidden	">
        <div className="col-span-3 block">
          <img src={carro.img} alt={carro.model} />
        </div>
        <div className="col-span-3 max-w-full flex">
          <ul className="flex flex-col w-full">
            <li className="block p-5 last:border-0 border-b   transition-all ">
              {carro.marca}
            </li>
            <li className="block p-5 last:border-0 border-b   transition-all ">
              {carro.ano}
            </li>
            <li className="block p-5 last:border-0 border-b   transition-all ">
              {carro.tipo}
            </li>{" "}
            <li className="block p-5 last:border-0 border-b   transition-all ">
              {carro.valorAprox.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
