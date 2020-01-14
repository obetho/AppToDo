const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardaDB();
    return porHacer;
}

const actualizar = (descripcion, status = false) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = status;
        guardaDB();
        return true;
    } else {
        return false;
    }
}

const guardaDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const listar = () => {
    cargarDB();
    console.log(listadoPorHacer);
    return listadoPorHacer;
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index);
        guardaDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    guardaDB,
    listar,
    actualizar,
    borrar
}