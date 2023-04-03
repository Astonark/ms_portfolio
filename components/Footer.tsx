export function Footer() {
  return (
    <footer class="relative">
        <img src="/footer.png" alt="image de footer" width="100%"/>
        <ul class="absolute right-0 bottom-0 md:right-1/3 md:bottom-60">
            <li class="text-white md:text-4xl mb-6 font-medium">Accueil</li>
            <li class="text-white md:text-4xl mb-6 font-medium">A propos</li>
            <li class="text-white md:text-4xl font-medium">Mes réalisations</li>
        </ul>
        <div class="bg-[#4F7158] md:absolute right-0 bottom-0 md:right-64 md:bottom-64">
            <p class="text-white md:text-xl">
                <img src="images/icons/mail_icon.png" alt="mail icon" class="inline mr-2" />
                <a href="mailto:rackel.sorel0613@gmail.cocm">rackel.sorel0613@gmail.com</a>
            </p>
            <p class="text-white text-xs md:text-xl mt-6">
                <img src="images/icons/phone_icon.png" alt="telephone icon" class="inline mr-2" />
                06 18 77 64 19
            </p>
            <ul class="flex mt-6">
                <li><img src="images/icons/white_behance.png" alt="Behance" width="20" height="20" class="mr-5"/></li>
                <li><img src="images/icons/white_linkedin.png" alt="LinkedIn" width="20" height="20" class="mr-5"/></li>
                <li><img src="images/icons/white_instagram.png" alt="Instagram" width="20" height="20"/></li>
            </ul>
        </div>
    </footer>
  );
}