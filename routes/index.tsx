import { Button } from "../components/Button.tsx";
import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function Home() {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <div class="md:flex md:justify-center md:mt-16">
                    <div class="mt-12 pt-20 text-center">
                        <h1 class="text-5xl md:text-9xl font-bold">Maëlly <br/> Sorel</h1>
                        <h2 class="text-4xl mb-3">Designeuse graphique</h2>
                        <Button>Mes réalisations</Button>
                        <ul class="flex mt-3 justify-center">
                            <li><img src="images/icons/behance.png" alt="Behance" width="48" height="48" class="mr-5"/></li>
                            <li><img src="images/icons/linkedin.png" alt="LinkedIn" width="48" height="48" class="mr-5"/></li>
                            <li><img src="images/icons/instagram.png" alt="Instagram" width="48" height="48"/></li>
                        </ul>
                    </div>
                    <img src="/banner_logo.png" alt="" />
                </div>
            </header>

            <main class="md:flex justify-center items-center mt-32">
                <img src="/profil2.png" alt="Photo de profil" class="mr-20"/>
                <span class="w-1/3">
                    <h2 class="text-5xl mb-6">À propos de moi</h2>
                    <p class="text-2xl mb-6">Salut et bienvenue sur mon site &nbsp;! <br/>
                        Moi c'est Maëlly et je suis une jeune designeuse graphique encore en formation. <br/>
                        Je suis également auto entrepreneuse depusi peu spécialiser dans l'UX/UI et le branding. <br/>
                        Vous retrouverez ici ce dont je suis capable, ce que j'ai à vous proposer et ce que j'ai déjà pu réaliser. <br/>
                        A plus tard !!
                    </p>
                    <Button><a href="#">Mon CV</a></Button>
                </span>
            </main>

            <section class="mt-40">
                <h2 class="text-center text-4xl font-semibold mb-6">Mes réalisations</h2>
                <div class="grid gap-4 grid-cols-2 grid-rows-3 mx-6">
                    <div><img src="images/projects/salsa_loca.png" alt="Salsa Loca" /></div>
                    <div><img src="images/projects/on_fleek.png" alt="" /></div>
                    <div><img src="images/projects/pok.png" alt="" /></div>
                    <div><img src="images/projects/natur_emois.png" alt="" /></div>
                    <div><img src="images/projects/neopace.png" alt="" /></div>
                    <div><img src="images/projects/nuevo_mundo.png" alt="" /></div>
                    <div><img src="images/projects/nebula.png" alt="" /></div>
                    <div><img src="images/projects/illustrations.png" alt="" /></div>
                    <div><img src="images/projects/" alt="" /></div>
                </div>
                <div class="text-center mt-6"><Button>En savoir plus</Button></div>
            </section>
            <Footer></Footer>
        </div>
    );
  }