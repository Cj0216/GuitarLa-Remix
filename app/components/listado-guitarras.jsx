import Guitarra from "./guitarra"



const ListadoGuitarras = ({data}) => {
    return (
        <>
            <h2 className="heading">
                Nuestra coleccion
            </h2>
            {data.length && (
                <div className="guitarras-grid">
                    {data.map((guitarra) => (
                        <Guitarra
                            key={guitarra.id}
                            guitarra={guitarra.attributes}
                        />

                    ))}
                </div>
            )}
        </>
    )
}

export default ListadoGuitarras