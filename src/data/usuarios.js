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

export async function fetchEditarUsuario(nombre,apellido,email,telefono,tipo,constrasenia,id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/fetchUsuarios/${id}`,{
            method: 'PUT',
            body: JSON.stringify({
                nombre,
                apellido,
                email,
                telefono,
                tipo,
                constrasenia,
                id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            return respuesta
    } catch (error) {
        console.log(error)
    }
}
export const fetchLogin = async (usuario,clave) =>{
    console.log("login")
    const response = await fetch(`https://www.api.utopiaacademia.com.ar/login`,  {
    method: 'POST',
    body: JSON.stringify({
        usuario: usuario,
        clave: clave
    }),
    headers: {
        'Content-Type': 'application/json'
    }
    });
    const data = await response.json()
    console.log(data)
    if (response.status == 200) {
    localStorage.setItem('Token',JSON.stringify(data[0].token))
    localStorage.setItem( 'Type',JSON.stringify(data[0].tipo_usuario))
    window.location.href = 'dashboard'
    } else {
    alert("Usuario o contraseña incorrectos")
    }
}