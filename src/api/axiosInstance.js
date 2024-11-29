import { Password } from '@mui/icons-material';
import axios from 'axios';

const URL = 'http://localhost:8080';

export const obtenerDatosUsuario = async () => {
    try {
      const respuesta = await axios.get(`${URL}/user`);
      return respuesta;
    } catch (error) {
      console.error("Error:", error);
    }
};


export const registrarDatosUsuario = async (datos) => {
try {
    const respuesta = await axios.post(`${URL}/user`, datos, {
    headers: {
        "Content-Type": "application/json",
    }
    });
    return respuesta;
} catch (error) {
    console.error("Error:", error);
}
};


export const login = async () => {
try {
    const respuesta = await axios.get(`${URL}/user`);
    return respuesta;
} catch (error) {
    console.error("Error:", error);
}
};

export const iniciarSesion = async (username, password) => {
    try {
        const respuesta = await axios.post(`${URL}/user/login`, null, {params:{ username: username, password: password }}, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return respuesta;
    } catch (error) {
        console.error("Error:", error);
    }
};

export const registrarEvento = async (datos) => {
    try {
        const respuesta = await axios.post(`${URL}/event`, datos, {
        headers: {
            "Content-Type": "application/json",
        }
        });
        return respuesta;
    } catch (error) {
        console.error("Error:", error);
    }
    };

export const obtenerEventos = async () => {
    try {
        const respuesta = await axios.get(`${URL}/event/user/4`);
        return respuesta;
    } catch (error) {
        console.error("Error:", error);
    }
};