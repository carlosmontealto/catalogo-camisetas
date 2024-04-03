"use client";
import { ChevronDownIcon, FilterIcon } from "lucide-react";
import { useState } from "react";

const Filter = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsActive(!isActive)}
          className="items-center inline-flex w-full justify-center gap-x-1.5 rounded-full bg-zinc-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-zinc-300"
        >
          <h2>Filtro</h2>
          <FilterIcon />
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
      <div>
        <ul className={isActive ? "block relative" : "hidden relative"}>
          <form
            action=""
            className="absolute bg-zinc-200 rounded-md shadow-md mt-2 p-2 w-60"
          >
            <li className="">
              <p>Filtrar por cor: </p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Preto"
                >
                  Preto
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Branco"
                >
                  Branco
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Cinza"
                >
                  Cinza
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Verde"
                >
                  Verde
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Azul"
                >
                  Azul
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Rosa"
                >
                  Rosa
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Vermelho"
                >
                  Vermelho
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Laranja"
                >
                  Laranja
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Amarelo"
                >
                  Amarelo
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?color=Marrom"
                >
                  Marrom
                </a>
              </div>
            </li>
            <li className="mt-4">
              <p>Filtrar por tamanho: </p>
              <div className="grid grid-cols-3 gap-1 mt-2">
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?size=P"
                >
                  P
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?size=M"
                >
                  M
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?size=G"
                >
                  G
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?size=GG"
                >
                  GG
                </a>
                <a
                  className="py-1 px-2 bg-purple-700 text-zinc-100 rounded-full text-center"
                  href="/products?size=XGG"
                >
                  XGG
                </a>
              </div>
            </li>
          </form>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
