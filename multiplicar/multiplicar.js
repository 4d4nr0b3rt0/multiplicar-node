// requires

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================================='.green);
    console.log(`========Tabla del ${base}========`.green);
    console.log('================================='.green);

    for (var i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base *i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El avlor introducido: "${base}" NO es un Numero`);
            return;
        }

        let data = '';

        for (var i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base *i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}- al- ${limite}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}- al -${limite}.txt `.green);
            }


        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}