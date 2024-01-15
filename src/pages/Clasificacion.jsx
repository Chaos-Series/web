import MainLayoutInfo from "../layout/MainLayoutInfo"

import Logo from "../assets/logos/logo-no-text.png"

export default function Clasificacion() {
    return (
        <MainLayoutInfo texto={"Clasificación"}>
            <div className="h-[3rem] flex justify-evenly items-center gap-6 bg-[var(--color-barra-header)] text-[var(--color-texto-barra-header)] font-[600]">
                <span>Split 1</span>
            </div>
            <div className="flex flex-col items-center justify-center md:mx-[12rem] h-auto text-[var(--color-texto-clasificacion)] my-8 gap-8">
                <div className="w-full text-center py-2 bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                    <div className="flex w-full justify-between items-center font-[700] text-md border-solid border-b-1 pb-2">
                        <p className="w-[20%]">Pos.</p>
                        <p className="w-[40%]">Equipo</p>
                        <p className="w-[20%]">Victorias</p>
                        <p className="w-[20%]">Derrotas</p>
                    </div>
                    <div className="flex flex-col justify-center my-6 gap-y-4 text-xl">
                        <div className="flex w-full justify-between border-dashed border-b-1 pb-4">
                            <p className="w-[20%] font-[500]">1</p>
                            <div className="flex gap-4 items-center w-[40%] justify-center">
                                <img src={Logo} className="h-8 w-8"></img>
                                <p className="font-[600]">Chaos Series</p>
                            </div>
                            <p className="w-[20%]">10</p>
                            <p className="w-[20%]">6</p>
                        </div>
                    </div>
                </div>
            </div>
        </ MainLayoutInfo>
    )
}