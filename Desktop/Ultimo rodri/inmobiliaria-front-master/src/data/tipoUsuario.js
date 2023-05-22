export async function fetchObtenerTipoUsuario(){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/fetchTipoUsuario`)
    const resultado = await respuesta.json()
    return resultado
}

