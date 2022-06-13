const colors = require('colors')

const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es el número base de la tabla a crear'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla creada en consola'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: false,
                default: 10,
                describe: 'Se multiplicará hasta el número indicado aquí'
            })
            .check((argv, options) => {
                if( isNaN( argv.base ) ) throw('El argumento B debe ser un número'.red)
                if( isNaN( argv.hasta ) ) throw('El argumento H debe ser un número'.red)

                return true
            })
            .argv

module.exports = argv;