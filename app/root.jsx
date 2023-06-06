import { Links, Meta,Outlet,Scripts,LiveReload, useRouteError, isRouteErrorResponse } from "@remix-run/react"
import styles from './styles/index.css'
import Header from "./components/header"
export function meta(){
    return[
        {
            charset: 'utf-8',
            title:'GuitarLA-Remix',
            viewport:'width=device-width, initial-scale=1'
        }
    ]
}
export function links() {
    return[
        {
            rel:'stylesheet',
            href: styles,
        },
        {
            rel:'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        }
    ]
}
export default function App(){
    return(
       <Document>
         <Outlet></Outlet>
       </Document>
    )
}

function Document({children}) {
    return(
       <html>
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Scripts />
                <LiveReload />
            </body>
       </html>
    )
}

export function ErrorBoundary(){
    const error = useRouteError()
    if (isRouteErrorResponse(error)) {
        return(
            <Document>
                <p className="error">
                    {error.status}
                    {error.statusText}
                </p>
            </Document>
        )
    }
   
}