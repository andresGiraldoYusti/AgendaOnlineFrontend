import Calendar from '../components/calendar'
import Navbar from '../components/nav'

export default function Dashboard() {
    return (
        <>
      <main className='main'>
        <Navbar></Navbar>
        <Calendar></Calendar>
      </main>
    </>
    )
}