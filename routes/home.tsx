import { Footer } from "../components/Footer.tsx";

// routes/about.tsx

export default function AboutPage() {
    return (
        <div>
            <header>
                <h2>Maëlly <br/> Sorel</h2>
                <h1>Designeuse graphique</h1>
                <p>Mes réalisations</p>
                <ul>
                    <li>Be</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                </ul>
            </header>

            <main>
                <img src="/profil.png" alt="" />
                <h2>A propos de moi</h2>
                <p>Salut et bienvenue sur mon site &nbsp;!
                    Moi c'est Maëlly et je suis une jeune designeuse graphique encore en formation.
                    Je suis également auto entrepreneuse depusi peu spécialiser dans l'UX/UI et le branding.
                    Vous retrouverez ici ce dont je suis capable, ce que j'ai à vous proposer et ce que j'ai déjà pu réaliser.
                    A plus tard !!
                </p>
                <button><a href="#">Mon CV</a></button>
            </main>

            <section>

            </section>
            <Footer></Footer>
        </div>
    );
  }