import { Link } from "react-router-dom";

export default function DefaultLayout({children}) {
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/signup">Registrarse</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>
        </>
    )
}