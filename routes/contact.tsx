// routes/about.tsx

import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx"

export default function AboutPage() {
    return (
      <>
        <Navbar></Navbar>
        <main class="my-20">
          <h1 class="text-9xl font-bold text-center">Me contacter</h1>
          <div class="flex justify-center items-center mt-40">
            <img src="/profile_picture.png" alt="Photo de profil" />
            <span class="ml-20">
              <h2 class="font-medium text-5xl">Maëlly Sorel</h2>
              <h3 class="text-2xl mb-6">Designeuse Graphisqte</h3>
              <p class="text-xl">
                  <img src="images/icons/black_mail.png" alt="mail icon" class="inline mr-2" />
                  <a href="mailto:rackel.sorel0613@gmail.cocm">rackel.sorel0613@gmail.com</a>
              </p>
              <p class="text-xl">
                  <img src="images/icons/black_phone.png" alt="telephone icon" class="inline mr-2" />
                  06 18 77 64 19
              </p>
              <ul class="flex">
                <li>
                  <a href="https://www.behance.net/rackelsorel">
                    <img src="images/icons/black_behance.png" alt="Behance" width="35" height="35" class="mr-5"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/maëlly-sorel-62708221a/">
                    <img src="images/icons/black_linkedin.png" alt="Behance" width="35" height="35" class="mr-5"/>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/snwomel?igshid=YmMyMTA2M2Y=">
                    <img src="images/icons/black_instagram.png" alt="Behance" width="35" height="35" class="mr-5"/>
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </main>
        <Footer></Footer>
      </>
    );
  }