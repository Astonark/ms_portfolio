import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function NatureEmois() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center">
                <img src="/images/projects/nature_emois/logo.png" alt="Logo Natur'Emois" />
                <h1>Rebranding de l'indentité visuel de l'entreprise Natur'Emois : </h1>
                <ul>
                   <li>Logotype</li>
                   <li>Chartre Graphique</li>
                   <li>Site internet</li>
                </ul>

                <div>
                    <div>
                        <p>Natur'Emois qu'est ce que c'est&nbsp;?</p>
                    </div>
                    <div>
                        <p>L'environnement de travail</p>
                    </div>
                    <div>
                        <p>Les difficultés rencontrées</p>
                    </div>
                    <div>
                        <p>Les missions</p>
                    </div>
                    <div>
                        <p>Les connaissances mobilisées</p>
                    </div>
                    <div>
                        <p>Les compétences acquises</p>
                    </div>
                    <p>Bilan du stage</p>
                </div>

                <h2>Natur'Emois qu'est-ce que c'est&nbsp;?</h2>
                <h3>Découvrez en quelques lignes l'entreprise Natur'Emois, ses services et surtout Sandra JEANNEAU&nbsp;!</h3>
                <p>
                    <strong>Sandra</strong>, préparatrice en pharmacie de formation est quelqu'un de passioné et formée dans le domaine de la médecine naturelle (phytothérapie, micronutrition...) <br/>
                    C'est quelqu'un qui à le souhait d'accompagnée l'individu dans sa globalité (holistique, relation corps/esprit), 
                    selon le besoin de chacuns aux cours de leur vie (environnemnt professionnel, social, personnel, état émotionnel ou mental). <br/>
                    Ellle s'éforce de savoir "comment accompagner la personne aux mieux être" et "pourquoi la maladie". Le cheminement vers la naturopathie.a <br/>
                    <strong>Natur'Emois</strong> est le fruit de son travail. Elle a crée cette entreprise dans le but de pouvoir mettre ses compétences au service des autres.
                </p>
                <img src="/images/projects/nature_emois/carte_pictogrammes.png" alt="" />

                <section>
                    <h2>L'environnement de travail</h2>
                    <h3>Le stage à été réalisé en télétravail, voici comment je m'y suis pris : </h3>
                    <h2>1 Communication avec Sandra</h2>
                    <p>Sandra n'ayant pas de locaux pour son entreprise, nous avons dus faire du télétravail.
                        La communication avec le client étant un point primordiale dans ce type de projet, nous avons décidé de programmer des réunions par visioconférence de façon régulière pour suivre l'avancement du projet et pour que Sandra puisse nous transmettre son avis ainsi que nous reposionner sur la bonne voie si jamais notre direction ne corraispondait pas totalement avec ses attententes. <br/>
                        Nous lui avons également envoyé de nombreux mails comportant les diverses visuels des avancés de notre travail de façon à avoir un retour de sa part rapide, sans avoir à recourir à un appel vidéo. <br/>
                        De cette manière, m$eme en étant à des différents nous avons pu mener à bien ce projet sans complications.
                    </p>
                </section>
                <div class="flex">
                    <img src="/images/projects/nature_emois/review_exemple_1.png" alt="" />
                    <img src="/images/projects/nature_emois/review_exemple_2.png" alt="" />
                </div>
            </main>

            <main class="flex flex-col justify-center items-center mt-12 md:mt-32">
                <img src="/images/projects/nature_emois/side.png" alt="" class="absolute left(-3) top-60 md:hidden"/>
                <img src="/images/projects/nature_emois/side_desktop.png" alt="" class="absolute left(-3) top-60 hidden md:block"/>
                <img src="/images/projects/nature_emois/window.png" alt="" class="md:hidden"/>
                <div class="text-center md:flex md:justify-center md:mt-12">
                    <img src="/images/projects/nature_emois/window_desktop.png" alt="" class="hidden md:block w-1/5"/>
                    <span class="text-left inline-block w-2/3 md:w-1/3 mx-10 md:mt-60">
                        <h2 class="mt-3 text-xl md:text-5xl mb-3 md:mb-6 font-['Lexend']">Rebranding de l'indentité visuel de l'entreprise Natur'Emois : </h2>
                        <ul class="list-disc list-inside mb-6 font-['Lexend']">
                            <li>Logotype</li>
                            <li>Chartre graphique</li>
                            <li>Site internet</li>
                        </ul>
                    </span>
                </div>

                <img src="/images/projects/nature_emois/offer.png" alt="" class="w-5/12 md:mt-20"/>
                <img src="/images/projects/nature_emois/desktop.png" alt="" class="w-5/12 my-3 md:my-20"/>
                <img src="/images/projects/nature_emois/products.png" alt="" class="w-5/12 my-3" />
                <img src="/images/projects/nature_emois/logo.png" alt="" class="w-5/12"/>
            </main>
            <Footer></Footer>
        </>
    );
  }