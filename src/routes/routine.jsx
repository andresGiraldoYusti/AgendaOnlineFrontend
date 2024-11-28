import Navbar from '../components/nav'
import SelectDays from '../components/SelectDays'

export default function Routine() {
    return (
        <>
            <main className='main'>
                <Navbar></Navbar>
                <form className='form'>
                    <h1>Crear rutina</h1>
                    <label htmlFor="">Titulo</label>
                    <input type="text"/>
                    <label htmlFor="">Hora de inicio de la actividad</label>
                    <input type="time"/>
                    <label htmlFor="">Hora final de la actividad</label>
                    <input type="time"/>
                    <label htmlFor="">Fecha de inicio</label>
                    <input type="date"/>
                    <label htmlFor="">Fecha final</label>
                    <input type="date"/>
                    <label htmlFor="">Seleccionar los dias de la rutina</label>
                    <SelectDays />

                </form>
            </main>
        </>
    )
}