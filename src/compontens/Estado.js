import { useState } from "react";
import '../styles/estado.css';

function EjemploEstado(props) {
    const [counter, setcounter] = useState(0);
    console.log(counter);

    return (
        <div className="contenedor">
            <div className="counter">
                <h3>Contador: {counter}</h3>
            </div>
            <div className="botones">
                <button className="error" onClick={() => setcounter(counter - 1)}>-</button>
                <button className="success" onClick={() => setcounter(counter + 1)}>+</button>
            </div>

        </div>
    )
}

export { EjemploEstado }