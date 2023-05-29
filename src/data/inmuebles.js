export async function fetchObtenerInmuebles(){

    //const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/v1/inmueble`)
    const respuesta = await fetch('http://localhost:3000/fetchInmuebles')
    const resultado = await respuesta.json()
    return resultado
}

export async function fetchAgregarinmueble(inmueble){
    
    try {
        //const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/v1/inmueble`,{
        const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/fetchInmuebles`,{
            method: 'POST',
            body: JSON.stringify(inmueble),
            headers: {
                'Content-Type': 'application/json'
                }
        })
        const resultado= await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function fetchEditarInmueble({ titulo,descripcion,precio,direccion,ambientes,totales,cubiertos,estrellas,id}){
    try {
        //const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/v1/inmueble?id=${id}`,{
            const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/fetchInmuebles/${id}`,{
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
        const resultado= await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function fetchEliminarInmueble(id){
    try {
        if (id) {
            //const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/v1/inmueble?id=${id}`,{
                const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/fetchInmuebles/${id}`,{
                method: 'DELETE'
                })
                const resultado=  await respuesta.json()
                const result = [{status:200, resultado}]
                console.log(result)
                return result
        } else {
        const result = [{status:404, error:"No me pasaste el id"}]
        return result

        }
    
    } catch (error) {
        console.log(error)
        const result = [{status:404, error:"Hubo un error en la elimiacion"}]
        return result

    }
}