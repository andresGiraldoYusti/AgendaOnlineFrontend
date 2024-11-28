import Navbar from '../components/nav'

export default function Event() {
    return(
        <>
            <main className='main'>
            <Navbar></Navbar>
                <form className='form'>
                    <h1>Crear evento</h1>
                    <label htmlFor="">Titulo</label>
                    <input type="text"/>
                    <label htmlFor="">Fecha y hora de inicio</label>
                    <input type="datetime-local"/>
                    <label htmlFor="">Fecha y hora final</label>
                    <input type="datetime-local"/>
                    <label htmlFor="">Color</label>
                    <input type="color"/>
                </form>
            </main>
        </>
    )
}