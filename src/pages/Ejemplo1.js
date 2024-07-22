import { EjemploProps1,EjemploProps2,EjemploProps3 } from "../compontens/Props";

const nombre2 = 'Laura'
const frutas = ['Manzana','Banana','Palta','Naranjas']
const equipos = ['Argentina','Canada','Colombia']
const Ejemplo1 = (props) => {
    return (
        <div>
            <h1>Ejemplos de</h1>
            {/* propiedad simple y reutilizar */}
            <EjemploProps1 nombre='Clara' />
            <EjemploProps1 nombre={nombre2} />
            {/* listar elementos (array) */}
            <EjemploProps2 elementos={frutas}/>
            <EjemploProps2 elementos={equipos}/>
            {/* varias propiedades */}
            <EjemploProps3 titulo='hola soy el titulo' subtitulo='subtitulo bien grande' cuerpo='hola contenido de esta noticia' />
        </div>
    )
}

export default Ejemplo1;