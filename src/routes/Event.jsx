import Navbar from '../components/nav'
import { useState } from "react"
import { registrarEvento } from "../api/axiosInstance"

export default function Event() {

    const [form, setForm] = useState({
        titulo: "",
        inicio: "",
        fin: "",
        colorFondo: "",
        colorBorde: "",
        usuario: {
            id: 4,
            username: null,
            email: null,
            password: null
        }
    });

    const handleCreateEveto = async () => {
        console.log(form)
        try {
            if (form.titulo && form.inicio && form.fin && form.colorFondo && form.colorBorde){
                const datos = await registrarEvento(form);
                console.log(datos)
                if (datos.status == 201) {
                    setIsAuthenticated(true)
                } else {
                    alert("No se pudo guardar el usuario.");
                }
            }
        } catch (error) {
          console.error("Error al crear el evento:", error);
          alert("No se pudo crear el evento.");
        }
    }

    return(
        <>
            <main className='main'>
            <Navbar></Navbar>
                <form className='form'>
                    <h1>Crear evento</h1>
                    <label htmlFor="">Titulo</label>
                    <input type="text" value={form.titulo} onChange={(e) => setForm({...form, titulo: e.target.value})}/>
                    <label htmlFor="">Fecha y hora de inicio</label>
                    <input type="datetime-local" value={form.inicio} onChange={(e) => setForm({...form, inicio: e.target.value})}/>
                    <label htmlFor="">Fecha y hora final</label>
                    <input type="datetime-local" value={form.fin} onChange={(e) => setForm({...form, fin: e.target.value})}/>
                    <label htmlFor="">Color de fondo</label>
                    <input type="color" value={form.colorFondo} onChange={(e) => setForm({...form, colorFondo: e.target.value})}/>
                    <label htmlFor="">Color del borde</label>
                    <input type="color" value={form.colorBorde} onChange={(e) => setForm({...form, colorBorde: e.target.value})}/>
                    <button onClick={handleCreateEveto} type="button">Crear evento</button>
                </form>
            </main>
        </>
    )
}