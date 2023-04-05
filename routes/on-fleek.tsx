import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function OnFleek() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center items-center mt-12 md:mt-32">
                <img src="/images/projects/on_fleek/side.png" alt="" class="absolute left-0 top-96"/>
                <img src="/images/projects/on_fleek/logo.png" alt="" class=""/>
                <div class="text-center">
                    <span class="text-left inline-block mx-6 md:w-1/3">
                        <h2 class="mt-6 text-xl mx-6 md:text-5xl mb-3 md:mb-6">Création d'un festival Afro-Américain&nbsp;: </h2>
                        <ul class="text-s mx-6 list-disc list-inside mb-6">
                            <li>Idéation</li>
                            <li>Création du logo ainsi que de la chartre graphique</li>
                            <li>Création des visuels de communications</li>
                            <li>Site internet</li>
                            <li>Campagne sur les réseaux sociaux</li>
                        </ul>
                    </span>
                </div>

                <img src="/images/projects/on_fleek/banner.png" alt="" class=""/>
                <img src="/images/projects/on_fleek/website.png" alt="" class=""/>
            </main>
            <Footer></Footer>
        </>
    );
  }