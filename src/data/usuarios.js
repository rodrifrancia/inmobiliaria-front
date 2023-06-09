export async function fetchObtenerUsuarios(){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/fetchUsuarios`)
    //const respuesta = await fetch(`http://192.168.0.31:3000/fetchUsuarios`)
    const resultado = await respuesta.json()
    return resultado
}

export async function fetchAgregarUsuario(usuario){
    
    try {
        const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/fetchUsuarios`,{
            //const respuesta= await fetch(`http://192.168.0.31:3000/fetchUsuarios`,{
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
            //const respuesta = await fetch(`http://192.168.0.31:3000/fetchUsuarios/${id}`,{
                method: 'DELETE'
                })
                const resultado=  await respuesta.json()
                const result = [{status:200, resultado}]
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
            //const respuesta = await fetch(`http://192.168.0.31:3000/fetchUsuarios/${id}`,{
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
    //const response = await fetch('http://127.0.0.1:8080/auth/singin',  {
    const response = await fetch('https://www.api.utopiaacademia.com.ar/login',  {
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
    if (response.status == 200) {
    localStorage.setItem('Token',JSON.stringify(data[0].token))
    localStorage.setItem( 'Type',JSON.stringify(data[0].tipo_usuario))
    return data
    } else {
    throw new Error("usuario o contraseña incorrectos")
    }
}