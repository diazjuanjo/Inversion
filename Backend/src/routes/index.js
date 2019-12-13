import express from 'express'
const router = express.Router()

import inversionController from '../controllers/inversionController'
    
    // Envia monto aleatorio
    router.get('/inversiones/calculoMonto',(req,res)=>{
        // max y min expresado en miles
        const max = 100
        const min = 5
        const resultado = (Math.floor(Math.random() * (max - min)) + min) * 1000
        res.send(`${resultado}`)
    })


    // Agrega nueva inversion via POST
    router.post('/inversiones/crearInversion',
        inversionController.nuevaInversion
    )

    // Obtener todas las inversion
    router.get('/inversiones', 
        inversionController.mostrarInversiones
    )

    // Muestra una inversion en especifico (ID)
    router.get('/inversiones/:id', 
        inversionController.mostrarInversion 
    )

    // Actualizar Inversion
    router.put('/inversiones/:id', 
        inversionController.actualizarInversion
    )

    // Eliminar Inversion
    router.delete('/inversiones/:id', 
        inversionController.eliminarInversion
    )

export default router

