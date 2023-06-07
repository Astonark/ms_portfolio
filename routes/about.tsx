import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

export default function About() {
    return (
        <div>
            <p>Salut tout le monde</p>
            <Navbar></Navbar>
           <img class="m-auto md:hidden" src="images/resume.png" alt="mon cv" />
           <img class="m-auto hidden md:block" src="images/resume_desktop.png" alt="mon cv" />
           <Footer></Footer>
        </div>
    );
}

