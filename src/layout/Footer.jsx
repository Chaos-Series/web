import Logo from "../assets/logos/logo-no-text.png";

export default function Footer() {
    return (
        <footer className="px-8 bg-[url('../assets/backgrounds/prueba.webp');] bg-middle bg-cover bg-fixed">
            <div className="max-w-screen-xl py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src={Logo} className="mr-5 h-6 sm:h-[3rem]" alt="Logo" />
                        <p className="max-w-xs mt-4 text-sm text-[var(--color-texto-footer)]">
                        La Chaos Series es una competición a nivel amateur de eSports centrada en dar un formato diferente e innovador, centrado en diferenciarse de cualquier competición vista hasta ahora en este ámbito.
                        </p>
                        <div className="flex mt-8 space-x-6 text-[var(--color-texto-footer)]">
                            <a aria-label="Twitter Chaos" className="hover:opacity-75" href="https://twitter.com/ChaosSeries_" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-x-twitter text-xl"></i>
                            </a>
                            <a aria-label="Twitch Chaos" className="hover:opacity-75" href="https://www.twitch.tv/chaosseries" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-twitch text-xl"></i>
                            </a>
                            <a aria-label="YouTube Chaos" className="hover:opacity-75" href="https://www.youtube.com/@ChaosSeries" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-youtube text-xl"></i>
                            </a>
                            <a aria-label="TikTok Chaos" className="hover:opacity-75" href="https://www.tiktok.com/@chaos_series" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-tiktok text-xl"></i>
                            </a>
                            <a aria-label="Discord Chaos" className="hover:opacity-75" href="https://discord.chaosseries.com/" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-discord text-xl"></i>
                            </a>
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-[var(--color-texto-footer)]">
                            <p className="font-medium">
                                Chaos
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm">
                                <a className="hover:opacity-75" href="sobrenosotros"> Sobre Nosotros </a>
                                <a className="hover:opacity-75" href="reglamento"> Reglamento </a>
                                <a className="hover:opacity-75" href="trabajaconnosotros"> Trabaja con Nosotros </a>
                            </nav>
                        </div>
                        <div className="text-[var(--color-texto-footer)]">
                            <p className="font-medium">
                                Links
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm">
                                <a className="hover:opacity-75" href="clasificacion"> Clasificación </a>
                                <a className="hover:opacity-75" href="calendario"> Calendario </a>
                                <a className="hover:opacity-75" href="resultados"> Resultados </a>
                            </nav>
                        </div>
                        <div className="text-[var(--color-texto-footer)]">
                            <p className="font-medium">
                                Ayuda
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm">
                                <a className="hover:opacity-75" href="contacto"> Contacto </a>
                                <a className="hover:opacity-75" href="faqs"> FAQs </a>
                                <a className="hover:opacity-75" href="soporte"> Soporte </a>
                            </nav>
                        </div>
                        <div className="text-[var(--color-texto-footer)]">
                            <p className="font-medium">
                                Legal
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm">
                                <a className="hover:opacity-75" href="politicayprivacidad"> Política de Privacidad </a>
                                <a className="hover:opacity-75" href="terminosycondiciones"> Términos y Condiciones </a>
                            </nav>
                        </div>
                    </div> */}
                </div>
                <p className="mt-8 text-xs text-[var(--color-texto-footer)]">
                    ©{new Date().getFullYear()} Chaos Series
                </p>
            </div>
        </footer>
    )
}