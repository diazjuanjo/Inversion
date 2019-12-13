import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const Formulario = ({history, updateInversion}) => {

    const [inversion, setInversion] = useState ({
        name: '',
        amount: ''
    })

    // leer los datos del formulario
    const handleChange = e => {
        setInversion({
            ...inversion,
            [e.target.name] : e.target.value
        })
        // console.log(inversion);
    }

    //añade a la api un nueva inversion
    const handleSubmit = e => {
        e.preventDefault()

        // enviar peticion
        const url = `http://localhost:4000/inversiones/crearInversion`

        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(inversion), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => updateInversion(response))
        
        // redireccionar
        history.push('/')
    }

    //validar form
    const validarInversion = () => {
        const {name, amount} = inversion

        let valido = !name.length || !amount.length

        return valido
    }

    return (
        <div>
            <h1>Nueva inversion</h1>
            <form
                onSubmit={handleSubmit}
                className="form-group row"
            >
                <label className="col-sm-2 col-from-label">Nombre: </label>
                <div className="col-sm-10">
                    <input 
                        type="text"
                        placeholder="Nombre Inversion"
                        name="name"
                        onChange={handleChange}
                    />
                </div>
                <label className="col-sm-2 col-from-label">Monto: </label>
                <div className="col-sm-10">
                    <input 
                        type="text"
                        placeholder="monto inversion"
                        name="amount"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input 
                        type="submit" 
                        className="btn btn-success" 
                        value="Agregar inversion"
                        disabled={validarInversion()}
                    />
                </div>
            </form>
        </div>
    )
}

export default withRouter(Formulario)

