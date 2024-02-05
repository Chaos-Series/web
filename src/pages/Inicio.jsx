import { useEffect, useState } from "react";
import { Button, Spinner } from "@nextui-org/react";
import { Link } from "react-router-dom";

import { conseguirPartidos } from "../services/partidos";

import MainLayout from "../layout/MainLayout";

import MiniCalendario from "../components/MiniCalendario";

function Inicio() {
  const [partidos, setPartidos] = useState();
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirPartidos().then((listaJugadores) => {
      setPartidos(listaJugadores.result);
      setCargando(false);
    });
  }, []);

  if (cargando) {
    return (
      <MainLayout>
        <div className="flex flex-wrap justify-center items-center m-4 gap-4 min-h-[296px]">
          <Spinner label="Cargando..." size="lg" />
        </div>
        </MainLayout>
    );
  }

  return (
    <MainLayout>
      <MiniCalendario listaPartidos={partidos}/>
    </MainLayout>
  );
}

export default Inicio;
