import { useState } from "react"
import DefaultLayout from "../components/DefaultLayout"
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const auth = useAuth();
    if(auth.isAuthenticated){
        return <Navigate to="/dashboard"/>
    }
    return <DefaultLayout>
        <form className="form">
            
            <h1>Iniciar sesion</h1>
            <label htmlFor="">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

            <label htmlFor="">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <button>Ingresar</button>
        </form> 
    </DefaultLayout>
}