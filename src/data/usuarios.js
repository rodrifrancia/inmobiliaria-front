export async function fetchObtenerUsuarios(){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/fetchUsuarios`)
    const resultado = await respuesta.json()
    return resultado
}

export async function fetchAgregarUsuario(usuario){
    
    try {
        const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/fetchUsuarios`,{
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
                }
        })
        const resultado= await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function fetchEliminarUsuario(id){
    try {
        if (id) {
            const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/fetchUsuarios/${id}`,{
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