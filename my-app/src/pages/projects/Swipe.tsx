import news from "../../assets/news.png"

function Swipe(){
    return(
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-900 text-white">
            <h1 className="text-6xl font-bold text-center text-blue-700 pt-4 ">Swipe Politique</h1>
            <div className="grid grid-cols-2">
                <div className="border rounded mx-65 my-10 w-100 h-85 border-blue-900 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="font-bold text-xl mx-4 my-2">Contexte</h2>
                    <p className="mx-4">Dans le cadre du CapProjet de l'ESIEA en 4ème année, les étudiants ont une année pour développer un projet choisi par eux-mêmes au préalable et livrer un MVP.</p>
                    <p className="mx-4">Cela a pour but d'aider quiconque le souhaite de se rapprocher de ce qu'est le concept de politique, que ce soit par pure curiosité ou pour mieux comprendre ses affinités avec certains partis.</p>
                    <p className="mx-4">Le public visé est les jeunes ayant un désintérêt pour la politique mais l'application vise aussi les journalistes qui souhaitent avoir plus d'informations.</p>
                </div>
                <div className="border rounded my-10 w-100 h-123 border-blue-900 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="font-bold text-xl mx-4 my-2">L'objectif</h2>
                    <p className="mx-4">L'objectif à terme est de proposer un MVP contenant les diverses features auxquelles le groupe a réfléchi comme ajout à l'application.</p>
                    <p className="mx-4">Le projet se présentera comme une web-app interactive avec un système de swipe de cartes contenant des lois auxquelles les utilisateurs pourront indiquer s'ils sont pour, contre ou neutres.</p>
                    <p className="mx-4">L'application aura également une rubrique d'actualités catégorisées par thème avec un système de filtres, une redirection vers la source et une vérification par IA ou par un humain.</p>
                    <p className="mx-4">Pour finir, il y aura un glossaire afin que les utilisateurs puissent comprendre le lexique politique, accompagné d'un quiz de 15 minutes hebdomadaire pour vérifier ses connaissances.</p>
                    <p className="mx-4">Les données non sensibles sont stockées dans Firebase</p>
                </div>
                <div className="border rounded mx-65 w-100 h-10 mt-[-4.4cm] border-blue-900 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="font-bold text-xl mx-4 my-1"><a href="https://github.com/TLESTE/Swiper-Policitic" target="_blank" rel="noreferrer">Lien vers le GitHub</a></h2>
                </div>
                <div className="border rounded w-100 h-33 mt-[-0.3cm] border-blue-900 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="font-bold text-xl mx-4 my-2">Technologies</h2>
                    <p className="mx-4">React, Vite, Tailwindcss</p>
                    <p className="mx-4">Firebase (Auth/DB)</p>
                    <p className="mx-4">Swipe.js, Chart.js</p>
                </div>
                <div className="mx-65 border rounded w-100 h-146 mt-[-5.7cm] border-blue-900 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <img src={news} alt="news board"/>
                    <p className="mx-4 text-center">Rubrique news avec catégorie et vérification par IA ou humain</p>
                </div>
                <div className="border rounded w-100 h-70 mt-7 border-blue-900 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="font-bold text-xl mx-4 my-2">Difficultés personnelles</h2>
                    <ul className="list-disc mx-8">
                        <li>C'était difficile d'apprendre Javascript, React et Tailwind en très peu de temps avec des deadlines serrées.</li>
                        <li>Il a fallu s'adapter avec une équipe de 4 inconnus sous la pression d'un projet complexe et ambitieux</li>
                        <li>La répartition des tâches était très confuse au début, ce qui rendait la charge de travail parfois inutile </li>
                    </ul>
                </div>
                <div className="border rounded mx-65 w-100 h-43 mt-8 border-blue-900 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="mx-4 my-2 font-bold text-xl">Réussites personnelles</h2>
                    <ul className="list-disc mx-8">
                        <li>Le teambuilding avec l'équipe s'est fait sans accroc</li>
                        <li>Je maîtrise désormais les bases de React</li>
                        <li>Je comprends les concepts de Full Stack sans avoir eu de cours sur le sujet</li>
                    </ul>
                </div>
                <div className="border rounded w-100 h-33 mt-[-0.9cm] border-blue-900 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="text-xl font-bold mx-4 my-2">Mon rôle</h2>
                    <ul className="list-disc mx-8">
                        <li>Mise en place de Firebase (Auth/DB)</li>
                        <li>Création de la rubrique d'actualités</li>
                        <li>Améliorations du glossaire</li>
                    </ul>
                </div>
            </div>
            <div className="py-4">
            </div>
        </div>
        
    )
}
export default Swipe;