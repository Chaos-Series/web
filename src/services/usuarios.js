import axios from "axios";
import api from "../../variables.json";

async function conseguirJugadores() {
    try {
        const respuesta = await axios.get(api.directorio + "usuarios/jugadores");
        return respuesta.data;
    } catch (e) {
        console.log(e);
        throw e; // Debes relanzar el error para que pueda ser manejado en el código que llama a esta función
    }
}

export { conseguirJugadores };
