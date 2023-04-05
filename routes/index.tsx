import { Button } from "../components/Button.tsx";
import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function Home() {
    return (
        <>
            <header>
                <Navbar></Navbar>
                <div class="flex flex-col items-center md:justify-center md:mt-16">
                    <div class="md:mt-12 pt-20 mx-6">
                        <h1 class="text-5xl md:text-9xl font-bold">Maëlly <br/> Sorel</h1>
                        <h2 class="text-4xl mb-3">Designeuse graphique</h2>
                        <Button><a href="/#reals">Mes réalisations</a></Button>
                        <ul class="flex mt-3 md:justify-center">
                            <li><img src="images/icons/behance.png" alt="Behance" width="35 md:48" height="35 md:48" class="mr-5"/></li>
                            <li><img src="images/icons/linkedin.png" alt="LinkedIn" width="35 md:48" height="35 md:48" class="mr-5"/></li>
                            <li><img src="images/icons/instagram.png" alt="Instagram" width="35 md:48" height="35 md:48"/></li>
                        </ul>
                    </div>
                    <img src="/banner_logo.png" alt="" class="hidden"/>
                </div>
            </header>

            <main class="flex flex-col justify-center items-center mt-12 md:mt-32">
                <img src="/profil2.png" alt="Photo de profil" class="md:mr-20" width="250" height="auto"/>
                <span class="text-center md:w-1/3">
                    <h2 class="text-s font-bold mt-3 text-xl md:text-5xl mb-3 md:mb-6">À propos de moi</h2>
                    <p class="text-s mx-6 md:text-2xl mb-6">Salut et bienvenue sur mon site &nbsp;! <br/>
                        Moi c'est Maëlly et je suis une jeune designeuse graphique encore en formation. <br/>
                        Je suis également auto entrepreneuse depusi peu spécialiser dans l'UX/UI et le branding. <br/>
                        Vous retrouverez ici ce dont je suis capable, ce que j'ai à vous proposer et ce que j'ai déjà pu réaliser. <br/>
                        A plus tard !!
                    </p>
                    <Button><a href="/about">En savoir plus</a></Button>
                </span>
            </main>

            <section class="mt-20 md:mt-40">
                <h2 class="text-center text-4xl font-semibold mb-6" id="reals">Mes réalisations</h2>
                <div class="grid gap-4 grid-cols-2 grid-rows-3 mx-6">
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
                    <div><img src="images/projects/pok.png" alt="" /></div>
                    <div><img src="images/projects/natur_emois.png" alt="" /></div>
                    <div><img src="images/projects/neopace.png" alt="" /></div>
                    <div><img src="images/projects/nuevo_mundo.png" alt="" /></div>
                    <div><img src="images/projects/nebula.png" alt="" /></div>
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