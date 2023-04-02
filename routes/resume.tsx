import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

export default function Resume() {
    return (
        <div>
            <Navbar></Navbar>
           <img class="m-auto" src="/resume.png" alt="" />
           <Footer></Footer>
        </div>
    );
}

