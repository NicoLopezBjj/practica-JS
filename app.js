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

