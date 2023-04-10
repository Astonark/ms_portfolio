import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function SalsaLoca() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center items-center mt-12 md:mt-30">
                <img src="/images/projects/salsa_loca/side.png" alt="" class="absolute left-0 top-96 md:hidden"/>
                <img src="/images/projects/salsa_loca/side_desktop.png" alt="" class="absolute left(-20) top-60 hidden md:block"/>
                <img src="/images/projects/salsa_loca/logo.png" alt="" class="md:hidden"/>
                <img src="/images/projects/salsa_loca/logo_desktop.png" alt="" class="hidden md:block"/>
                <div class="text-center md:flex md:justify-center">
                    <span class="text-left inline-block mx-6 md:mx-0 md:w-1/3">
                        <h2 class="mt-3 text-xl mx-6 md:text-5xl mb-3 md:mb-6 font-['Lexend']">Création d'une dark kitchen à implanté dans le centre de Nantes&nbsp;: </h2>
                        <ul class="text-s mx-6 list-disc list-inside mb-6 font-['Lexend']">
                            <li>Processus de design thiking</li>
                            <li>Étude XU</li>
                            <li>Création de l'identité visuel dans sa totalit</li>
                            <li>Logo, typographie retravaillé à la main</li>
                            <li>Site internet</li>
                        </ul>
                    </span>
                    <img src="/images/projects/salsa_loca/website.png" alt="" class="hidden md:block"/>
                </div>

                <img src="/images/projects/salsa_loca/website.png" alt="" class="md:hidden"/>
                <div class="text-center md:flex md:justify-center">
                    <img src="/images/projects/salsa_loca/homepage.png" alt="" class="hidden md:block w-1/6" height="auot"/>
                    <p class="text-left inline-block mx-12 md:text-2xl my-6 md:w-1/3 font-['Lexend']">
                        Salsa Loca est une dark kitchen situé à Nantes, ayant pour spécialité la cuisine mexicaine qui se distingue par divers éléments : <br/>
                        - Des plats délicieux et autentiques <br/>
                        - Des ingrédients frais et de qualité <br/>
                        - Un menu large et de varié <br/>
                        - Une ambiance conviviale et chaleureuse <br/>
                    </p>
                </div>
                <img src="/images/projects/salsa_loca/divices_mockup.png" alt="" class="mb-6 md:w-7/12"/>
                <img src="/images/projects/salsa_loca/homepage.png" alt="" class="md:hidden" width="60%" height="auot"/>
            </main>
            <Footer></Footer>
        </>
    );
  }