const descripcion = {
       description:{
            alias: 'd',
            demand: true,
            dec: 'Descripcion de la tarea por hacer'
        }
};

const completado = {
            completado: {
            alias: 'c',
            default: true
        }
};

const argv = require ('yargs')
    .command('crear', 'Create an element for to do',descripcion)
    .command('actualizar','Actualiza el estado completado de una tarea',{
     description:{
            alias: 'd',
            demand: true,
            dec: 'Descripcion de la tarea por hacer'
        },
      completado:{
            alias: 'c',
            default: true
        }
        
    })
    .command('borrar','Borra una tarea',descripcion)
    .help()
    .argv;

module.exports ={
    argv
}