const argv = require('./confi/yargs.js').argv;
const porHacer = require('./by_do/by_do');
let comando = argv._[0];

switch (comando){
    case 'crear' : 
        let tarea = porHacer.crear(argv.description); 
        console.log(tarea);
        break;
    case 'listar': 
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('============== Task By Do ======= ');
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================================== ');

        }
         break;
    case 'actualizar': 
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
         break;
    
    case 'borrar':{
        let resul = porHacer.borrar(argv.description);
        console.log(resul);
        break;
    }
    
    default: console.log('Comando no es reconocido');


}
 