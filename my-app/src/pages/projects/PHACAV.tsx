import tp from "../../assets/1_topographie.png";

function PHACAV(){
    return(
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-green-900 text-white">
            <h1 className="pt-4 text-center text-6xl text-green-700 font-bold">PHACAV Simulation d'exoplanète</h1>
            <div className="grid grid-cols-2">
                <div className="mx-65 my-10 border border-green-900 rounded w-100 h-80 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="mx-4 my-2 text-xl font-bold">Contexte</h2>
                    <p className="mx-2">Ce projet a été créé en une semaine dans le cadre du challenge technique de 3ème année de l'ESIEA.</p>
                    <p className="mx-2">Les élèves se sont retrouvés en compétition afin de finir le plus rapidement possible avec le meilleur résultat dans les temps impartis</p>
                    <p className="mx-2">Chaque groupe finissant avant les autres obtenait la note maximale possible, la note baissant à chaque fois qu'un groupe terminait.</p>
                    <p className="mx-2">Les groupes ont eu une soutenance de projet à la fin de la semaine afin de présenter leurs rendus et d'expliquer leurs choix techniques.</p>
                </div>
                <div className="my-10 w-100 h-100 border  border-green-900 rounded bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="mx-4 my-2 text-xl font-bold">L'objectif</h2>
                    <p className="mx-4">Simulation modulaire générant des mondes planétaires uniques à partir de zéro.</p>
                    <p className="mx-4">Connexion à des données réelles de la NASA via l'API <a className="text-green-600" href="https://exoplanetarchive.ipac.caltech.edu" target="_blank" rel="noreferrer" >Exoplanet Archive</a>.</p>
                    <p className="mx-4">Topographie procédurale générée par un bruit de <a className="text-green-600" href="https://en.wikipedia.org/wiki/Simplex_noise" target="_blank" rel="noreferrer">Simplex multi-octaves</a>.</p>
                    <p className="mx-4">Simulation climatique par calculs basés sur la luminosité de l'étoile et de la distance orbitale avec effet de serre.</p>
                    <p className="mx-4">Cartographie des biomes en fonction des conditions locales de climat</p>
                    <p className="mx-4">Simulation des vents grâce à un modèle zonal <a className="text-green-600" href="https://pedagotech.inp-toulouse.fr/200525/co/Wiki_03_01_03.html#:~:text=Les%20cellules%20de%20Hadley%20sont,de%20grosses%20saisons%20de%20précipitation." target="_blank" rel="noreferrer">(cf)</a> et des turbulences procédurales</p>
                    <p className="mx-4">Visualisation de cartes en 2D et en 3D</p>
                </div>
                <div className="mx-65 mt-[-2.5cm] border border-green-900 rounded w-100 h-8 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <p className="font-bold text-center text-xl"><a href="https://gitlab.esiea.fr/leste/pylint-phacav" target="_blank" rel="noreferrer">Lien vers le GitLab</a></p>
                </div>
                <div className="mt-[-0.4cm] border rounded border-green-900 w-100 h-45 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="mx-4 my-2 font-bold text-xl">Technologies et Bibliothèques</h2>
                    <p className="mx-4">Python 3</p>
                    <p className="mx-4">Numpy, Scipy, OpenSimplex, Pandas</p>
                    <p className="mx-4">Matplotlib, PyVista</p>
                    <p className="mx-4"> Appels API : Requests</p>
                    <p className="mx-4">Interface en ligne de commande : Argparse</p>
                </div>
                <div className="mx-65 mt-[-5.2cm] border border-green-900 rounded w-100 h-63 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <img src={tp} alt="Topography example of the project"/>
                    <p className="mx-4 text-center"> Exemple de topographie obtenue lors du projet</p>
                </div>
                <div className="border mt-6 border-green-900 rounded w-100 h-70 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="mx-4 my-2 font-bold text-xl">Difficultés personnelles</h2>
                    <p className="mx-4 pb-2 ">Dû à une première expérience sur Python dans de telles conditions, le challenge était particulièrement difficile notamment sur: </p>
                    <ul className="list-disc mx-8">
                        <li>L'apprentissage accéléré des bibliothèques scientifiques de Python</li>
                        <li>L'organisation à avoir avec un binôme que l'on vient de rencontrer</li>
                        <li>La gestion du temps sur des horaires limités malgré l'ambition du projet</li>
                    </ul>
                </div>
                <div className="mx-65 mt-[-5.7cm] border border-green-900 rounded w-100 h-100 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="mx-4 my-2 font-bold text-xl">Réussites personnelles</h2>
                    <p className="mx-4 pb-2">Ce projet m'a été bénéfique car j'ai pu mettre en place directement les acquis que j'ai obtenus en Thaïlande au niveau des soft skills mais également sur le plan technique: </p>
                    <ul className="list-disc mx-8">
                        <li>Collaborer avec un inconnu m'a permis de me challenger et de m'assurer que j'avais bel et bien acquis la capacité de m'adapter qui que soit mon partenaire.</li>
                        <li>Les cours de Python en Machine Learning m'ont permis de garder un rythme soutenu grâce à ma familiarisation avec le langage</li>
                        <li>Réussir à soutenir un tel rush m'a permis de comprendre que je maîtrise ma gestion du temps et du stress</li>
                    </ul>
                </div>
                <div className="mt-6 border rounded border-green-900 w-100 h-43 bg-white/5 backdrop-blur-sm hover:scale-105 transition-all duration-200">
                    <h2 className="mx-4 my-2 font-bold text-xl">Mon rôle</h2>
                    <ul className="list-disc mx-8">
                        <li>Récupération les données depuis l'API NASA (Requests)</li>
                        <li>Simulation climatique (dont l'effet de serre) </li>
                        <li>Simulation des vents (par le modèle de Hadley/Ferrel) </li>
                    </ul>
                </div>
            </div> 
            <div className="pt-5">
                </div>   
        </div>
    )
}

export default PHACAV