import { useState } from "react"
import DefaultLayout from "../components/DefaultLayout"

export default function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
    <DefaultLayout>
        <form className="form">
            
            <h1>Registro</h1>
            <label htmlFor="">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

            <label htmlFor="">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button>Registrarse</button>
        </form> 
    </DefaultLayout>
    )
}