export async function fetchObtenerTipoUsuario(){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/fetchTipoUsuario`)
    //const respuesta = await fetch(`http://192.168.0.31:3000/fetchTipoUsuario`)
    const resultado = await respuesta.json()
    return resultado
}

