"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { RiMenu4Line } from "react-icons/ri";
import React from "react";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <header className="flex bg-preto items-center justify-between p-6 sticky top-0 left-0 z-1000">
      <div className="flex gap-1 lg:text-2xl">
        Anthoni Campos <p className="text-roxo">| Dev</p>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <RiMenu4Line className="outline-none" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="p-3 bg-preto">
            <DropdownMenuItem>
              <Scroll
                activeClass="active"
                to="inic"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer hover:text-purple-900 duration-200"
              >
                Inicio
              </Scroll>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {" "}
              <Scroll
                activeClass="active"
                to="tecs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-purple-900 duration-200"
              >
                Tecnologias
              </Scroll>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Scroll
                activeClass="active"
                to="projs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-purple-900 duration-200"
              >
                Projetos
              </Scroll>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Scroll
                activeClass="active"
                to="sobre"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-purple-900 duration-200"
              >
                Sobre
              </Scroll>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Scroll
                activeClass="active"
                to="contato"
                spy={true}
                smooth={true}
                offset={70}
                duration={500}
                className="cursor-pointer hover:text-purple-900 duration-200"
              >
                Contato
              </Scroll>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav className="hidden md:flex">
        <ul className="flex gap-8">
          <Scroll
            activeClass="active"
            to="inic"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer hover:text-purple-900 duration-200"
          >
            Inicio
          </Scroll>
          <Scroll
            activeClass="active"
            to="tecs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-purple-900 duration-200"
          >
            Tecnologias
          </Scroll>
          <Scroll
            activeClass="active"
            to="projs"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-purple-900 duration-200"
          >
            Projetos
          </Scroll>
          <Scroll
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-purple-900 duration-200"
          >
            Sobre
          </Scroll>
          <Scroll
            activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={70}
            duration={500}
            className="cursor-pointer hover:text-purple-900 duration-200"
          >
            Contato
          </Scroll>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
