export function Footer() {
  return (
    <footer class="relative">
        <img src="/footer.png" alt="image de footer" width="100%"/>
        <ul class="absolute right-1/3 bottom-60">
            <li class="text-white text-4xl mb-6 font-medium">Accueil</li>
            <li class="text-white text-4xl mb-6 font-medium">A propos</li>
            <li class="text-white text-4xl font-medium">Mes réalisations</li>
        </ul>
        <div class="absolute right-64 bottom-64">
            <p class="text-white text-xl">
                <img src="/mail_icon.png" alt="mail icon" class="inline mr-2" />
                <a href="mailto:rackel.sorel0613@gmail.cocm">rackel.sorel0613@gmail.com</a>
            </p>
            <p class="text-white text-xl mt-6">
                <img src="/phone_icon.png" alt="telephone icon" class="inline mr-2" />
                06 18 77 64 19
            </p>
            <ul class="flex mt-6">
                <li><img src="/white_behance.png" alt="Behance" width="30" height="30" class="mr-5"/></li>
                <li><img src="/white_linkedin.png" alt="LinkedIn" width="30" height="30" class="mr-5"/></li>
                <li><img src="/white_instagram.png" alt="Instagram" width="30" height="30"/></li>
            </ul>
        </div>
    </footer>
  );
}