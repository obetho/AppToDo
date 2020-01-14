const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.listar();
        console.log(listado[0].descripcion);
        for (let tarea of listado) {
            console.log("========Por Hacer ==========".green);
            console.log(tarea.descripcion.gray);
            console.log(tarea.completado);
            console.log("========++++++++++==========".red);
        }
        break;

    case 'actualizar':
        let upd = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(upd);
        break;

    case 'borrar':
        let del = porHacer.borrar(argv.descripcion);
        console.log(del);
        break;

    default:
        console.log('Comando no reconocido');

}