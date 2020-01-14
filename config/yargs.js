const opts = {
    crear: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    },
    actualizar: {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: false,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    }
}

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: false,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra la tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}