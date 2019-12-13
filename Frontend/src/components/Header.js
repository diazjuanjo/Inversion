import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Header = () => {

    const [monto, setMonto] = useState(0)

    const consultarAPI = async () => {
        const url = `http://localhost:4000/inversiones/calculoMonto`

        const response = await fetch(url)
        const data = await response.json()
        // console.log("TCL: consultarAPI -> data", data)
        setMonto(data)
    }

    useEffect(() => {
        consultarAPI()
    }, [])

    return (
        <div>
            <h1 className="mt-4">${monto}</h1>

            <Link to = '/inversion' className="d-flex justify-content-end">
                <button type="button" className="btn btn-success mb-4">Agregar</button>
            </Link>
            
        </div>
    )
}

export default Header
