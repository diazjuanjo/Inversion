import React from 'react'
import Inversion from '../components/Inversion'

const Inversiones = ({inversion}) => {
    return (

        <div className="row">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {inversion.map((item, index) => (
                        <Inversion
                            key={index}
                            data={item}
                            index={index}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Inversiones
