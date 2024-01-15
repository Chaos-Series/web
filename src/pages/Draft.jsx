import { useState, useEffect } from "react";
import { Tooltip, Spinner } from "@nextui-org/react";
import { Link } from "react-router-dom";

import { conseguirJugadores } from "../services/usuarios";
import quitarArroba from "../utils/quitarArroba"

import BackgroundTarjeta from "../assets/backgrounds/FondoTarjeta.jpg"

import DiscordIcon from "../assets/images/RRSS/Discord.webp";
import CTIcon from "../assets/images/RRSS/CT.webp";
import OPGGIcon from "../assets/images/RRSS/OPGG.webp";
import TwitterIcon from "../assets/images/RRSS/Twitter.webp";

import ToplaneIcon from "../assets/league/roles/lol_top.webp";
import JungleIcon from "../assets/league/roles/lol_jungle.webp";
import MidlaneIcon from "../assets/league/roles/lol_mid.webp";
import ADCIcon from "../assets/league/roles/lol_adc.webp";
import SupportIcon from "../assets/league/roles/lol_supp.webp";

import MainLayoutInfo from "../layout/MainLayoutInfo";

//https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-emblem/emblem-diamond.png

export default function Draft() {

  const [jugadores, setJugadores] = useState();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirJugadores().then((listaJugadores) => {
      setJugadores(listaJugadores.result);
      setCargando(false);
    });
  }, []);

  if (cargando) {
    return (
      <MainLayoutInfo texto={"Draft"}>
        <div className="flex flex-wrap justify-center items-center m-4 gap-4 min-h-[296px]">
          <Spinner label="Cargando..." size="lg" />
        </div>
      </MainLayoutInfo>
    );
  }

  return (
    <MainLayoutInfo texto={"Draft"}>
      <div className="flex flex-wrap justify-center items-center m-4 gap-4">
        {jugadores.map((jugador) => {
          let listaOPGG = "https://www.op.gg/multisearch/euw?summoners=";
          let primeraPosicion, primerLogo;
          let segundaPosicion, segundoLogo;

          if (jugador.cuentas.length > 0) {
            primeraPosicion = jugador.cuentas[0].linea_principal;
            segundaPosicion = jugador.cuentas[0].linea_secundaria;
            switch (primeraPosicion) {
              case "Toplane":
                primerLogo = ToplaneIcon;
                break;
              case "Jungla":
                primerLogo = JungleIcon;
                break;
              case "Midlane":
                primerLogo = MidlaneIcon;
                break;
              case "ADC":
                primerLogo = ADCIcon;
                break;
              case "Support":
                primerLogo = SupportIcon;
                break;
            }
            switch (segundaPosicion) {
              case "Toplane":
                segundoLogo = ToplaneIcon;
                break;
              case "Jungla":
                segundoLogo = JungleIcon;
                break;
              case "Midlane":
                segundoLogo = MidlaneIcon;
                break;
              case "ADC":
                segundoLogo = ADCIcon;
                break;
              case "Support":
                segundoLogo = SupportIcon;
                break;
            }
          }

          jugador.cuentas.forEach((jugadorOPGG) => {
            listaOPGG = listaOPGG + jugadorOPGG.invocador + "%23" + jugadorOPGG.tag + "%2C";
          });
          return (
            <>
              <div className="flex flex-col justify-around w-[500px] min-h-[290px] text-white bg-center bg-cover px-2 py-2 rounded-[12px]" style={{backgroundImage: `url(${BackgroundTarjeta})`}}>
                <div className="flex gap-2 mb-3 h-full md:flex-row flex-col md:items-stretch items-center w-full">
                  <div className="flex justify-center gap-4 md:w-auto w-full">
                    <div className="relative w-[152px] h-[152px]">
                      <img
                        src={
                          "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/" + jugador.info.icono + ".jpg"
                        }
                        className="w-full h-full rounded-[10px]"
                        alt="Icono Usuario"
                      />
                      <p className="absolute bottom-0 left-0 w-full text-center font-[700] text-3xl drop-shadow-2xl">{jugador.info.id_usuario}</p>
                    </div>
                    <div className="md:hidden flex flex-col justify-center items-start">
                      <span className="text-2xl font-[700]">{jugador.info.nombre_usuario}</span>
                      <span className="text-2xl font-[700] text-[var(--color-principal)]">{"'" + jugador.info.nick_usuario + "'"}</span>
                      <span className="text-2xl font-[700]">{jugador.info.apellido_usuario}</span>
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex justify-start items-center gap-2">
                            <div className="w-12 flex justify-center">
                              <img src={primerLogo} width="40" alt="Support Icon" />
                            </div>
                            <div className="w-full">
                              <span className="text-lg font-[600]">{primeraPosicion}</span>
                            </div>
                          </div>
                          <div className="flex justify-start items-center gap-2">
                            <div className="w-12 flex justify-center">
                              <img src={segundoLogo} width="25" alt="Support Icon" />
                            </div>
                            <div className="w-full">
                              <span className="text-sm">{segundaPosicion}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col md:justify-between justify-center md:items-stretch items-center md:w-[45%] w-full">
                    <p className="text-2xl font-[700]">
                      {" " + jugador.info.nombre_usuario + " '"}
                      <span className="text-[var(--color-principal)]">{jugador.info.nick_usuario}</span>
                      {"' " + jugador.info.apellido_usuario + ""}
                    </p>
                    <div className="flex flex-col justify-between">
                      {/* <div className="flex">
                  <Image width={80} alt="NextUI hero Image" src={ImagenRango} />
                  <span>IV</span>
                </div> */}
                      <div>
                        <div className="flex justify-start items-center gap-2">
                          <div className="w-12 flex justify-center">
                            <img src={primerLogo} width="40" alt="Support Icon" />
                          </div>
                          <div className="w-full">
                            <span className="text-lg font-[600]">{primeraPosicion}</span>
                          </div>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                          <div className="w-12 flex justify-center">
                            <img src={segundoLogo} width="25" alt="Support Icon" />
                          </div>
                          <div className="w-full">
                            <span className="text-sm">{segundaPosicion}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col md:justify-start md:items-end justify-center md:w-[20%] w-full md:gap-2 gap-4 mt-4 mb-2">
                    <Tooltip content={quitarArroba(jugador.info.discord)} className="w-auto" placement="left">
                      <img src={DiscordIcon} alt="Discord" className="w-[1.5rem] h-[1.5rem]" />
                    </Tooltip>
                    <Link to={listaOPGG} target="_blank">
                      <img src={OPGGIcon} alt="OPGG" className="w-[1.5rem] h-[1.5rem]" />
                    </Link>
                    <Link to={"https://circuitotormenta.com/user/" + quitarArroba(jugador.info.circuitotormenta)} target="_blank">
                      <img src={CTIcon} alt="CT" className="w-[1.5rem] h-[1.5rem]" />
                    </Link>
                    <Link to={"https://twitter.com/" + quitarArroba(jugador.info.twitter)} target="_blank">
                      <img src={TwitterIcon} alt="Twitter" className="w-[1.5rem] h-[1.5rem]" />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col w-full gap-4 mb-1">
                  <div className="grid grid-cols-2 md:grid-cols-4 w-full text-center md:text-left">
                    <div className="md:ml-4">
                      <p className="text-[var(--color-principal)] font-[700]">KDA</p>
                      <p>0.0</p>
                    </div>
                    <div>
                      <p className="font-[700]">ASESINATOS</p>
                      <p>0</p>
                    </div>
                    <div>
                      <p className="text-[var(--color-principal)] font-[700]">MUERTES</p>
                      <p>0</p>
                    </div>
                    <div>
                      <p className="font-[700]">ASISTENCIAS</p>
                      <p>0</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 w-full text-center md:text-left">
                    <div className="md:ml-4">
                      <p className="text-[var(--color-principal)] font-[700]">KP</p>
                      <p>0%</p>
                    </div>
                    <div>
                      <p className="font-[700]">CS/MIN</p>
                      <p>0.0</p>
                    </div>
                    <div>
                      <p className="text-[var(--color-principal)] font-[700]">DMG/MIN</p>
                      <p>0.0</p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex justify-center md:justify-start items-center gap-2">
                        <p className="font-[700]">C. S.</p>
                        <Tooltip
                          content="La Chaos Score sigue un sistema interno para determinar el rendimiento de un jugador dentro de las partidas que juega en la liga."
                          className="w-[12rem]"
                          placement="right"
                        >
                          <i className="fa-solid fa-circle-info"></i>
                        </Tooltip>
                      </div>
                      <p>50</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </MainLayoutInfo>
  );
}
