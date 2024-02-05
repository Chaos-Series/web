/* eslint-disable react/prop-types */
import { useRef } from 'react';

import { User } from "@nextui-org/react";

export default function MiniCalendario({ listaPartidos }) {
    const scrollContainer = useRef(null);

    // Función para desplazar hacia la izquierda
    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    // Función para desplazar hacia la derecha
    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex justify-center w-full">
            <button onClick={scrollLeft} className="p-4">{'<'}</button> {/* Botón izquierdo */}
            <div className="flex justify-center items-center w-6/12 overflow-x-hidden" ref={scrollContainer}>
                {listaPartidos.map((partido) => (
                    <>
                        <div className="w-full">
                            <span>fecha</span>
                        </div>
                        <div className="flex gap-2">
                            <div key={partido.id_partido} className="flex flex-col">
                                <div>hora</div>
                                <div className="flex flex-col">
                                    <div className="flex">
                                        <span>{partido.equipos.equipoBlue.nombre_equipo}</span>
                                        <User avatarProps={{ radius: "lg", src: `https://api.chaosseries.com/images/${partido.equipos.equipoBlue.logo_equipo}` }} description={partido.equipos.equipoBlue.nombre_equipo} />
                                        <span>{partido.puntuacion_blue}</span>
                                    </div>
                                    <div className="flex">
                                        <span>{partido.equipos.equipoRed.nombre_equipo}</span>
                                        <User avatarProps={{ radius: "lg", src: `https://api.chaosseries.com/images/${partido.equipos.equipoRed.logo_equipo}` }} description={partido.equipos.equipoRed.nombre_equipo} />
                                        <span>{partido.puntuacion_red}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <button onClick={scrollRight} className="p-4">{'>'}</button> {/* Botón derecho */}
        </div>
    );
}
