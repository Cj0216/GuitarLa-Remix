import { Link, useLocation } from "@remix-run/react"
import Logo from '../../public/img/logo.svg'
import carrito from '../../public/carrito.png'
const Header = () => {
    const location = useLocation()
    return (
        <header className="header">
            <div className="contenedor barra">
                <Link to="/" className="logo">
                    <img src={Logo} alt="img-logo" />
                </Link>
                <nav className="navegacion">

                    <Link 
                    to="/"
                    className={location.pathname ==='/'? 'active' : '' }
                    >Inicio</Link>
                    <Link 
                    to="/about"
                    className={location.pathname ==='/about'? 'active' : '' }
                    >Contacto</Link>
                    <Link 
                    to="/guitarras"
                    className={location.pathname ==='/guitarras'? 'active' : '' }
                    >Tienda</Link>
                    <Link 
                    className={location.pathname ==='/blog'? 'active' : '' }
                    to="/blog">Blog</Link>
                    <Link 
                    to="/carrito">
                        <img src={carrito} alt="carrito icon" />
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header