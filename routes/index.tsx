import { Button } from "../components/Button.tsx";
import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function Home() {
    return (
        <div>
            <header>
                <Navbar></Navbar>
                <div class="flex justify-center mt-16">
                    <div class="mt-12 pt-20">
                        <h2 class="text-9xl font-bold">Maëlly <br/> Sorel</h2>
                        <h1 class="text-5xl mb-3">Designeuse graphique</h1>
                        <Button>Mes réalisations</Button>
                        <ul class="flex mt-3">
                            <li><img src="/behance.png" alt="Behance" width="48" height="48" class="mr-5"/></li>
                            <li><img src="/linkedin.png" alt="LinkedIn" width="48" height="48" class="mr-5"/></li>
                            <li><img src="/instagram.png" alt="Instagram" width="48" height="48"/></li>
                        </ul>
                    </div>
                    <img src="/banner_logo.png" alt="" />
                </div>
            </header>

            <main class="flex justify-center items-center mt-32">
                <img src="/profil.png" alt="Photo de profil" class="mr-20"/>
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
                <h2 class="text-center text-6xl font-semibold mb-6">Mes réalisations</h2>
                <img class="mx-auto" src="/reals.png" alt="" />
                <div class="text-center mt-6"><Button>En savoir plus</Button></div>
            </section>
            <Footer></Footer>
        </div>
    );
  }