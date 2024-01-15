
# Chaos Web

Repositorio para el desarrollo de la web principal de Chaos Series.
## Desarrollo

Clone the repo

```bash
  git clone https://github.com/meeeww/chaos_web
```

Go to the project directory

```bash
  cd chaos_web
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Enrutamientos

#### /src/assets

Todas las imágenes que se usarán en el proyecto

#### /src/components

Los componentes que usará la aplicación.
*ESTOS NUNCA HARÁN LLAMADAS A LA API*

#### /src/forms

Los componentes que incluyen formularios para emplear en el proyecto.

#### /src/layout

El layout principal de la web. Utiliza solo header y footer.

#### /src/pages

Páginas principales que harán las llamadas a la API y serán el punto de entrada general para los componentes.

#### /src/services

Archivos de .js que se encargan en el manejo de las llamadas a la API.

#### /src/styles

Archivos de estilos generales. *Usar lo menos posible.*

#### /src/utils

Archivos de .js mínimos que comprenden funciones para utilizar en el resto de archivos.

#### /main.jsx

Ruta de entrada de la aplicación. Aquí se añaden las URLs para añadir enrutamientos para /src/pages