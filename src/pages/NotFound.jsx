import MainLayout from "../layout/MainLayout"

import Logo from "../assets/logos/Color logo - no background.svg"

function NotFound() {

  return (
    <MainLayout>
      <div className="bodyBellumDos" style={{ marginBlock: "10rem" }}>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="text-4xl font-[800]">¡Ups! Error 404</h1>
            <h4 id="h4">Parece que la página a la que intentas acceder no existe...</h4>
          </div>
          <div>
            <img src={Logo} alt="Bellum Logo" style={{ width: "15rem" }} />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default NotFound
