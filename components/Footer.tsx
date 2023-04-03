export function Footer() {
  return (
    <footer class="relative">
        <img src="images/footer.png" alt="image de footer" width="100%"/>
        <ul class="absolute right-24 bottom-52 md:right-1/3 md:bottom-60">
            <li class="text-white md:text-4xl md:mb-6 font-medium"><a href="/">Accueil</a></li>
            <li class="text-white md:text-4xl md:mb-6 font-medium"><a href="/about">À propos</a></li>
            <li class="text-white md:text-4xl font-medium"><a href="/#reals">Mes réalisations</a></li>
        </ul>
        <div class="absolute right-6 bottom-24 md:right-64 md:bottom-64">
            <p class="text-white text-xs md:text-xl">
                <img src="images/icons/mail_icon.png" alt="mail icon" class="inline mr-2" />
                <a href="mailto:rackel.sorel0613@gmail.cocm">rackel.sorel0613@gmail.com</a>
            </p>
            <p class="text-white text-xs mt-2 md:text-xl">
                <img src="images/icons/phone_icon.png" alt="telephone icon" class="inline mr-2" />
                06 18 77 64 19
            </p>
            <ul class="flex mt-2">
                <li>
                    <a href="https://www.behance.net/rackelsorel">
                        <img src="images/icons/white_behance.png" alt="Behance" width="20" height="20" class="mr-5"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/maëlly-sorel-62708221a/">
                        <img src="images/icons/white_linkedin.png" alt="LinkedIn" width="20" height="20" class="mr-5"/>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com/snwomel?igshid=YmMyMTA2M2Y=">
                        <img src="images/icons/white_instagram.png" alt="Instagram" width="20" height="20"/>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  );
}