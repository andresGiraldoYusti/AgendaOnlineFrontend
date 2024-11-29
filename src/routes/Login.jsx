import { useState } from "react"
import DefaultLayout from "../components/DefaultLayout"
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { obtenerDatosUsuario } from "../api/axiosInstance";
import { iniciarSesion } from "../api/axiosInstance";

export default function Login() {
    const {isAuthenticated, setIsAuthenticated} = useAuth();

    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const auth = useAuth();
    if(auth.isAuthenticated){
        return <Navigate to="/dashboard"/>
    }

    const handleShowUsuarios = async () => {
        try {
            const datosUsuarios = await obtenerDatosUsuario();
            console.log(datosUsuarios);
        } catch (error) {
          console.error("Error al obtener usuarios:", error);
          alert("No se pudo cargar la lista de usuarios.");
        }
      };

      const handelLogin = async () => {
        if (form.username && form.password){
            const datos = await iniciarSesion(form.username, form.password);
            console.log(datos)
            if (datos.status == 200) {
                setIsAuthenticated(true)
            } else {
                alert("No se pudo guardar el usuario.");
            }
        }
      }

    return <DefaultLayout>
        <form className="form">
            
            <h1>Iniciar sesion</h1>
            <label htmlFor="">Username</label>
            <input type="text" value={form.username} onChange={(e) => setForm({...form, username: e.target.value})}/>

            <label htmlFor="">Password</label>
            <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>

            <button onClick={handelLogin} type="button">Ingresar</button>
        </form> 
        <button onClick={handleShowUsuarios}>Mostrar Usuarios</button>
    </DefaultLayout>
}