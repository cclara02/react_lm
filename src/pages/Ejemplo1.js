import { EjemploProps1,EjemploProps2,EjemploProps3,EjemploProps4,EjemploProps5 } from "../compontens/Props";

const nombre2 = 'Laura'
const frutas = ['Manzana','Banana','Palta','Naranjas']
const equipos = ['Argentina','Canada','Colombia']

 const mostarValor = valor =>{
    console.log(valor);
}

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
            {/* funcion */}
            <EjemploProps4 cambiarvalor = {mostarValor} />
            {/* este no anda porque si o si necesita de cambiar valor(no anda) */}
            <EjemploProps4/>
            {/* como lo requiere si o si podemos tb pasarle una funcion vacia */}
            <EjemploProps4 cambiarvalor = {() => {}}/>
            <EjemploProps5 eventoClick={mostarValor}/>
            {/* si no mle coloque la props eventoClick no se exploto el reac a diferencia del ejemplo4 */}
            <EjemploProps5 />
        </div>
    )
}

export default Ejemplo1;