import React from "react";

export const ToggleDarkMode = (props) => {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <nav className="flex w-full place-content-between justify-end items-center h-auto">
      <h4 className={!ativo ? "text-white" : "Light"}>
        {!ativo ? "Dark" : "Light"}
      </h4>
      <div className="flex items-center py-4 font-bold">
        <label className="relative w-12 h-6 ml-4 mr-4">
          <input type="checkbox" className="opacity-0 w-0 h-0" />
          <span
            className={`absolute top-0 right-0 bottom-0 left-0 cursor-pointer rounded-2xl shadow-inner transition-all duration-300 ease-in-out before:content-[''] before:absolute before:top-[2px] before:left-[4px] before:bottom-[4px]  before:w-[18px] before:h-[18px] before:rounded-full before:transition-all before:duration-300 before:ease-in-out ${
              !ativo
                ? "before:left-[25px] before:bg-white bg-transparent border border-white"
                : "before:left-[4px] before:bg-slate-800 bg-transparent border border-slate-800"
            }`}
            onClick={() => {
              setAtivo(!ativo);
              props.toggleDarkMode();
            }}
          />
        </label>
      </div>
    </nav>
  );
};
