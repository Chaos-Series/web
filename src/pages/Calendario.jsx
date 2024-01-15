import MainLayoutInfo from "../layout/MainLayoutInfo"

import Logo from "../assets/logos/logo-no-text.png"

export default function Calendario() {
    return (
        <MainLayoutInfo texto={"Resultados"}>
            <div className="h-[3rem] flex justify-evenly items-center gap-6 bg-[var(--color-barra-header)] text-[var(--color-texto-barra-header)] font-[600]">
                <button><i className="fa-solid fa-angles-left hover:right-1 relative transition-all"></i></button>
                <span>Jornada 1</span>
                <button><i className="fa-solid fa-angles-right hover:left-1 relative transition-all"></i></button>
            </div>
            <div className="flex flex-col items-center justify-center mx-[12rem] h-auto text-[var(--color-texto-fichapartido)] my-8 gap-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="h-[30rem] w-[22rem] lg:h-[10rem] lg:w-[40rem] lg:pr-8 flex flex-col lg:flex-row justify-evenly lg:justify-between px-4 bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <div className="flex flex-col justify-center items-center">
                            <img src={Logo} className="w-[5rem]" alt="Equipo1" />
                            <p className="text-sm pt-2">{"Chaos Series"}</p>
                        </div>
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <p className="text-[var(--color-texto-hightlight-resultados)] text-3xl font-[900]">1 : 0</p>
                            <p className="text-lg font-[400]">30/08/2023</p>
                            <p className="text-xl font-[600]">Detalles del partido</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src={Logo} className="w-[5rem]" alt="Equipo1" />
                            <p className="text-sm pt-2">{"Chaos Series"}</p>
                        </div>
                    </div>
                    <div className="h-[5rem] w-[22rem] lg:h-[10rem] lg:w-[10rem] flex flex-col lg:flex-row justify-evenly lg:justify-between px-4 bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)]">
                        <div className="flex justify-evenly lg:justify-between items-center w-full lg:px-3">
                            <i className="fa-brands fa-youtube text-4xl"></i>
                            <i className="fa-brands fa-twitch text-4xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </ MainLayoutInfo>
    )
}