import { Button } from "./Button.tsx";

export function Navbar() {
  return (
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
          <li class="font-medium text-s md:text-3xl">À propos de moi</li>
          <li class="font-medium text-s ml-3 md:text-3xl md:ml-20">Réalisations</li>
          <li class="mx-3 md:mx-20"><Button><a href="/contact">Contact</a></Button></li>
        </span>
     </ul>
    </nav>
  );
}