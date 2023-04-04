
// routes/about.tsx

import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx"

export default function Illustrations() {
    return (
      <>
        <Navbar></Navbar>
        <main class="mt-20 md:my-20">
          <h1 class="text-5xl mb-10 font-bold text-center md:text-9xl">Mes <br/> illustrations</h1>
          <div class="grid gap-4 grid-cols-2 grid-rows-5 mx-6">
              <div><img src="images/projects/illustrations/bob_girl.jpg" alt="Salsa Loca" /></div>
              <div><img src="images/projects/illustrations/afro_girl.jpg" alt="" /></div>
              <div><img src="images/projects/illustrations/smoke_girl.png" alt="" /></div>
              <div><img src="images/projects/illustrations/sunset.jpg" alt="" /></div>
              <div><img src="images/projects/illustrations/lake.jpg" alt="" /></div>
              <div><img src="images/projects/illustrations/wind.jpg" alt="" /></div>
              <div><img src="images/projects/illustrations/arley_queen.jpg" alt="" /></div>
              <div><img src="images/projects/illustrations/jocker.jpg" alt="" /></div>
              <div><img src="images/projects/illustrations/starfire.jpg" alt="" /></div>
          </div>
        </main>
        <Footer></Footer>
      </>
    );
  }