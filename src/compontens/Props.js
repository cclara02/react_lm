const EjemploProps1 = props => {
    return(
        <h3>Hola {props.nombre}</h3>
    )
}

const EjemploProps2 = props => {
    const {elementos} = props;
    return(
        // lista elementos, key(importante,porque es el id de cada elemento.)
        <ul>{elementos.map(elemento =><li key={elemento}>{elemento}</li>)}</ul>
    )
}

const EjemploProps3 = (titulo,subtitulo,cuerpo) =>{
    return(
        <div className="noticias">
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>
        </div>
    )
}
const EjemploProps4 = props =>{
    return(
        <label>ver consola
            <input type="text" onChange={(e)=> props.cambiarvalor(e.target.value)}/>
        </label>
        
    )
}

export{
    EjemploProps1,
    EjemploProps2,
    EjemploProps3
    // aca usamos {} y no export default porque son varios componentes distintos lo que vamos a exportar
}