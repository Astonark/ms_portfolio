import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function Neopace() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col lg:flex-row items-center lg:items-start mt-12">
                <div class="flex flex-col items-center">
                    <img src="/images/projects/neopace/logo.png" alt="" class="scale-50 lg:-mt-36"/>
                    <div class="text-center">
                        <span class="text-left inline-block mx-6 lg:w-3/4 lg:ml-36">
                            <h2 class="mt-6 lg:mt-0 text-xl mx-6 lg:mx-0 lg:text-5xl mb-3 lg:mb-6 font-['Lexend']">Rebranding d'un Label de musique dans l'Électro Chill : </h2>
                            <ul class="mx-6 list-disc mx-6 lg:mx-0 lg:text-2xl list-inside mb-6 font-['Lexend']">
                                <li>Logotype</li>
                                <li>Création de la direction artistique</li>
                                <li>Site internet</li>
                                <li>Déclinaisons sur les réseaux sociaux</li>
                            </ul>
                        </span>
                    </div>
                </div>

                <div class="flex flex-col w-2/3 lg:hidden">
                    <img src="/images/projects/neopace/screens.png" alt="" />
                    <img src="/images/projects/neopace/devices.png" alt="" class="my-3"/>
                </div>
                <img src="/images/projects/neopace/mobile.png" alt="" class="relative pl-20 lg:hidden"/>

                <div>
                    <img src="/images/projects/neopace/group_desktop.png" alt="images des interfaces de l'application" />
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}