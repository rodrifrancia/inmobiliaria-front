export default function AuthLoginAcc() {

    let tipoUsuario = null
    if (localStorage.getItem('Type')) {
    tipoUsuario = localStorage.getItem('Type').replace(/"/g, "")
    } else {
        window.location.href = "login"
    }
    if (tipoUsuario === "Admin" && localStorage.getItem('Token')) {
    } else {
        if (tipoUsuario ==="Usuario" &&  localStorage.getItem('Token')) {
            window.location.href = "account"
        } else {
            window.location.href = "login"
        }
    }
return(
<>
</>
)
}
