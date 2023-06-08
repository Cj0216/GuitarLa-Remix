import { Links, Meta, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse } from "@remix-run/react"
import styles from './styles/index.css'
import Header from "./components/header"
import { useState,useEffect } from "react"

export function meta() {
    return [
        {
            charset: 'utf-8',
            title: 'GuitarLA-Remix',
            viewport: 'width=device-width, initial-scale=1'
        }
    ]
}
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        }
    ]
}
export default function App() {
    const carritoLS = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('carrito')) || []
    const [carrito, setCarrito] = useState(carritoLS)
    useEffect(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('carrito', JSON.stringify(carrito))
        }
      }, [carrito])


    const agregarCarrito = (guitarra) => {
        if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            const carritoAct = carrito.map((guitarraState) => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState

            })
            setCarrito(carritoAct)
        } else {
            setCarrito([...carrito, guitarra])
        }
    }

    const actulizarCant = guitarra => {
        const carritoAct = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoAct)
    }
    const eliminarCarrito = (guitarra) => {
            const carritoAct = carrito.filter(guitarraState => guitarraState.id !== guitarra)
            setCarrito(carritoAct)
        }

    return (
        <Document>
            <Outlet
                context={{
                    agregarCarrito,
                    carrito,
                    actulizarCant,
                    eliminarCarrito
                }}
            />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html>
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export function ErrorBoundary() {
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <p className="error">
                    {error.status}
                    {error.statusText}
                </p>
            </Document>
        )
    }

}