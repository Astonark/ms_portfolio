import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function NuevoMundo() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center items-center mt-12 lg:mt-32">
                <div class="lg:absolute lg:top-52 lg:left-36">
                    <img
                        src="/images/projects/nuevo_mundo/logo.png"
                        alt=""
                        class="w-3/6 lg:w-5/12 mx-auto"
                    />
                    <div class="text-center lg:flex">
                        <span class="text-left inline-block mx-6 md:w-1/3 lg:mt-36">
                            <h2 class="mt-6 text-xl mx-6 lg:text-5xl">
                                Création de la DA de la nouvelle édition du
                                Festival Tomorrowland&nbsp;:
                            </h2>
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
                </div>
                <div class="mx-3 lg:flex lg:flex-wrap lg:justify-evenly lg:items-end lg:mt-96">
                    <img
                        src="/images/projects/nuevo_mundo/poster.jpg"
                        alt=""
                        class="lg:w-6/12 lg:order-2"
                    />
                    <img
                        src="/images/projects/nuevo_mundo/vinyle.jpg"
                        alt=""
                        class="my-3 lg:my-0 lg:w-2/6 lg:h-full lg:order-1"
                    />
                    <img
                        src="/images/projects/nuevo_mundo/banner.jpg"
                        alt=""
                        class="my-12 lg:order-3 lg:w-10/12"
                    />
                </div>

                <div class="text-center lg:flex lg:mx-28">
                    <p class="text-left inline-block mx-12 lg:text-2xl lg:w-6/12 my-6">
                        La direction artistique plongera les spectateurs dans un
                        monde irréel, à échelle démesurée pour vivre une
                        expérience immersive. <br />
                        Ils seront entourés d'animaux volants, imaginaires et
                        surnaturelles. <br />
                        De plus, le concept tourne de l'oeuf de Dali présent
                        dans ses oeuvres et sur le toit de son musée en Espagne
                    </p>
                    <img
                        src="/images/projects/nuevo_mundo/music_box.jpg"
                        alt=""
                        class="lg:w-6/12"
                    />
                </div>
                <div class="mx-3 md:mx-20 lg:flex lg:items-center">
                    <div class="lg:w-3/6 lg:mr-6">
                        <img
                            src="/images/projects/nuevo_mundo/half_open_box.png"
                            alt=""
                            class="my-3 lg:order-1"
                        />
                        <img
                            src="/images/projects/nuevo_mundo/scan.png"
                            alt=""
                            class="my-3 hidden lg:block"
                        />
                    </div>

                    <div class="grid gap-4 grid-cols-2 grid-rows-2 lg:w-6/12  lg:gap-y-5">
                        <img
                            src="/images/projects/nuevo_mundo/closed_up_box.png"
                            alt=""
                        />
                        <img
                            src="/images/projects/nuevo_mundo/bracelet.png"
                            alt=""
                        />
                        <img
                            src="/images/projects/nuevo_mundo/box_bracelet.png"
                            alt=""
                        />
                        <img
                            src="/images/projects/nuevo_mundo/closed_box.png"
                            alt=""
                        />
                    </div>
                    <img
                        src="/images/projects/nuevo_mundo/scan.png"
                        alt=""
                        class="my-3 lg:hidden"
                    />
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}
