export async function fetchObtenerInmuebles(){

    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()
    return resultado
}

export async function fetchAgregarinmueble(inmueble){
    
    try {
        const respuesta= await fetch(import.meta.env.VITE_API_URL,{
            method: 'POST',
            body: JSON.stringify(inmueble),
            headers: {
                'Content-Type': 'application/json'
                }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function fetchEditarInmueble({ titulo,descripcion,precio,direccion,ambientes,totales,cubiertos,estrellas,id}){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PUT',
            body: JSON.stringify({
                titulo,
                descripcion,
                precio,
                direccion,
                ambientes,
                totales,
                cubiertos,
                estrellas,
                id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function fetchEliminarInmueble(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'DELETE'
            })
            await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}