import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function OnFleek() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col md:flew-row justify-center items-center mt-12 md:mt-32">
                <img src="/images/projects/on_fleek/logo.svg" alt="" class="w-2/12"/>
                <div class="text-center md:flex md:justify-center md:mt-20">
                    <img src="/images/projects/on_fleek/banner.png" alt="" class="hidden md:block"/>
                    <span class="text-left inline-block mx-6 md:w-1/3">
                        <h2 class="mt-6 text-xl mx-6 md:text-5xl mb-3 md:mb-6 font-['Lexend']">Création d'un festival Afro-Américain&nbsp;: </h2>
                        <ul class="text-s mx-6 list-disc list-inside mb-6 font-['Lexend']">
                            <li>Idéation</li>
                            <li>Création du logo ainsi que de la chartre graphique</li>
                            <li>Création des visuels de communications</li>
                            <li>Site internet</li>
                            <li>Campagne sur les réseaux sociaux</li>
                        </ul>
                    </span>
                </div>

                <img src="/images/projects/on_fleek/banner.png" alt="" class="md:hidden"/>
                <img src="/images/projects/on_fleek/website.png" alt="" class="md:hidden"/>
                <img src="/images/projects/on_fleek/group.png" alt="" class="hidden md:block w-7/12 relative -right-[370px]"/>
            </main>
            <Footer></Footer>
        </>
    );
  }