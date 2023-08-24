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
                <img src="/images/projects/pok/logo.png" alt="" class="lg:hidden"/>
                <div class="flex lg:mt-0 mt-12">
                    <img src="/images/projects/pok/banner_mobile.png" alt="" class="scale-125 mb-6 lg:hidden"/>
                    <img src="/images/projects/pok/logo_desktop.png" alt="" class="hidden lg:mr-24 lg:object-contain lg:block lg:-mt-96"/>
                    <img src="/images/projects/pok/banner_desktop.png" class="hidden lg:block lg:mt-24"/>
                </div>
                <div class="text-center text-left lg:absolute lg:-mt-96 lg:left-36 lg:w-6/12">
                    <span class="text-left inline-block mx-6">
                        <h2 class="mt-6 lg:mt-0 text-xl mx-6 lg:mx-0 lg:text-5xl mb-3 md:mb-6 font-['Lexend']">Création d'une agence de design, POK&nbsp;: </h2>
                        <ul class="lg:text-2xl mx-6 lg:mx-0 list-disc list-inside mb-6 font-['Lexend']">
                            <li>Définition d'un besoin et de la cible de l'agence</li>
                            <li>Création de l'identité de l'entreprise</li>
                            <li>Site internet</li>
                            <li>Communication sur les réseaux sociaux</li>
                            <li>Démarcharge clients</li>
                        </ul>
                    </span>
                </div>

                <img src="/images/projects/pok/group_desktop.png" alt="" class="hidden lg:block lg:mt-12"/>
                
                <img src="/images/projects/pok/poster.png" alt="" class="lg:hidden"/>
                <img src="/images/projects/pok/banner.png" alt="" class="py-12 lg:hidden"/>
                <img src="/images/projects/pok/contact.png" alt="" class="lg:hidden"/>
            </main>
            <Footer></Footer>
        </>
    );
  }