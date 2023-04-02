import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { Button } from "./Button.tsx";

export function Navbar() {
  return (
    <nav>
      <ul class="flex justify-between mt-14">
        <li>
          <img
            src="/logo.svg"
            class="w-24 h-20 ml-20"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </li>
        <div class="flex">
          <li class="font-medium text-3xl">A propos de moi</li>
          <li class="font-medium text-3xl ml-20">Réalisations</li>
          <li class="mx-20"><Button>Contact</Button></li>
        </div>
     </ul>
    </nav>
  );
}