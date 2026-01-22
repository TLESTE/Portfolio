import "./Home.css"
import pp from "../assets/pppro.png"
import { useNavigate } from "react-router-dom";
import cv from '../assets/CV LESTE Théo.pdf';

function Home(){
    const navigate =useNavigate();
    const toPHACAV=()=>{
        navigate("/projects/PHACAV");
    };
    const toSwipe=()=>{
        navigate("/projects/Swipe");
    };
    const ToLikIn=()=>{
        window.open("https://www.linkedin.com/in/théo-leste-534396269/","_blank")
    }
    
    return(
        <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900 text-white">
            <h1 className="pt-8 mx-15 font-extrabold text-indigo-400 text-6xl text-left">Théo LESTE</h1>
            <h2 className="pb-8 mx-20 mt-2 font-extrabold text-indigo-600 text-4xl text-left">Étudiant ingénieur (ESIEA) - Développeur Data Analyst / Full Stack </h2>
            <div className="flex gap-6 mx-10 items-center">
                <div className="w-40 h-auto">
                    <img src={pp} alt="photo de profil" className="w-full h-auto"/>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="my-1 px-4 py-1.5 bg-white/10 backdrop-blur-sm py-0.5 px-2 rounded-4xl mx-3 text-white hover:bg-purple-500/30 hover:scale-105 transition-all duration-200 cursor-default" onClick={ToLikIn}>Linked In</button>
                    <a className="my-1 px-4 py-1.5 bg-white/10 backdrop-blur-sm px-0.5 py-0.5 text-center rounded-4xl mx-3 text-white hover:bg-purple-500/30 hover:scale-105 transition-all duration-200 cursor-default" href="mailto:leste@et.esiea.fr?subject=Suite%20%C3%A0%20votre%20postulation&body=Bonjour%20Th%C3%A9o%2C%20">leste@et.esiea.fr</a>
                    <a className="my-1 px-4 py-1.5 bg-white/10 backdrop-blur-sm py-0.5 px-2 text-center rounded-4xl mx-3 text-white hover:bg-purple-500/30 hover:scale-105 transition-all duration-200 cursor-default" href="tel:+33783649359">+33 (0)7 83 64 93 59</a>
                </div>
            </div>
                <div className="mx-7">
                    <ul className="list-disc my-7 mx-5">  
                        <li>Français : Natif</li>
                        <li>Anglais : Professionnel basique (TOEIC 915/990) </li>
                        <li>Italien : En cours d'apprentissage</li>
                    </ul>
            </div>
            <div className="m-3 p-3 grid grid-cols-4 gap-y-3 text-left border rounded-sm">
                <div className="font-bold ">
                    <h2 className="text-lg">Développement Logiciel</h2>
                    <p className="font-normal">React, TS, Node, Python, Java, C</p>
                </div>
                <div className="font-bold">
                    <h2 className="text-lg">Data et base de données</h2>   
                    <p className="font-normal">Pandas, Scipy, Skimage, Scikit-learn, PostgreSQL, MongoDB, Firebase, SQL, NoSQL, R, Prolog, Hadoop, Ollama, Hugging Face </p>
                </div>
                <div className="font-bold">
                    <h2 className="text-lg">Système d'exploitation</h2>
                    <p className="font-normal">Powershell, Linux, KeyBase, VeraCrypt, Tableaux</p>
                </div>
                <div className="font-bold">
                    <h2 className="text-lg">DevOps</h2>
                    <p className="font-normal">Docker, Git, GitHub Action, GitLab CI, CI/CD</p>
                </div>
            </div>
            <h2 className="mx-2 text-xl font-semibold">Education</h2>
            <ul className="list-outside mx-4">
                <li className="mx-3">ESIEA 2022-2027</li>
                <li className="mx-3">Semestre à l'étranger à KMUTT, Bangkok 2025</li>
                <li className="mx-3">Semestre à l'étanger à Dorset College, Dublin 2023</li>
                <li className="mx-3">BTS AMCR (Architecture Métalliquen Conception et Réalisation) 2021-2022</li>
            </ul>
            
            <div className="my-3 mx-2">
                <p className="text-xl font-semibold">Bénévolat</p>
                <p className="mx-2 font-semibold">Responsable réseaux - Association Internationale ESIEA</p>
                    <p className="mx-6">Prise en charge des étudiants en échange dans le campus autour de leurs intégration, de leurs découverte de la culture française et des outils de l'école quant à l'enseignement. </p>
                <p className="mx-2 font-semibold">Responsable Communication - Bureau des sports ESIEA</p>
                    <p className="mx-6">Attributions des rôles quant au besoin de communication lié à un évenement. Vérification des solutions proposées et accord de post.</p>
                <p className="mx-2 font-semibold">Responsable Communication - Bureau des élèves ESIEA</p>
                    <p className="mx-6">Attributions des rôles quant au besoin de communication lié à un évenement. Préparation d'éléments graphique liés à l'annonce de la liste de membres lors de la réelection. </p>
            </div>
                <div className="flex flex-wrap gap-3 mx-10 mt-4">
                    {[
                        "Étudiant ingénieur (4e année)",
                        "Stage 4 mois — Avril 2025",
                        "Développement logiciel & Data",
                        "Dataviz • Data engineering • Image • BDD",
                        "Autonome • Rigoureux • Travail en équipe",
                    ].map((item) => (
                        <span
                        key={item}
                        className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm
                                    hover:bg-purple-500/30 hover:scale-105 transition-all duration-200 cursor-default"
                        >
                        {item}
                        </span>
                    ))}
                    </div>

            <p className="m-2">Vous pourrez trouver ici les projets qui m'ont le plus marqués:</p>
            <div className="grid grid-cols-2 gap-3 w-full h-auto">
                <div className="border border-purple-500/30 rounded-2xl w-full bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-102 duration-200">
                    <h2 className="py-2 mx-5 font-bold text-purple-600 text-5xl text-center mb-8">PHACAV Exoplanète</h2>
                    <p className="mx-3">Création d'une simulation d'exoplanète à partir de données réelles de la NASA en une semaine dans le cadre du challenge technique de 3ème année à l'ESIEA</p>
                    <p className="mx-6">Récupération des données</p>
                    <p className="mx-6">Calculs du bruit de Simplex</p>
                    <p className="mx-6">Simulation du climat à l'aide des données récupérées</p>
                    <p className="mx-3 font-semibold">Stack: Python, PyVista, Numpy, Pandas, Matplotlib, données ouvertes de la NASA</p>
                    <button className="flex justify-self-center place-self-end my-2 mt-6 p-1 px-2 border rounded-2xl" onClick={toPHACAV}>Voir les détails    
                    </button> 
                </div>    
                <div className="border border-purple-500/30 rounded-2xl w-full bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-102 duration-200">
                    <h2 className="py-2 mx-5 font-bold text-purple-600 text-5xl text-center">Swipe Politique</h2>
                    <h3 className="mx-4 text-2xl text-red-500 font-semibold text-center">Ce projet est en cours de développement</h3>
                    <p className="mx-3">Dans le cadre du CapProjet de l'ESIEA, nous avons, avec une équipe de 5 étudiants, créé une web-app interactive permettant à des utilisateurs tel que des jeunes à mieux comprendre leurs affinités politiques ou à s'intéresser à la politique.</p>
                    <p className="mx-3">La web-app est composée de la partie principale : un système de swipe de lois, d'une rubrique d'actualités catégorisée et d'un glossaire pour mieux comprendre les termes politiques.</p>
                    <p className="mx-6">Création et initialisation de la Firebase</p>
                    <p className="mx-6">Création de la rubrique d'informations avec filtres par catégories</p>
                    <p className="mx-3 font-semibold">Stack: React, Node, Firebase (Auth + DB), JavaScript, Swipe.js, Chart.js</p>
                    <button className="flex justify-self-center my-2 p-1 px-2 border rounded-2xl" onClick={toSwipe}>Voir les détails
                    </button>
                </div>
            </div>
            <h2 className="p-1 text-center underline">Je suis disponible pour un entretien</h2>
            <div className="flex justify-center mt-4">
                <a className="border rounded-2xl p-1 mb-2"href={cv} download>Voir mon CV</a>
            </div>
        </div>
    )
}

export default Home