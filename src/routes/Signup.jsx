import { useState } from "react"
import DefaultLayout from "../components/DefaultLayout"
import { Navigate } from "react-router-dom"
import { useAuth } from "../auth/AuthProvider";
import { registrarDatosUsuario } from "../api/axiosInstance";


export default function Signup() {
    const {isAuthenticated, setIsAuthenticated} = useAuth();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleCreateUsuarios = async () => {
        try {
            if (form.username && form.email && form.password){
                const datos = await registrarDatosUsuario(form);
                console.log(datos)
                if (datos.status == 201) {
                    setIsAuthenticated(true)
                } else {
                    alert("No se pudo guardar el usuario.");
                }
            }
        } catch (error) {
          console.error("Error al obtener usuarios:", error);
          alert("No se pudo cargar la lista de usuarios.");
        }
      };

    const auth = useAuth();

    if(auth.isAuthenticated){
        return <Navigate to= "/dashboard"/>
    }
    return (
    <DefaultLayout>
        <form className="form">
            
            <h1>Registro</h1>
            <label htmlFor="">Username</label>
            <input type="text" value={form.username} onChange={(e) => setForm({...form, username: e.target.value})}/>

            <label htmlFor="">Email</label>
            <input type="email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})}/>

            <label htmlFor="">Password</label>
            <input type="password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}/>

            <button onClick={handleCreateUsuarios} type="button">Registrarse</button>
        </form> 
    </DefaultLayout>
    )
}