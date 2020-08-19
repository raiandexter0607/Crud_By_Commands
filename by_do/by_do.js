const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = ()=>{

        let data= JSON.stringify(listadoPorHacer);

            fs.writeFile(`db/data.json`,data,(err)=>{
                if(err) throw new Error ('No se puedo grabar', err);

            });

}

const cargarDb = ()=>{
  try{
        listadoPorHacer = require('../db/data.json');
    }catch{
        listadoPorHacer = [];
    }
    
}

const crear = (descripcion)=>{

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer);

    guardarDb();

    return porHacer;
}

const getListado = () =>{
    cargarDb();
    return listadoPorHacer;
  
}


const actualizar = (descripcion, completado=true)=>{
    cargarDb();

    // con finIndex puedo obtener la posicion de la tarea y comparar con
    // la que me envia el usuario

    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    })
    console.log(index);
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion)=>{
    cargarDb();
    let nuevoListado = listadoPorHacer.filter(tarea =>{
        return tarea.descripcion !== descripcion});

    if( listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDb();
        return true;
    }
} 






module.exports= {
    crear,
    getListado,
    actualizar,
    borrar
}
