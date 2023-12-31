// Cargar Datos Asíncronamente:
//     Crea una función cargarDatos que simule la carga de datos de un servidor usando setTimeout. Utiliza async/await para esperar la carga de los datos y luego imprime el resultado.
  

    function simularCarga (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Datos cargados correctamente')
        },2000)
    })
}

async function cargarDatos () { 
    try{
        console.log('Cargando datos..')
        const resultado = await simularCarga()
        console.log(resultado)
    } catch (error) {
        console.log('Error al cargar los datos', error)
    }
}

cargarDatos()

  // Múltiples Promesas:
    // Crea una función obtenerDatos que tome un arreglo de URLs y utilice Promise.all para cargar múltiples datos de forma concurrente. Utiliza async/await para esperar la resolución de todas las promesas.

const urls = ['https://api1.com','https://api2.com','https://api3.com']

  

async function obtenerDatos(urls) { 
    try{
        console.log('Cargando datos..')
        const promesas = urls.map(url => simularCarga(url))
        const resultado = await Promise.all(promesas)
        console.log(resultado)
        return resultado
    } catch (error) {
        console.log('Error al cargar los datos', error)
        throw error
    }
}

(async () => {
    try {
        const datos = await obtenerDatos(urls);
        console.log('Datos cargados con exito');
        datos.forEach(dato => console.log(dato));
    } catch (error) {
        console.error ('Error al cargar los datos',error);
    }
})();

    // Iteración Asíncrona:
    // Escribe una función iterar que acepte un número y una función de retorno de llamada. La función de retorno de llamada debería ejecutarse en un bucle async, iterando desde 1 hasta el número proporcionado.

   async function iterar (numero,callback){
        for(let i = 1; i <= numero ; i++)
            await callback(i)
    }

   async function miFuncion(numero){
    console.log(`Ejecutandose con ${numero}`)
   }

   iterar(10,miFuncion)

//   Manejo de Tiempo de Espera:
//     Crea una función esperar que tome un número y espere ese número de milisegundos antes de resolver una promesa.

function esperar(tiempo){
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve()
        },tiempo)
    })
}

esperar(2000)
.then(()=>{
    console.log('Tiempo de espera 2 segundos')
})