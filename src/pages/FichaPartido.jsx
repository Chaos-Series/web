import MainLayoutInfo from "../layout/MainLayoutInfo"

import toplane from "../assets/league/roles/lol_top.webp"
import jungle from "../assets/league/roles/lol_jungle.webp"
import mid from "../assets/league/roles/lol_mid.webp"
import adc from "../assets/league/roles/lol_adc.webp"
import supp from "../assets/league/roles/lol_supp.webp"

import Logo from "../assets/logos/logo-no-text.png"

export default function FichaPartido() {
    return (
        <MainLayoutInfo texto={"Ficha de Partido"}>
            <div className="h-[30rem] pt-2 lg:pt-0 lg:h-[15rem] bg-[var(--color-gris)]">
                <div className="flex flex-col lg:flex-row justify-center items-center h-full gap-4 lg:gap-20">
                    <div className="flex flex-col justify-center items-center">
                        <img src={Logo} className="w-[6rem]"></img>
                        <p className="text-[var(--color-texto-fichapartido)] mt-4 text-xl font-[600]">Equipo 1</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-[var(--color-texto-footer)] gap-8">
                        <p className="text-5xl font-[700]">1 : 2</p>
                        <p className="text-3xl font-[600]">12/08/2023 - 18:00</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src={Logo} className="w-[6rem]"></img>
                        <p className="text-[var(--color-texto-fichapartido)] mt-4 text-xl font-[600]">Equipo 2</p>
                    </div>
                </div>
            </div>
            <div className="h-[3rem] flex justify-center items-center gap-6 bg-red-500 font-[600]">
                <button>Mapa 1</button>
                <button>Mapa 2</button>
                <button>Mapa 3</button>
                <button>Mapa 4</button>
                <button>Mapa 5</button>
            </div>
            {/* caja primaria */}
            <div className="flex justify-center relative xl:mx-[16rem] lg:mx-[10rem] md:mx-[2rem] sm:mx-[0rem] text-[var(--color-texto-fichapartido)]">
                <div className="absolute hidden md:flex items-center left-0 overflow-hidden h-full">
                    <img src={Logo} className="relative right-[7.5rem] imagenFichaPartidoEquipo1"></img>
                </div>
                <div className="flex items-center flex-col h-[55rem] bg-[var(--color-gris)] shadow-[0px_2px_2px_1px_rgba(0,0,0,0.8)] w-[100%] md:px-[5rem] py-[2rem]">
                    <div className="flex flex-col items-center w-[50%]">
                        <div className="flex items-center my-4">
                            <h3 className="font-[600]">Equipos</h3>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="text-2xl font-[700]">TES</p>
                            <p className="text-2xl font-[700]">TES</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[50%] my-1">
                        <div className="flex items-center">
                            <p className="text-sm">Kills</p>
                        </div>
                        <div className="flex justify-evenly w-full items-center">
                            <p className="font-[700]">50</p>
                            <div className="flex w-[70%] md:w-[80%] h-1">
                                <div className="flex justify-end w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-blue-500 w-[50%] h-1 z-10"></div>
                                </div>
                                <div className="flex justify-start w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-red-500 w-[36%] h-1 z-10"></div>
                                </div>
                            </div>
                            <p className="font-[700]">36</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[50%] my-1">
                        <div className="flex items-center">
                            <p className="text-sm">Minions</p>
                        </div>
                        <div className="flex justify-evenly w-full items-center">
                            <p className="font-[700]">50</p>
                            <div className="flex w-[70%] md:w-[80%] h-1">
                                <div className="flex justify-end w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-blue-500 w-[50%] h-1 z-10"></div>
                                </div>
                                <div className="flex justify-start w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-red-500 w-[36%] h-1 z-10"></div>
                                </div>
                            </div>
                            <p className="font-[700]">36</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[50%] my-1">
                        <div className="flex items-center">
                            <p className="text-sm">Oro</p>
                        </div>
                        <div className="flex justify-evenly w-full items-center">
                            <p className="font-[700]">50</p>
                            <div className="flex w-[70%] md:w-[80%] h-1">
                                <div className="flex justify-end w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-blue-500 w-[50%] h-1 z-10"></div>
                                </div>
                                <div className="flex justify-start w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-red-500 w-[36%] h-1 z-10"></div>
                                </div>
                            </div>
                            <p className="font-[700]">36</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[50%] my-1">
                        <div className="flex items-center">
                            <p className="text-sm">Torres</p>
                        </div>
                        <div className="flex justify-evenly w-full items-center">
                            <p className="font-[700]">50</p>
                            <div className="flex w-[70%] md:w-[80%] h-1">
                                <div className="flex justify-end w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-blue-500 w-[50%] h-1 z-10"></div>
                                </div>
                                <div className="flex justify-start w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-red-500 w-[36%] h-1 z-10"></div>
                                </div>
                            </div>
                            <p className="font-[700]">36</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[50%] my-1">
                        <div className="flex items-center">
                            <p className="text-sm">Inhibidores</p>
                        </div>
                        <div className="flex justify-evenly w-full items-center">
                            <p className="font-[700]">50</p>
                            <div className="flex w-[70%] md:w-[80%] h-1">
                                <div className="flex justify-end w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-blue-500 w-[50%] h-1 z-10"></div>
                                </div>
                                <div className="flex justify-start w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-red-500 w-[36%] h-1 z-10"></div>
                                </div>
                            </div>
                            <p className="font-[700]">36</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[50%] my-1">
                        <div className="flex items-center">
                            <p className="text-sm">Dragones</p>
                        </div>
                        <div className="flex justify-evenly w-full items-center">
                            <p className="font-[700]">50</p>
                            <div className="flex w-[70%] md:w-[80%] h-1">
                                <div className="flex justify-end w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-blue-500 w-[50%] h-1 z-10"></div>
                                </div>
                                <div className="flex justify-start w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-red-500 w-[36%] h-1 z-10"></div>
                                </div>
                            </div>
                            <p className="font-[700]">36</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[50%] my-1">
                        <div className="flex items-center">
                            <p className="text-sm">Heraldos</p>
                        </div>
                        <div className="flex justify-evenly w-full items-center">
                            <p className="font-[700]">50</p>
                            <div className="flex w-[70%] md:w-[80%] h-1">
                                <div className="flex justify-end w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-blue-500 w-[50%] h-1 z-10"></div>
                                </div>
                                <div className="flex justify-start w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-red-500 w-[36%] h-1 z-10"></div>
                                </div>
                            </div>
                            <p className="font-[700]">36</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[50%] my-1">
                        <div className="flex items-center">
                            <p className="text-sm">Barones</p>
                        </div>
                        <div className="flex justify-evenly w-full items-center">
                            <p className="font-[700]">50</p>
                            <div className="flex w-[70%] md:w-[80%] h-1">
                                <div className="flex justify-end w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-blue-500 w-[50%] h-1 z-10"></div>
                                </div>
                                <div className="flex justify-start w-[50%] relative">
                                    <div className="bg-[var(--color-gris-fichapartido)] w-full absolute h-1"></div>
                                    <div className="bg-red-500 w-[36%] h-1 z-10"></div>
                                </div>
                            </div>
                            <p className="font-[700]">36</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-[100%]">
                        <div className="flex items-center my-8">
                            <h3 className="font-[600]">Picks</h3>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex justify-end w-full gap-1 mr-2">
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                            </div>
                            <div className="flex justify-start w-full gap-1 ml-2">
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/2.png"} alt="Champion" className="w-8 md:w-10" />
                            </div>
                        </div>
                    </div>
                    {/* xl:mx-[6rem] lg:mx-[3rem] md:mx-[2rem] sm:mx-[0rem] */}
                    <div className="flex flex-col items-center w-[100%]">
                        <div className="flex items-center my-8">
                            <h3 className="font-[600]">Bans</h3>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="flex justify-end w-full gap-1 mr-2">
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                            </div>
                            <div className="flex justify-start w-full gap-1 ml-2">
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/1.png"} alt="Champion" className="w-8 md:w-10" />
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/2.png"} alt="Champion" className="w-8 md:w-10" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute hidden md:flex items-center left-auto overflow-hidden right-0 h-full">
                    <img src={Logo} className="relative left-[7.5rem] imagenFichaPartidoEquipo2"></img>
                </div>
            </div>
            {/* jugadores */}
            <div className="flex flex-col items-center justify-center mx-[12rem] h-auto text-[var(--color-texto-fichapartido)] my-8 gap-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="w-[3rem] h-[3rem]" src={toplane} alt="Toplane" />
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="w-[3rem] h-[3rem]" src={jungle} alt="Jungle" />
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="w-[3rem] h-[3rem]" src={mid} alt="Midlane" />
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="w-[3rem] h-[3rem]" src={adc} alt="ADC" />
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="w-[3rem] h-[3rem]" src={supp} alt="Support" />
                    <div className="h-[20rem] w-[22rem] lg:h-[10rem] lg:w-[30rem] flex bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                        <img className="championImagen1" src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} alt="Toplane" />
                        <div className="flex flex-col justify-evenly w-full">
                            <p>{'Juan "SupportConPanza" Zas'}</p>
                            <div className="flex justify-between items-center mr-4">
                                <div>
                                    <p>5/10/20</p>
                                    <p>9,48 KDA</p>
                                    <p>50.2% KP</p>
                                </div>
                                <div>
                                    <p>0.3 CS/MIN</p>
                                    <p>705,25 DMG/MIN</p>
                                    <p>1,23 VSN/MIN</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayoutInfo>
    )
}