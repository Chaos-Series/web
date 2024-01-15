/* eslint-disable react/prop-types */
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from "@nextui-org/react";
import { Link } from "react-router-dom";

import Logo from "../assets/logos/logo-no-text.png";

export default function Header() {
  return (
    <div className="bg-[url('../assets/backgrounds/prueba.webp');] h-[28rem] bg-cover bg-fixed">
      <Navbar className="h-[5rem] bg-[#333333] bg-opacity-90 flex justify-between items-center quitarMaxW px-8">
        <NavbarContent className="w-full max-w-none hidden md:flex">
          <NavbarBrand className="hidden md:flex">
            <Link to={"/"} className="flex items-center">
              <img src={Logo} alt="Logo" className="h-16 mr-4 cursor-pointer"></img>
              <div>
                <p className="font-[500] text-[var(--color-texto-footer)] text-2xl" style={{ fontFamily: "chaosFont" }}>
                  Chaos
                </p>
                <p className="font-[500] text-[var(--color-texto-footer)] text-lg" style={{ fontFamily: "chaosFont" }}>
                  Series
                </p>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="md:hidden pr-6">
          <NavbarBrand>
            <Link to={"/"} className="flex items-center">
              <img src={Logo} alt="Logo" className="h-16 mr-4 cursor-pointer"></img>
              <div>
                <p className="font-[500] text-[var(--color-texto-footer)] text-2xl" style={{ fontFamily: "chaosFont" }}>
                  Chaos
                </p>
                <p className="font-[500] text-[var(--color-texto-footer)] text-lg" style={{ fontFamily: "chaosFont" }}>
                  Series
                </p>
              </div>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden md:flex gap-6 font-semibold" justify="center">
          <NavbarItem>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
              radius="sm"
              variant="light"
              onClick={() => {
                window.location.replace("/clasificacion");
              }}
            >
              Clasificación
            </Button>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
                  endContent={<i className="fa-solid fa-caret-down text-[var(--color-logo)] text-xl"></i>}
                  radius="sm"
                  variant="light"
                >
                  Partidos
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
              aria-label="Partidos"
            >
              <DropdownItem
                key="calendario"
                description="Comprueba las fechas de todos los partidos."
                startContent={<i className="fa-solid fa-calendar w-4 text-base text-center"></i>}
                onClick={() => {
                  window.location.replace("/calendario");
                }}
              >
                Calendario
              </DropdownItem>
              <DropdownItem
                key="resultados"
                description="Revisa todos los resultados de los equipos."
                startContent={<i className="fa-solid fa-clipboard-list w-4 text-base text-center"></i>}
                onClick={() => {
                  window.location.replace("/resultados");
                }}
              >
                Resultados
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
                  endContent={<i className="fa-solid fa-caret-down text-[var(--color-logo)]"></i>}
                  radius="sm"
                  variant="light"
                >
                  Liga
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
              aria-label="Liga"
            >
              <DropdownItem
                key="equipos"
                description="Échale un vistazo a todos los equipos de la liga."
                startContent={<i className="fa-solid fa-people-group w-4 text-base text-center"></i>}
                onClick={() => {
                  window.location.replace("/equipos");
                }}
              >
                Equipos
              </DropdownItem>
              <DropdownItem
                key="jugadores"
                description="Información sobre los jugadores inscritos y preparados para el draft."
                startContent={<i className="fa-solid fa-user-plus w-4 text-base text-center"></i>}
                onClick={() => {
                  window.location.replace("/draft");
                }}
              >
                Draft
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
                  endContent={<i className="fa-solid fa-caret-down text-[var(--color-logo)]"></i>}
                  radius="sm"
                  variant="light"
                >
                  Estadísticas
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
              aria-label="Estadísticas"
            >
              <DropdownItem
                key="temporadas"
                description="Revisa todas las estadísticas de cada temporada."
                startContent={<i className="fa-solid fa-trophy w-4 text-base text-center"></i>}
                onClick={() => {
                  window.location.replace("/temporadas");
                }}
              >
                Temporadas
              </DropdownItem>
              <DropdownItem
                key="mvps"
                description="Consulta los MVPs en todos los ámbitos de todas las temporadas"
                startContent={<i className="fa-solid fa-award w-4 text-base text-center"></i>}
                onClick={() => {
                  window.location.replace("/mvps");
                }}
              >
                MVPs
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
        <NavbarContent className="hidden md:flex font-semibold" justify="end">
          <NavbarItem className="flex gap-4">
            <Link to={"/draft"}>
              <Button className="px-4 text-white border-white hover:!bg-white hover:text-black" radius="full" variant="ghost">
                Ver Draft
              </Button>
            </Link>
            <Link to={"https://panel.chaosseries.com/"}>
              <Button className="px-4 text-white border-[var(--color-principal)] hover:!bg-[var(--color-principal)]" radius="full" variant="ghost">
                Inscríbete
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
