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






// function simularCarga (url){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const exito = Math.random() < 0.8
//             if (exito) {
//                 resolve (`Datos cargados de ${url}`)
//             } else {
//                 reject (`Error al cargar datos de ${url}`)
//             }
//         },2000)
//     })
// }

// async function obtenerDatos () { 
//     try{
//         console.log('Cargando datos..')
//         const promesas = urls.map (url => simularCarga(url))
//         const resultado = await Promise.all(promesas)
//         console.log(resultado)
//     } catch (error) {
//         console.log('Error al cargar los datos', error)
//     }
// }





// obtenerDatos(urls)
//     .then(datos => {
//         console.log('Datos cargados con exito')
//         datos.forEach(dato => console.log(dato))
//     })
//     .catch(error => console.error ('Error al cargar los datos',error))