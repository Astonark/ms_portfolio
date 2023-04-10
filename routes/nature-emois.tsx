import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function NatureEmois() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center items-center mt-12 md:mt-32">
                <img src="/images/projects/nature_emois/side.png" alt="" class="absolute left(-3) top-60 md:hidden"/>
                <img src="/images/projects/nature_emois/side_desktop.png" alt="" class="absolute left(-3) top-60 hidden md:block"/>
                <img src="/images/projects/nature_emois/window.png" alt="" class="md:hidden"/>
                <div class="text-center md:flex md:justify-center md:mt-12">
                    <img src="/images/projects/nature_emois/window_desktop.png" alt="" class="hidden md:block w-1/5"/>
                    <span class="text-left inline-block w-2/3 md:w-1/3 mx-10 mt-60">
                        <h2 class="mt-3 text-xl md:text-5xl mb-3 md:mb-6 font-['Lexend']">Rebranding de l'indentité visuel de l'entreprise Natur'Emois : </h2>
                        <ul class="list-disc list-inside mb-6 font-['Lexend']">
                            <li>Logotype</li>
                            <li>Chartre graphique</li>
                            <li>Site internet</li>
                        </ul>
                    </span>
                </div>

                <img src="/images/projects/nature_emois/offer.png" alt="" class="md:w-5/12 md:mt-20"/>
                <img src="/images/projects/nature_emois/desktop.png" alt="" class="md:w-5/12 my-3 md:my-20"/>
                <img src="/images/projects/nature_emois/products.png" alt="" class="md:w-5/12 my-3" />
                <img src="/images/projects/nature_emois/logo.png" alt="" class="md:w-5/12"/>
            </main>
            <Footer></Footer>
        </>
    );
  }