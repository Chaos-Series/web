/* eslint-disable react/prop-types */
export default function MiniCalendario({ listaPartidos }) {

    console.log(listaPartidos)
    return (
        <div className="flex flex-col w-20 overflow-x-auto">
            <div className="w-full">
                <span>
                    fecha
                </span>
            </div>
            <div className="flex gap2">
                {listaPartidos.map((partido) => (
                    <div key={partido.id_partido} className="flex flex-col">
                        {console.log(partido)}
                        <div>
                            hora
                        </div>
                        <div className="flex flex-col">
                            <div className="flex">
                                <span>nombre</span>
                                <span>logo</span>
                                <span>resultado</span>
                            </div>
                            <div className="flex">
                                <span>nombre</span>
                                <span>logo</span>
                                <span>resultado</span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}