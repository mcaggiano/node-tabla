const fs = require('fs')
const colors = require('colors')

const crearArchivo = async ( base, baseH = 10, listar ) => {

    // dentro del try mando unas intrucciones a intentar, en caso de no funcionar se ejecuta el catch
    // dentro de catch mandamos una respuesta si no se logran hacer las instrucciones

    try {

        let salida = '';

        for (let i = 1; i <= baseH; i++) {
            salida += (`${ base } x ${ i } = ${ base * i }\n`);
        }

        if ( listar ) {
            console.log('======================='.red)
            console.log('     Tabla del:'.green , colors.red( base ) )
            console.log('======================='.red)
            console.log(salida)
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida)

        return(`tabla-${ base }.txt creado correctamente`.bgBrightWhite.red)

    } catch (err) {
        throw err; 
    }
    
}

module.exports = {
    crearArchivo
}

// fs.writeFileSync( `tabla-${base}.txt`, salida, (err) => {
//     // Si hay un error, throw lo lanzara y corta la ejecución
//     if (err) throw err;
//     console.log(`Archivo tabla-${base}.txt creado correctamente`)
// })