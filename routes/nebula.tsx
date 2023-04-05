import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function Nebula() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center items-center mt-3 md:mt-32">
                <img src="/images/projects/nebula/logo.png" alt="" class=""/>
                <div class="text-center hidden">
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
                    <img src="/images/projects/nebula/illustration.jpg" alt=""/>
                    <img src="/images/projects/nebula/vinyle.jpg" alt="" class="my-3"/>
                    <div class="grid grid-cols-2 grid-rows-1 my-3">
                        <img src="/images/projects/nebula/book.png" alt="" />
                        <img src="/images/projects/nebula/cover.png" alt="" />
                    </div>
                    <img src="/images/projects/nebula/cd.jpg" alt="" class=""/>
                    <img src="/images/projects/nebula/poster.jpg" alt="" class="my-3"/>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}