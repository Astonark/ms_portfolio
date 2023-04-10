import { Button } from "./Button.tsx";

export function Navbar() {
  return (
    <>
      <head>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap');
        </style>
      </head>
      <nav>
        <ul class="flex justify-between items-center mt-7 md:mt-14">
          <li>
            <a href="/">
              <img
                src="/logo.svg"
                class="w-14 h-auto ml-3 md:w-24 md:h-20 md:ml-20"
                alt="cactus"
              />
            </a>
          </li>
          <span class="flex items-center">
            <li class="font-medium text-s md:text-3xl">
              <a href="/about">À propos de moi</a>
            </li>
            <li class="font-medium text-s ml-3 md:text-3xl md:ml-20">
              <a href="/#reals">Réalisations</a>
            </li>
            <li class="mx-3 md:mx-20"><Button><a href="/contact">Contact</a></Button></li>
          </span>
      </ul>
      </nav>
    </>
  );
}