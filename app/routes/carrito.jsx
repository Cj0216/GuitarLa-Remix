
import { useOutletContext } from '@remix-run/react'
import stylesCarrito from '../styles/carrito.css'
import { useEffect, useState } from 'react'
import { ClientOnly } from 'remix-utils'
export function links() {
    return [
        {
            rel: 'stylesheet',
            href: stylesCarrito
        }
    ]
}
export function meta() {
    return [
        {
            title: 'GuitarLA - Carrito',
            description: 'GuitarLA - Carrito de compras'
        }
    ]
}
const Carrito = () => {
    const [total, setTotal] = useState(0)
    const { carrito, actulizarCant, eliminarCarrito } = useOutletContext()
    useEffect(() => {
        const calcularTotal = carrito.reduce((total, articulo) => total + (articulo.cantidad * articulo.price), 0)
        setTotal(calcularTotal)
    }, [carrito])


    return (
        <ClientOnly fallback={'cargando...'}>
            {()=>(
            <main>
                <h1 className="heading">
                    Carrito de compras
                </h1>
                <div className="contenido">
                    <div className="carrito">
                        <h2>Articulos</h2>
                        {carrito.length === 0 ? "Carrito Vacio" : (
                            carrito.map((articulo) => (
                                <div key={articulo.id} className='producto'>
                                    <div>
                                        <img src={articulo.imagen} alt={`Producto ${articulo.name}`} />
                                    </div>
                                    <div className="div">
                                        <p className='nombre'>{articulo.name}</p>
                                        <p>Cantidad:</p>
                                        <select
                                            className='select'
                                            value={articulo.cantidad}
                                            onChange={e => actulizarCant({
                                                cantidad: +e.target.value,
                                                id: articulo.id
                                            })}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>


                                        <p className='precio'>Total: $ <span>{articulo.price}</span></p>
                                        <p className='subtotal'>Subtotal: $ <span>{articulo.price * articulo.cantidad}</span></p>
                                    </div>

                                    <button
                                        type='button'
                                        className='btn_eliminar'
                                        onClick={() => eliminarCarrito(articulo.id)}
                                    >
                                        Eliminar</button>
                                </div>
                            ))
                        )}

                    </div>
                    <aside className="resumen">
                        <h3>Resumen de pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
            )}
        </ClientOnly>
    )
}

export default Carrito