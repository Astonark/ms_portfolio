import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function NuevoMundo() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center items-center mt-12 md:mt-32">
                <img src="/images/projects/nuevo_mundo/logo.png" alt="" class=""/>
                <div class="text-center">
                    <span class="text-left inline-block mx-6 md:w-1/3">
                        <h2 class="mt-6 text-xl mx-6 md:text-5xl mb-3 md:mb-6">Création de la DA de la nouvelle édition du Festival Tomorrowland : </h2>
                        <ul class="text-s mx-6 list-disc list-inside mb-6">
                            <li>Choix de Direction Artistique</li>
                            <li>Création d'une affiche 4/3</li>
                            <li>Affiche Poster</li>
                            <li>Pochette vynile</li>
                            <li>Dépliant</li>
                            <li>Journal</li>
                            <li>Produits dérivés</li>
                            <li>Boites du festival avec son bracelet</li>
                            <li>Teaser annoncant la nouvelle DA</li>
                            <li>Animation en motion du logo</li>
                        </ul>
                    </span>
                </div>

            <div class="mx-3">
                <img src="/images/projects/nuevo_mundo/poster.jpg" alt=""/>
                <img src="/images/projects/nuevo_mundo/vinyle.jpg" alt="" class="my-3"/>
                <img src="/images/projects/nuevo_mundo/banner.jpg" alt="" class="my-3"/>
            </div>
                <div class="text-center">
                    <p class="text-left inline-block mx-12 md:text-2xl my-6">
                        La direction artistique plongera les spectateurs dans un monde irréel, à échelle démesurée pour vivre une expérience immersive. <br/>
                        Ils seront entourés d'animaux volants, imaginaires et surnaturelles. <br/>
                        De plus, le concept tourne de l'oeuf de Dali présent dans ses oeuvres et sur le toit de son musée en Espagne
                    </p>
                </div>
            <div class="mx-3">
                <img src="/images/projects/nuevo_mundo/music_box.jpg" alt=""/>
                <img src="/images/projects/nuevo_mundo/half_open_box.png" alt="" class="my-3"/>

                <div class="grid gap-4 grid-cols-2 grid-rows-2">
                    <img src="/images/projects/nuevo_mundo/closed_up_box.png" alt="" />
                    <img src="/images/projects/nuevo_mundo/bracelet.png" alt="" />
                    <img src="/images/projects/nuevo_mundo/box_bracelet.png" alt="" />
                    <img src="/images/projects/nuevo_mundo/closed_box.png" alt="" />
                </div>
                <img src="/images/projects/nuevo_mundo/scan.png" alt="" class="my-3"/>
            </div>
            </main>
            <Footer></Footer>
        </>
    );
}