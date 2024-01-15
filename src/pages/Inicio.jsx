import MainLayout from "../layout/MainLayout";

import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <MainLayout>
      <div className="bg-[url('../assets/images/Inscripciones.jpg');] bg-no-repeat bg-cover bg-center">
        <div className="flex items-center justify-center mr-0 lg:mr-8 py-8 w-full">
          <div className="mx-0 lg:mx-[5rem] ml-0 lg:ml-8 flex flex-col gap-6">
            <p className="font-[900] text-3xl leading-7 text-white lg:mx-0 mx-8">Inscríbete en la Chaos Series</p>
            <p className="font-[400] text-xl leading-7 w-auto lg:w-[50rem] text-white lg:mx-0 mx-8">
              Forma parte de la liga para unirte y conocer a nuevos jugadores, equipos y staff en un ambiente sano y perfecto para comenzar y mejorar tu carrera
              como jugador.
            </p>
            <div className="flex justify-start gap-4 lg:mx-0 mx-8">
              <Link to={"https://panel.chaosseries.com/"}>
                <Button className="px-4 text-white border-[var(--color-principal)] hover:!bg-[var(--color-principal)]" radius="full" variant="ghost">
                  Inscríbete
                </Button>
              </Link>
              <Link to={"/draft"}>
                <Button className="px-4 text-white border-white hover:!bg-white hover:text-black" radius="full" variant="ghost">
                  Ver Draft
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Inicio;
