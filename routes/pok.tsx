import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function Pok() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center items-center mt-12 md:mt-32">
                <img src="/images/projects/pok/logo.png" alt="" class=""/>
                <div class="flex mt-12">
                    <img src="/images/projects/pok/pok.png" alt="" class="md:hidden"/>
                    <img src="/images/projects/pok/qr.png" alt="" class="md:hidden" />
                    <img src="/images/projects/pok/group.png" class="hidden md:block" />
                </div>
                <div class="text-center text-left">
                    <span class="text-left inline-block mx-6">
                        <h2 class="mt-6 text-xl mx-6 md:text-5xl mb-3 md:mb-6 font-['Lexend']">Création d'une agence de design, POK&nbsp;: </h2>
                        <ul class="text-s mx-6 list-disc list-inside mb-6 font-['Lexend']">
                            <li>Définition d'un besoin et de la cible de l'agence</li>
                            <li>Création de l'identité de l'entreprise</li>
                            <li>Site internet</li>
                            <li>Communication sur les réseaux sociaux</li>
                            <li>Démarcharge clients</li>
                        </ul>
                    </span>
                </div>

                <img src="/images/projects/pok/poster.png" alt="" class="md:hidden"/>
                <img src="/images/projects/pok/banner.png" alt="" class="my-3 md:hidden"/>
                <img src="/images/projects/pok/contact.png" alt="" class="md:hidden"/>
                <img src="/images/projects/pok/pages.png" alt="" class="hidden md:block"/>
            </main>
            <Footer></Footer>
        </>
    );
  }