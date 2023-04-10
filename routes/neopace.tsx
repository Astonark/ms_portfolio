import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function Neopace() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center items-center mt-12 md:mt-32 md:overflow-x-hidden">
                <img src="/images/projects/neopace/logo.png" alt="" class=""/>
                <div class="text-center">
                    <span class="text-left inline-block mx-6 md:w-1/3">
                        <h2 class="mt-6 text-xl mx-6 md:text-5xl mb-3 md:mb-6 font-['Lexend']">Rebranding d'un Label de musique dans l'Électro Chill : </h2>
                        <ul class="text-s mx-6 list-disc list-inside mb-6 font-['Lexend']">
                            <li>Logotype</li>
                            <li>Création de la direction artistique</li>
                            <li>Site internet</li>
                            <li>Déclinaisons sur les réseaux sociaux</li>
                        </ul>
                    </span>
                </div>

                <div class="flex flex-col w-2/3 md:hidden">
                    <img src="/images/projects/neopace/screens.png" alt="" />
                    <img src="/images/projects/neopace/devices.png" alt="" class="my-3"/>
                    <img src="/images/projects/neopace/mobile.png" alt="" class=""/>
                </div>
                <img src="/images/projects/neopace/group.png" alt="" width="70%" class="relative hidden md:block -right-72 top-0"/>
            </main>
            <Footer></Footer>
        </>
    );
}