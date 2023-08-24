import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function OnFleek() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col items-center mt-12 md:mt-32">
                <img src="/images/projects/on_fleek/logo.png" alt="" class="lg:hidden"/>
                <div class="text-center lg:flex lg:justify-evenly items-center m-auto lg:flex-wrap">
                    <img src="/images/projects/on_fleek/logo_desktop.png" alt="" class="lg:block hidden"/>
                    <img src="/images/projects/on_fleek/banner_desktop.png" alt="" class="hidden lg:block"/>

                    <span class="text-left inline-block mx-12 lg:block lg:w-full lg:ml-56">
                        <h2 class="mt-6 text-xl mx-6 lg:text-5xl mb-3 lg:w-1/3 lg:mb-6 font-['Lexend']">Création d'un festival Afro-Américain&nbsp;: </h2>
                        <ul class="text-s mx-6 list-disc list-inside mb-6 font-['Lexend']">
                            <li>Idéation</li>
                            <li>Création du logo ainsi que de la chartre graphique</li>
                            <li>Création des visuels de communications</li>
                            <li>Site internet</li>
                            <li>Campagne sur les réseaux sociaux</li>
                        </ul>
                    </span>
                </div>

                <img src="/images/projects/on_fleek/banner.png" alt="" class="lg:hidden"/>
                <img src="/images/projects/on_fleek/group.png" alt="" class="pl-6 relative lg:hidden"/>
                <img src="/images/projects/on_fleek/group_desktop.png" alt="" class="hidden lg:block lg:-mt-12"/>
            </main>
            <Footer></Footer>
        </>
    );
  }