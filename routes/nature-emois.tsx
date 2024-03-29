import { Footer } from "../components/Footer.tsx";
import { Navbar } from "../components/Navbar.tsx";

// routes/about.tsx

export default function NatureEmois() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>

            <main class="flex flex-col justify-center w-full">
                <div class="lg:flex justify-center items-center">
                    <div class="lg:order-last">
                        <img src="/images/projects/nature_emois/logo.png" alt="Logo Natur'Emois" class="w-3/6 lg:w-full h-auto m-auto mt-12"/>
                    </div>
                    <div class="lg:w-3/6 lg:mt-20">
                        <h1 class="color text-green-950 font-semibold text-xl lg:text-5xl font-['Lexend'] mt-6 w-3/6 m-auto">Rebranding de l'indentité visuel de l'entreprise Natur'Emois&nbsp;:</h1>
                        <ul class="list-disc list-inside m-auto w-3/6 mt-6 font-['Lexend'] lg:text-xl">
                            <li>Logotype</li>
                            <li>Chartre Graphique</li>
                            <li>Site internet</li>
                        </ul>
                    </div>
                </div>

                <div class="grid gap-3 lg:gap-4 grid-cols-3 lg:grid-cols-6 grid-rows-3 mx-6 mt-12 lg:mt-36 text-center text-white">
                    <div class="bg-brown-950 rounded-md p-3 lg:py-10 shadow-2xl">
                        <p class="">Natur'Emois qu'est ce que c'est&nbsp;?</p>
                    </div>
                    <div class="bg-brown-950 rounded-md p-3 lg:py-10 shadow-2xl">
                        <p class="">L'environnement de travail</p>
                    </div>
                    <div class="bg-brown-950 rounded-md p-3 lg:py-10 shadow-2xl">
                        <span class="">Les difficultés rencontrées</span>
                    </div>
                    <div class="bg-brown-950 rounded-md p-3 lg:py-10 shadow-2xl">
                        <p class="">Les missions</p>
                    </div>
                    <div class="bg-brown-950 rounded-md p-3 lg:py-10 shadow-2xl">
                        <p class="">Les connaissances mobilisées</p>
                    </div>
                    <div class="bg-brown-950 rounded-md p-3 lg:py-10 shadow-2xl">
                        <p class="">Les compétences acquises</p>
                    </div>
                    <p class="bg-brown-950 col-span-3 lg:col-span-6 h-8 lg:py-6 rounded-md">Bilan du stage</p>
                </div>

                <div class="lg:flex lg:flex-row lg:justify-center">
                    <div class="lg:w-2/5 lg:mx-12">
                        <h2 class="text-2xl lg:text-4xl mt-12 lg:mt-20 font-semibold text-green-950 font-['Lexend'] text-center">Natur'Emois qu'est-ce <br/> que c'est&nbsp;?</h2>
                        <p class="mx-12 mt-6 text-lg lg:text-xl font-medium font-['Lexend']">Découvrez en quelques lignes l'entreprise Natur'Emois, ses services et surtout Sandra JEANNEAU&nbsp;!</p>
                        <p class="mx-12 lg:mt-20 lg:text-lg mt-6 font-['Lexend']">
                            <strong>Sandra</strong>, préparatrice en pharmacie de formation est quelqu'un de passionée et formée dans le domaine de la médecine naturelle (phytothérapie, micronutrition...). <br/>
                            C'est quelqu'un qui à le souhait d'accompagnée l'individu dans sa globalité (holistique, relation corps/esprit), 
                            selon le besoin de chacun aux cours de leur vie (environnemnt professionnel, social, personnel, état émotionnel ou mental). <br/>
                            Ellle s'éforce de savoir "comment accompagner la personne aux mieux être" et "pourquoi la maladie". Le cheminement vers la naturopathie. <br/>
                            <strong>Natur'Emois</strong> est le fruit de son travail. Elle a crée cette entreprise dans le but de pouvoir mettre ses compétences au service des autres.
                        </p>
                    </div>
                    <img src="/images/projects/nature_emois/carte_pictogrammes.png" alt="Images illustrants Natur'Emois" class="mt-6 lg:w-2/5" />
                </div>

                <div class="lg:flex lg:justify-center">
                    <section class="mx-12 lg:mx-0 lg:order-last lg:w-2/5">
                        <h2 class="text-2xl lg:text-4xl mt-12 font-semibold text-green-950 text-center">L'environnement de travail</h2>
                        <p class="mt-6 text-xl lg:text-2xl font-medium leading-9">Le stage à été réalisé en télétravail, voici comment je m'y suis pris : </p>
                        <h3 class="font-bold text-xl lg:text-2xl text-green-950 mt-6">1 Communication avec Sandra</h3>
                        <p class="leading-7 lg:text-lg">Sandra n'ayant pas de locaux pour son entreprise, nous avons dus faire du télétravail.
                            La communication avec le client étant un point primordiale dans ce type de projet, nous avons décidé de programmer des réunions par visioconférence de façon régulière pour suivre l'avancement du projet et pour que Sandra puisse nous transmettre son avis ainsi que nous reposionner sur la bonne voie si jamais notre direction ne corraispondait pas totalement avec ses attententes. <br/>
                            Nous lui avons également envoyé de nombreux mails comportant les diverses visuels des avancés de notre travail de façon à avoir un retour de sa part rapide, sans avoir à recourir à un appel vidéo. <br/>
                            De cette manière, m$eme en étant à des différents nous avons pu mener à bien ce projet sans complications.
                        </p>
                    </section>
                    <div class="flex lg:flex-col max-w-full lg:w-2/5 mx-6 lg:mx-0 my-12">
                        <img class="w-3/6 lg:w-8/12 h-auto" src="/images/projects/nature_emois/review_exemple_1.png" alt="" />
                        <img class="w-3/6 lg:w-8/12 lg:m-20 h-auto" src="/images/projects/nature_emois/review_exemple_2.png" alt="" />
                    </div>
                </div>

                <section class="lg:flex lg:items-center lg:justify-center mx-12 lg:mx-0">
                    <div class="lg:w-2/5">
                        <h3 class="font-bold text-xl lg:text-2xl text-green-950 mt-6">2 Communication avec mon binôme</h3>
                        <p class="leading-7 lg:leading-10 lg:text-lg">
                            Un travail en binôme nécessite une bonne organisation pour qu'il soit bien réalisé. 
                            Nous devions trouver un moyen de communiquer efficacement pour pouvoir accomplir le travail à faire, d'autant plus que nous étions en télétravail.
                        </p>
                        <p class="leading-7 lg:leading-10 lg:text-lg">
                            Pour nous assurer que chauqe tache sois bien réalisé et pour ne pas nous marcher sur les pied, nous avons, 
                            à l'aide de Figma, crée des listes de taches à faire et nous nous les sommes répartis de manière équitable en fonction de nos compétences respective. <br/>
                            De cette façon, nous avons pus avancer de manière autonome. 
                            Nous marquions sur le tableau commun l'avancement de nos tâches et réfléchissions à comment elles pouvaient être améliorées ou modifiées à la fin de la réalisation de chacune d'entre elles.
                        </p>
                    </div>
                    <div class="w-2/5">
                        <img src="/images/projects/nature_emois/liste_taches.png" alt="Check list des différentes tâches à effectué durant le projet" class="my-12 lg:h-auto"/>
                    </div>
                   
                </section>
                
                <section class="lg:w-10/12 lg:mx-auto lg:flex lg:flex-col">
                    <h2 class="mx-12 text-2xl lg:text-4xl mt-12 font-semibold text-green-950 text-center lg:text-left">Les difficultés rencontrées</h2>
                    <p class="mx-12 mt-6 text-xl text-2xl font-medium leading-9">
                        La plus grande difficulté de ce stage à pour ma part été de créer des illulstrations parlantes et simple à partir de termes et de notions compliquées avec lesquelles je n'était pas famillière.
                    </p>
                    <div class="lg:flex lg:flex-wrap lg:mt-20">
                        <div class="lg:w-2/5">
                            <h3 class="mx-12 font-bold text-xl lg:text-2xl text-green-950 mt-6">1 L'illustration du log</h3>
                            <p class="mx-12 leading-7 lg:leading-10 lg:text-lg">
                                Pour le logo, nous avions les critères suivants : <br/>
                                - Mettre en relation le corps et l'émotion <br/>
                                - De la rondeur mais tout en finesse <br/>
                                - Couleurs : vert, violet --> nature, fleur de lotus <br/>
                                - Mots clés : hauteur, calme, sérénité, prise de hauteur <br/>
                                - Nature = lumière, image d'autonne, réconfort, appaisement, plante arromatique (formation de préparation en pharmacie) <br/>
                                <strong>Red flag : </strong> ne pas utiliser les mots traitements et soins
                            </p>
                        </div>

                        <div class="mx-2 my-12 lg:order-last">
                            <img src="/images/projects/nature_emois/frise_logos.png" alt="Évolution du logo au fil du temps" />
                            <img src="/images/projects/nature_emois/frise_logos_2.png" alt="Évolution du logo au fil du temps" class="" />
                        </div>
                        <p class="mx-12 leading-7 lg:leading-10 lg:order-2 lg:w-2/5 lg:mt-12">
                            Suite aux premiers rendez-vous, nous avons, en accord acec les directives reçus, créé un premier logo. Pour ce faire, beaucoup de recherches ont été effectués. Pas seulement au niveau visuel, mais aussi du point de vue technique.
                            Les termes utilisés ne nous étant pas commun, nous avons du chercher la signification de certains d'entre eux pour pouvoir ensuite créer des visuels cohérents. <br/>
                            À partir de là, nous avons créer des visuels et les avons modifé au fur et à mesure des rendez-vous pour arriver à un résultat qualitatif, et satisfaisant.
                        </p>
                    </div>
                </section>

                <section class="lg:flex lg:justify-center">
                    <div class="lg:w-2/5 lg:order-last lg:mt-36">
                        <h3 class="mx-12 font-bold text-xl lg:text-4xl text-green-950 mt-6">2 Les pictogrammes</h3>
                        <p class="mx-12 leading-7 lg:leading-10 lg:text-xl">
                            Les pictogrammes avaient pour but d'illustrer les différents services que Sandra propose en tant que naturopathe. <br/>
                            Aussi petits soient-ils, ils devaient être compréhensibles d'un simple coup d'oeil et dans un style facilement déclinable pour qu'ils soient harmonieux les uns avec les autres. <br/>
                            Les 4 pictogrammes en couleurs sont quand à eux des vignettes pour des visuels très petis ainsi que pour habiller les pages et le site.
                        </p>
                    </div>
                    <div class="lg:w-2/5">
                        <img src="/images/projects/nature_emois/carte_pictogrammes_2.png" alt="Présentation de tous les pictogrammes dans différentes couleurs" />
                    </div>
                </section>


                <section class="mx-12 lg:mx-36 lg:flex lg:justify-center">
                    <div class="lg:ml-36">
                        <div class="lg:w-4/12">
                            <h2 class="mx-12 lg:mx-0 text-2xl lg:text-4xl mt-12 font-semibold text-green-950 text-center lg:text-left">Les missions</h2>
                            <ul class="ml-24 lg:ml-6 text-xl list-disc list-inside lg:text-lg">
                                <li>Logotype</li>
                                <li>Chartre Graphique</li>
                                <li>Site internet</li>
                            </ul>

                            <h3 class="font-bold text-xl lg:text-2xl text-green-950 mt-6">1 Logotype</h3>
                            <p class="leading-7 lg:leading-10 lg:text-lg">
                                La première de nos missions à été de réaliser le logo de Natur'Emois. 
                                Comme vue précédement, il a fallut beaucoup de travail pour arriver au résultat final. 
                                Le logo a ensuite été décliné sous sa forme typographique pour être plus lisible sur des petits visuels.
                            </p>
                        </div>
                        <div class="lg:flex lg:justify-center">
                            <div class="lg:w-2/5 lg:-ml-60 lg:mt-48">
                                <img src="/images/projects/nature_emois/logo_typographique.png" alt="Logo typographique de Natur'Emois" class="my-6" />
                            </div>
                            <div class="lg:w-2/5 lg:ml-12 lg:-mt-96">
                                <img src="/images/projects/nature_emois/grand_logo.png" alt="Logo typographique de Natur'Emois" />
                            </div>
                        </div>
                    </div>
                </section>

                <div class="lg:flex lg:items-center lg:mt-20 lg:mx-20">
                    <div>
                        <h3 class="mx-12 font-bold text-xl lg:text-4xl text-green-950 mt-12">2 Chartre Graphique</h3>
                        <p class="mx-12 leading-7 lg:leading-10">
                            Deuxième mission : la création de la chartre graphique. 
                            Une fois crée, elle nous a permis de décliner le logo en plusieurs couleurs et confirmer la typographie du logo. <br/>
                            La chartre graphique est une parite non négligeable dans la création d'une identité graphique, c'est elle qui va faire office de mode d'emploi pour l'utilisation du logo,
                            des coleurs et de tous les accents.
                        </p>
                    </div>

                    <div class="flex max-w-full mx-2 my-12">
                        <img src="/images/projects/nature_emois/chartre_graphique_1.png" alt="Logo typographique de Natur'Emois" class="w-3/6 h-auto mr-2"/>
                        <img src="/images/projects/nature_emois/chartre_graphique_2.png" alt="Logo typographique de Natur'Emois" class="ml-2 w-3/6 h-auto"/>
                    </div>
                </div>


                <div class="grid gap-4 gap-y-10 grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 mx-12 lg:mt-20">
                    <div>
                        <p class="text-brown-1000 font-extrabold text-sm text-center mb-6">LES COULEURS PRINCIPALES</p>
                        <img src="/images/projects/nature_emois/primary_colors.png" class="lg:w-3/6" alt="Couleurs primaires utilisées pour le projet" />
                    </div>
                    <div>
                        <p class="text-brown-1000 font-extrabold text-sm text-center mb-6">LES COULEURS SECONDAIRES</p>
                        <img src="/images/projects/nature_emois/secondary_colors.png" class="lg:w-3/6" alt="Couleurs secondaires utilisées pour le projet" />
                    </div>
                    <div>
                        <p class="text-brown-1000 font-extrabold text-sm text-center mb-6">POUR LES TITRES</p>
                        <p class="ml-6">CLASTER OLEANDER</p>
                    </div>
                    <div>
                        <p class="text-brown-1000 font-extrabold text-sm text-center mb-6">POUR LE TEXTE COURANT</p>
                        <p class="ml-6 text-xs">Montserra - regular ou <strong>bold</strong></p>
                    </div>
                </div>

                <section class="lg:flex lg:mx-12 lg:mt-20">
                    <div class="lg:order-last">
                        <h3 class="mx-12 font-bold text-xl lg:text-4xl text-green-950 mt-6 lg:mt-20">3 Maquette Web</h3>
                        <p class="mx-12 leading-7 lg:leading-10 lg:text-lg">
                            Concernant la maquette web, Sandra nous avait demandé un site uno page avec une présentation d'elle et de son métier, une rapide explication des différents aspects de son métier ainsi qu'une partie vente avec les prestations proposés et leurs tarifs.
                        </p>
                    </div>
                    <div>
                        <img src="/images/projects/nature_emois/visuel_maquette_web.png" alt="Visuels des maquettes sur ordinateur" class="mx-3 my-12" />
                    </div>
                </section>


                <div class="lg:flex">
                    <div class="lg:w-3/6">
                        <section class="mx-12">
                            <h2 class="text-2xl lg:text-4xl mt-12 font-semibold text-green-950 text-center">Les connaissances mobilisées</h2>
                            <p class="leading-7">
                                Au vue des différentes tâches à accomplir, nous avons du puisé dans toutes les connaissances que nous avions pour mener à bien le projet. <br/>
                                Connaissance acquise en cours de stage pour la plupart et d'autres grâce à nos divers projets personnels.
                            </p>
                        </section>

                        <div class="grid gap-4 grid-cols-2 grid-rows-2 my-12 mx-6 text-white text-center">
                            <div class="bg-[#B1D2D9] p-3 rounded">Capacité de synthétisation</div>
                            <div class="bg-[#B1D2D9] p-3 rounded">Recherches pertinantes</div>
                            <div class="bg-[#B1D2D9] p-3 rounded">Capacité de synthétisation</div>
                            <div class="bg-[#B1D2D9] p-3 rounded">Bonne schématisation</div>
                        </div>
                    </div>

                    <div class="lg:w-3/6">
                        <section class="mx-12">
                            <h2 class="text-2xl lg:text-4xl mt-12 font-semibold text-green-950 text-center">Les compéteces acquises</h2>
                            <p class="leading-7">
                                Travailler pour des projets de cours et des projets professionnels ne nous met pas à l'épreuve de la même façon.
                                Certaines qualités ont pris toutes leurs importances lors du stage et me seront utiles pour mes futures projets quels qu'ils soient.
                            </p>
                        </section>

                        <div class="grid gap-4 grid-cols-2 grid-rows-2 my-12 mx-6 text-white text-center">
                            <div class="bg-[#D4A344] p-3 rounded">Capacité d'illustration</div>
                            <div class="bg-[#D4A344] p-3 rounded">Communicatioin efficace</div>
                            <div class="bg-[#D4A344] p-3 rounded">Respect des deadlines</div>
                            <div class="bg-[#D4A344] p-3 rounded">Rendu propre et professionnel</div>
                        </div>
                    </div>
                </div>

                <section class="mx-12 lg:mx-36">
                    <h2 class="text-2xl lg:text-4xl mt-12 font-semibold text-green-950 font-['Lexend'] text-center lg:text-left">Bilan du stage</h2>
                    <p class="mt-6 text-lg lg:text-2xl font-medium font-['Lexend']">6 semaines de stage, qu'est-ce que l'on en retient</p>
                    <p class="leading-7 lg:leading-10">
                        Ce stage m'a' permis de réaliser l'importance d'avoir une bonne organisation. Lorsque nous travaillons pour un professionnel,
                        il est normal d'avoir des deadlines ainsi que des rendez-vous intermittent. Si tout l'avancement du projet n'a pas été planifié à l'avance avec des temps dédiés à chaque étape importante,
                        nous nous retrouvons bloqué à un moment où a un autre. Une minimisation de la charge de travail peux entrainer un retard difficle à rattraper par la suite.
                        C'est d'autant plus embêtant lorsque nous travaillons en binôme et donc que notre travail est utile pour que le collègue puisse travailler. <br></br>
                    </p>
                    <p class="leading-7 mt-3">
                        Je suis fière du réalisé. Ce stage m'a mit à l'épreuve quand à ma capacité à pouvoir répondre correctement à une demande.
                        J'ai pu me prouver que je maîtrisais les fondementaux du graphisme et que j'étais capable de m'adapter aux clients et non à mes goûts personnels,
                        tout en guidant le cleint vers quelque chose de fonctionnel et esthétique. <br></br>
                    </p>
                    <p class="leading-7 mt-3">
                        Plusieurs  rendus ont été demandé, tous différents les uns des autres. Entre un logo et un site internet, les règles à respecter ne sont pas les même. 
                        Il a donc été très formateur pour moi de pouvoir travailler sur un projet ou ces deux missions étaient à réaliser. 
                        Cela m’a permis de mettre à l’épreuve m’a polyvalence et que du bon en ai sortis&nbsp;! 
                    </p>
                    <p class="leading-7 mt-3">
                        Si je pouvais améliorer quelque chose, je changerais peut-être le temps que j’ai accorder à mes recherches. 
                        Avec le recule, beaucoup de modification ont été réalisées avant d’atteindre le résultat final. 
                        Tout ces essaies et changements auraient peut-être moindre avec des recherches plus poussés. 
                        En effet, après de nombreuse heurs de recherches, 
                        des croquis ont été fait en grand nombre et un grand travail d’expérimentation à été réaliser mais tout cela par rapport à 3 ou 4 pistes graphiques jugé intéressent et pertinentes pour le projets et le client. 
                        Il aurait peut-être été bon de réduire le nombre de piste mais de les pousser un peu plus loin pour pouvoir avoir moins de changement à faire par la suite.
                    </p>
                    <p class="leading-7 mt-3">
                        Mais encore une fois je ne regrette rien, tout cela s’apprend avec le temps et en temps que apprentis je suis plus que fière du rendu finale. 
                        Je suis convaincu que tout ce que j’ai pu faire durant ce stage me sera très précieux dans le futur.
                    </p>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
  }