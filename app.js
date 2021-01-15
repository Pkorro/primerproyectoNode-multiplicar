const colors = require('colors');
const argv = require('./config/yargs').argv;
const { crearArchivo , listarTabla} = require('./multiplicar/multiplicar.js');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then( archivo => console.log(`fin tabla.`))
        .catch(e => console.log(e));
        break;

    case 'crear': 
        crearArchivo(argv.base, argv.limite)
          .then( archivo => console.log(`Archivo creado: ${ archivo}`))
          .catch(e => console.log(e));
        break;
      default: 
          console.log('Comando no reconocido.');
    }
        

let argv2 = process.argv;



