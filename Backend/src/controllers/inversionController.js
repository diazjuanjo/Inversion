import Inversion from '../models/Inversion'

// agrega un nueva inversion
const nuevaInversion = async (req, res, next) => {
    const inversion = new Inversion(req.body)

    try {
        // almacenar el registro
        await inversion.save()
        res.json(inversion)
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error)
        next()
    }
}

// Muestra todas las inversiones
const mostrarInversiones = async (req, res, next) => {
    let indice = parseInt(req.query.index)
    let cantidad = parseInt(req.query.quantity)

    try {
        const inversion = await Inversion
            .find({})
            .limit(cantidad)
            .skip(indice)

        const totalInversion = await Inversion.countDocuments()

        res.json({result: inversion, totalPages: totalInversion})

    } catch (error) {
        console.log(error)
        next()
    }
}

// Muestra una inversion por su ID
const mostrarInversion = async (req, res, next) => {
    const inversion = await Inversion.findById(req.params.id)

    if(!inversion) {
        res.json({mensaje : 'Esa inversion no existe'})
        next()
    }
    // Mostrar la inversion
    res.json(inversion)
}

// Actualiza una inversion por su ID
const actualizarInversion = async (req, res, next) => {
    try {
        const inversion = await Inversion.findOneAndUpdate({ _id : req.params.id }, req.body, {
            new : true
        })
        res.json(inversion)
    } catch (error) {
        res.send(error)
        next()
    }
}

// Elimina una inversion por su ID 
const eliminarInversion = async (req, res, next) => {
    try {
        await Inversion.findOneAndDelete({_id : req.params.id})
        res.json({mensaje : 'La inversion se ha eliminada'})
    } catch (error) {
        console.log(error)
        next()
    }
}

export default{
    nuevaInversion,
    mostrarInversiones,
    mostrarInversion,
    actualizarInversion,
    eliminarInversion
}