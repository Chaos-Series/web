import { useRef } from 'react';
import { User } from "@nextui-org/react";
import epochToDate from '../utils/dates/epochToDate';
import epochToHour from '../utils/dates/epochToHour';

// Agrupa los partidos por fecha
const agruparPartidosPorFecha = (listaPartidos) => {
    const partidosAgrupados = {};

    listaPartidos.forEach((partido) => {
        const fecha = epochToDate(partido.fecha);
        if (!partidosAgrupados[fecha]) {
            partidosAgrupados[fecha] = [];
        }
        partidosAgrupados[fecha].push(partido);
    });

    return partidosAgrupados;
};

const determinarResultado = (puntuacion) => {
    switch (puntuacion) {
        case '1':
            return <span className='font-semibold text-green-400'>WIN</span>;
        case '0':
            return <span className='font-semibold text-red-500'>LOSE</span>;
        case '-':
            return <span className='font-semibold'>TBD</span>;
        default:
            return puntuacion; // Devuelve la puntuación original si no es 1, 2, o '-'
    }
};

export default function MiniCalendario({ listaPartidos }) {
    const scrollContainer = useRef(null);

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    const partidosAgrupados = agruparPartidosPorFecha(listaPartidos);

    return (
        <div className="flex justify-center w-full my-8">
            <button onClick={scrollLeft} className="p-4">{'<'}</button>
            <div className="flex items-center w-9/12 overflow-x-hidden h-auto" ref={scrollContainer}>
                {Object.entries(partidosAgrupados).map(([fecha, partidos]) => (
                    <div key={fecha} className='flex flex-col'>
                        <div className="w-full">
                            <span className='ml-4 font-medium text-lg'>{fecha}</span>
                        </div>
                        <div className='flex'>
                            {partidos.map((partido) => (
                                <div key={partido.id_partido} className="flex gap-2 w-[15rem]">
                                    <div className="flex flex-col my-4">
                                        <span className='ml-4 font-medium'>{epochToHour(partido.fecha)}</span>
                                        <div className="flex flex-col">
                                            <div className="flex items-center">
                                                <User avatarProps={{ className: "bg-transparent m-4", radius: "lg", size: "lg", src: `https://api.chaosseries.com/images/${partido.equipos.equipoBlue.logo_equipo}` }} />
                                                <div className='flex flex-col'>
                                                    <span className='text-xs text-gray-400'>{partido.equipos.equipoBlue.nombre_equipo}</span>
                                                    {determinarResultado(partido.puntuacion_blue)}
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <User avatarProps={{ className: "bg-transparent m-4", radius: "lg", size: "lg", src: `https://api.chaosseries.com/images/${partido.equipos.equipoRed.logo_equipo}` }} />
                                                <div className='flex flex-col'>
                                                    <span className='text-xs text-gray-400'>{partido.equipos.equipoRed.nombre_equipo}</span>
                                                    {determinarResultado(partido.puntuacion_red)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={scrollRight} className="p-4">{'>'}</button>
        </div>
    );
}
