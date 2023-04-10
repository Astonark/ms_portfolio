import { Button } from "../components/Button.tsx";
import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function Home() {
    return (
        <>
            <header>
                <Navbar></Navbar>
                <div class="flex flex-col items-center md:justify-center md:flex-row">
                    <div class="pt-20 mx-6">
                        <h1 class="text-5xl md:text-9xl font-bold font-['Lexend']">Maëlly <br/> Sorel</h1>
                        <h2 class="text-3xl mb-3 font-['Lexend']">Designeuse graphique</h2>
                        <Button><a href="/#reals">Mes réalisations</a></Button>
                        <ul class="flex mt-3">
                            <li><img src="images/icons/behance.png" alt="Behance" width="35 md:48" height="35 md:48" class="mr-5"/></li>
                            <li><img src="images/icons/linkedin.png" alt="LinkedIn" width="35 md:48" height="35 md:48" class="mr-5"/></li>
                            <li><img src="images/icons/instagram.png" alt="Instagram" width="35 md:48" height="35 md:48"/></li>
                        </ul>
                    </div>
                    <img src="/banner_logo.png" alt="" class="hidden md:block md:pt-40"/>
                </div>
            </header>

            <main class="flex flex-col justify-center items-center mt-12 md:flex-row">
                <img src="/profil2.png" alt="Photo de profil" class="md:mr-20 md:hidden" width="250" height="auto"/>
                <img src="/profil2.png" alt="Photo de profil" class="md:mr-20 hidden md:block" height="auto"/>
                <span class="text-center md:text-left md:w-1/3">
                    <h2 class="font-bold mt-3 text-xl md:text-5xl mb-3 md:mb-6 font-['Lexend']">À propos de moi</h2>
                    <p class="mx-6 md:text-2xl mb-6 font-['Lexend'] md:mx-0">Salut et bienvenue sur mon site &nbsp;! <br/>
                        Moi c'est Maëlly et je suis une jeune designeuse graphique encore en formation. <br/>
                        Je suis également auto entrepreneuse depuis peu spécialiser dans l'UX/UI et le branding. <br/>
                        Vous retrouverez ici ce dont je suis capable, ce que j'ai à vous proposer et ce que j'ai déjà pu réaliser. <br/>
                        A plus tard&nbsp;!!
                    </p>
                    <Button><a href="/about">En savoir plus</a></Button>
                </span>
            </main>

            <section class="mt-20 md:mt-40">
                <h2 class="text-center text-4xl font-semibold mb-6 font-['Lexend']" id="reals">Mes réalisations</h2>
                <div class="grid gap-4 grid-cols-2 grid-rows-4 mx-6 md:grid-cols-3 md:mx-60 mt-20">
                    <div>
                        <a href="/salsa-loca">
                            <img src="images/projects/salsa_loca.png" alt="Salsa Loca" />
                        </a>
                    </div>
                    <div>
                        <a href="/on-fleek">
                            <img src="images/projects/on_fleek.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/pok">
                            <img src="images/projects/pok.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/nature-emois">
                            <img src="images/projects/natur_emois.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/neopace">
                            <img src="images/projects/neopace.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/nuevo-mundo">
                            <img src="images/projects/nuevo_mundo.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/nebula">
                            <img src="images/projects/nebula.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/illustrations">
                            <img src="images/projects/illustrations.png" alt="" />
                        </a>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
  }