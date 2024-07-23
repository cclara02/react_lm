import alumnos from '../data/alumnos.json';

const CargaJson = (props) => {

    // console.log(alumnos);
    return (
        <>
            <h1>Ejemplo de carga de un json</h1>
            <ul>
                {
                    alumnos.map(alumno =>(
                        <li key={alumno.id}> {alumno.id}: {alumno.nombre} {alumno.apellido} - {alumno.edad}</li>
                    ))
                }
                </ul>     
        </>

    )
}

export default CargaJson;