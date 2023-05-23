
export default function AuthLoginAcc() {

    let tipoUsuario = null
    if (localStorage.getItem('Type')) {
    tipoUsuario = localStorage.getItem('Type').replace(/"/g, "")
        console.log("si")
    } else {
        window.location.href = "login"
    
    }
    if (tipoUsuario === "Usuario" && localStorage.getItem('Token')) {
    } else {
        if (tipoUsuario ==="Admin" &&  localStorage.getItem('Token')) {
            window.location.href = "dashboard"
        } else {
            window.location.href = "login"
        }
    }
return(
<>
</>
)
}