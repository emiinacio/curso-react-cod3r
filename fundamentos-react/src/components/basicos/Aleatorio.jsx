import React from 'react';

export default (props) => {
    const max = props.max
    const min = props.min
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return(
        <div>
            <h1>
            Soteio Número Aleatório
            </h1>
            <p>
                Número Minimo: <strong>{min}</strong>
            </p>
            <p>
                Número Máximo: <strong>{max}</strong>
            </p>
            <p>Valor Aleatório <strong>{aleatorio}</strong></p>
        </div>
    );
}