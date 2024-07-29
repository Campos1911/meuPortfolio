import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex gap-1 text-2xl">
        Anthoni Campos <p className="text-roxo">| Dev</p>
      </div>

      <nav>
        <ul className="flex gap-8">
          <li>Inicio</li>
          <li>Tecnologias</li>
          <li>Projetos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
