import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Footer() {
  return (
    <footer>
        <img src="" alt="" />
        <div>
            <ul>
                <li>Accueil</li>
                <li>A Propos</li>
                <li>Mes réalisations</li>
            </ul>
        </div>
        <p>Contact</p>
        <p>rackel.sorel0613@gmail.com</p>
        <p>06 18 77 64 19</p>
        <ul>
            <li>Be</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
        </ul>
    </footer>
  );
}